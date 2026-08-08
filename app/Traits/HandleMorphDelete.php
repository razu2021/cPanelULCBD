<?php
namespace App\Traits;

use App\Models\PageSection;
use App\Models\Seo;

trait HandleMorphDelete
{
   
    protected static function bootHandleMorphDelete()
{
    // ডিলিট করার জন্য
    static::deleting(function($model){
        if(!method_exists($model, 'isForceDeleting') || !$model->isForceDeleting()){
            static::handleCascade($model, 'delete');
        }
    });

    // ফোর্স ডিলিট
    static::forceDeleting(function($model){
        static::handleCascade($model, 'forceDelete');
    });

    // রিস্টোর করার জন্য (আপনার নতুন সমস্যার সমাধান)
    static::restoring(function($model){
        static::handleCascade($model, 'restore');
    });
}



protected static function handleCascade($model, $action)
{
    // ১. PageSection এর জন্য চাইল্ড কন্টেন্ট ডিলিট (About, Faq, Post ইত্যাদি)
    if (method_exists($model, 'getCascadeRelations')) {
        $relations = $model->getCascadeRelations();
        foreach ($relations as $relationName) {
            if (method_exists($model, $relationName)) {
                // রিলেশনের ভেতরের active/inactive ঝামেলা এড়াতে সরাসরি মডেল কুয়েরি
                $relation = $model->$relationName();
                $relatedModel = get_class($relation->getRelated());
                $foreignKey = $relation->getForeignKeyName();

                // এখানে withTrashed() দিলে active/inactive সব ডাটা পাওয়া যাবে
                $relatedModel::where($foreignKey, $model->id)->withTrashed()->get()->each(function($child) use ($action) {
                    $child->$action(); // ডিলিট বা রিস্টোর কমান্ড
                });
            }
        }
    }

    // ২. চেইন মেনটেইন করা (Category -> SubCategory -> PageSection)
    if (property_exists($model, 'cascadeRelations') && is_array($model->cascadeRelations)) {
        foreach ($model->cascadeRelations as $relation) {
            if (method_exists($model, $relation)) {
                $model->$relation()->withTrashed()->get()->each(function($child) use ($action) {
                    $child->$action();
                });
            }
        }
    }

    // ৩. Morph Relations (SEO এবং PageSection)
    static::handleMorphRelations($model, $action);
}

protected static function handleMorphRelations($model, $action) {
    // SEO ডিলিট/রিস্টোর
    \App\Models\Seo::where('seoable_id', $model->id)
        ->where('seoable_type', get_class($model))
        ->withTrashed()->get()->each->$action();

    // PageSection ডিলিট/রিস্টোর (এটিই সাব-কন্টেন্টগুলোকে সিগন্যাল দিবে)
    \App\Models\PageSection::where('sectionable_id', $model->id)
        ->where('sectionable_type', get_class($model))
        ->withTrashed()->get()->each->$action();
}




}
