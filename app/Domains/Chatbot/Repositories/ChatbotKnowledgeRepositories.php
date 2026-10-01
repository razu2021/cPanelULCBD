<?php 
namespace App\Domains\Chatbot\Repositories;
use App\Domains\Chatbot\Models\ChatbotKnowledge;

class ChatbotKnowledgeRepositories {

  /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

/**
 * ===================================================
 * get index data 
 * ================================================
 */
    public function index(array $filters, int $paginate = 10, array $relations = []){

        $query = ChatbotKnowledge::with($relations);

        if(!empty($filters['search'])){
           $query->where('name', 'LIKE', '%' . $filters['search'] . '%');
        }

       if (isset($filters['status']) && $filters['status'] !== '') {
        $query->where('public_status', $filters['status']);
    }

        return $query->latest('id')->paginate($paginate);

    }
/**
 * ===================================================
 * get index data 
 * ================================================
 */
    public function allTrashData(array $filters, int $paginate = 10){

        $query = ChatbotKnowledge::query();
        $query->onlyTrashed();

        if(!empty($filters['search'])){
           $query->where('type', 'LIKE', '%' . $filters['search'] . '%');
        }

        if (isset($filters['status']) && $filters['status'] !== '') {
            $query->where('public_status', $filters['status']);
        }

        return $query->latest('id')->paginate($paginate);

    }


    public function findByIdAndSlug($id, $slug, array $relations=[]){

        return ChatbotKnowledge::with($relations)->where('id',$id)->where('slug',$slug)->firstOrFail();
    }



    public function storeData(array $data){
        return ChatbotKnowledge::create($data);
    }

    // ====== update
    public function updateData( $item , array  $data){
       $item->update($data);
       return $item;
    }


    /**
     * ======== upload image inside of database 
     */
    public function updateImage($id,$file){
       return ChatbotKnowledge::where('id',$id)->update([
            'cover_image' => $file ,
       ]);
    }


     /**
     * ======== status update 
     */
    public function updateStatus($id,$slug,$status){
        $item = ChatbotKnowledge::where('id',$id)->where('slug',$slug)->firstOrFail();
        return $item->update(['public_status' => $status]);
    }


    // ==== soft delete or Move to Trush 
    public function softDelete($id){
        $item = ChatbotKnowledge::where('id',$id)->firstOrFail();
        return $item->delete();
    }
   

    /**
     * Heard Delete database data with image/ file 
     */
    public function findTrashedById($id){
        return ChatbotKnowledge::onlyTrashed()->where('id',$id)->firstOrFail();
    }

    public function heardDelete($id){
        $item = ChatbotKnowledge::onlyTrashed()->where('id',$id)->firstOrFail();
        return $item->forceDelete();
    }




    /**
     * ============================================================
     * Bulk Action Query Start here 
     * ============================================================
     */
    public function getTrashedItemsByIds(array $ids){
        return ChatbotKnowledge::onlyTrashed()->whereIn('id',$ids)->get();
    }

    public function bulkStatusUpdate(array $ids, $status){

        return ChatbotKnowledge::whereIn('id',$ids)->update(['public_status'=>$status]);
    }

    public function bulkSoftDelete(array $ids){

        return ChatbotKnowledge::whereIn('id',$ids)->delete();
    }

    public function bulkForceDelete(array $ids){
        return ChatbotKnowledge::onlyTrashed()->whereIn('id',$ids)->forceDelete();
    }

    public function bulkRestore(array $ids){
        return ChatbotKnowledge::onlyTrashed()->whereIn('id',$ids)->restore();
    }

}