<?php

namespace App\Http\Controllers\backend\cms;

use App\Http\Controllers\Controller;
use App\Models\CategoryPage;
use App\Models\ChildCategoryPage;
use App\Models\PageSection;
use App\Models\SubCategoryPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class pageManagementController extends Controller
{
    /**
     * ========  all category page funcationality ====
     */
    public function categoryPage(){

        $allpage = CategoryPage::orderBy('order','ASC')->get();

        return Inertia::render('backend/cms/allpages/category_page',[
            'allpage' => $allpage,
        ]);
    }

    /**
     * ========= ctegory page section  =======
    */

    public function categoryPageSection($section){
        $category = CategoryPage::where('id',$section)->firstOrFail();
        $sections = $category->getCategorySection()->get();
        return Inertia::render('backend/cms/allpages/categorypage_section',[
            'sections' => $sections,
        ]);
        
    }
    //--------------------------------------------------------------------------------------------------------------------
    public function subCategoryPage(){

        $allpage = SubCategoryPage::orderBy('order','ASC')->get();

        return Inertia::render('backend/cms/allpages/subcategory_page',[
            'allpage' => $allpage,
        ]);
    }

    /**
     * ========= ctegory page section  =======
    */

    public function subCategoryPageSection($section){
        $category = SubCategoryPage::where('id',$section)->firstOrFail();
        $sections = $category->getCategorySection()->get();
        return Inertia::render('backend/cms/allpages/sub_categorypage_section',[
            'sections' => $sections,
        ]);
        
    }

    //--------------     Child Category page and section      ------------------------------------------------------------------------------------------------------
    public function childCategoryPage(){

        $allpage = ChildCategoryPage::orderBy('order','ASC')->get();

        return Inertia::render('backend/cms/allpages/childcategory_page',[
            'allpage' => $allpage,
        ]);
    }

    /**
     * ========= ctegory page section  =======
    */

    public function childCategoryPageSection($section){
        $category = ChildCategoryPage::where('id',$section)->firstOrFail();
        $sections = $category->getCategorySection()->get();
        return Inertia::render('backend/cms/allpages/child_categorypage_section',[
            'sections' => $sections,
        ]);
        
    }




















/**============== ------------- ===============*/   
}
