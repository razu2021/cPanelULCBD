<?php

namespace App\Http\Controllers\backend\cms;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\PageSectionExport;
use App\Models\CategoryPage;
use Illuminate\Support\Str;
use App\Models\ChildCategoryPage;
use App\Models\PageSection;
use App\Models\SubCategoryPage;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;


class PageSectionController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = PageSection::query(); 

        $query->with(['subcategory','sectionable']);

        if($request->filled('search')){
            $query->where('name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

   

        $alldata = $query->paginate(10)->withQueryString();




        return Inertia::render('backend/cms/pagesection/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function getCategory(){

        return CategoryPage::where('public_status',1)->get();
       
    }
    public function getSubcategory(){
        return SubCategoryPage::where('public_status',1)->get();
       
    }
    public function getChildcategory(){
        return ChildCategoryPage::where('public_status',1)->get();
       
    }





    public function add()
    {
        $allcategory = CategoryPage::where('public_status',1)->get();
        return Inertia::render('backend/cms/pagesection/add',[
            'allcategory'=> $allcategory
        ]);
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = PageSection::with(['creator','editor','sectionable'])->where('id',$id)->where('slug',$slug)->firstOrFail();

        if($data->sectionable  instanceof  CategoryPage){
            $current_page = CategoryPage::where('id',$data->sectionable_id)->value('name');
            $currentCategory = 'Category Page';
        }elseif($data->sectionable  instanceof SubCategoryPage){
            $current_page = SubCategoryPage::where('id',$data->sectionable_id)->value('name');
            $currentCategory = 'Sub Category Page';
        }elseif($data->sectionable  instanceof ChildCategoryPage){
            $current_page = ChildCategoryPage::where('id',$data->sectionable_id)->value('name');
            $currentCategory = 'Child Category Page';
        }

     


        return Inertia::render('backend/cms/pagesection/show',[
            'data' => $data,
            'current_page' =>$current_page,
            'currentCategory' => $currentCategory,

        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $allcategory = CategoryPage::where('public_status',1)->get();

        $data = PageSection::with(['creator','editor','sectionable'])->where('id',$id)->where('slug',$slug)->firstOrFail();

        $currentCategory = null;

        if($data->sectionable  instanceof  CategoryPage){
            $currentCategory = 'category_page';
        }elseif($data->sectionable  instanceof SubCategoryPage){
            $currentCategory = 'subcategory_page';
        }elseif($data->sectionable  instanceof ChildCategoryPage){
            $currentCategory = 'childcategory_page';
        }


        return Inertia::render('backend/cms/pagesection/edit',[
            'data' => $data,
            'allcategory' => $allcategory,
            'currentCategory'=> $currentCategory,
        ]);
       
    }




    /**
     * =======================================================================
     * ==============================================================================================  CREATE FUNCTION START HERE ========================================================
     * =======================================================================
     */
    public function insert(Request $request){
       
         /**--- validation code -- */
        // $request->validate( [
        //         'name' => ['required', 'string', 'max:255',Rule::unique('sub_category_pages','name')],
        //         'slug' => ['required', 'string', 'max:255', Rule::unique('sub_category_pages','url')],
        //         'sub_category_id' => 'required',
               
        //     ],[
        //         'name.required'=> 'Name field is Required !',
        //         'slug.required'=> 'Slug field is Required !',
        //         'name.unique'=> 'This name already exists. !',
        //         'slug.unique'=> 'This URL already exists. !',
        //         'sub_category_id'=> 'Select a Categories. !',
        //     ]
        // );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();

        //------- make a custom url for -------
        $pagetype = $request->page_type;

        //--  create dynamic route ---
        $sectionkey = $request->section_key;
        $baseSection = Str::before($sectionkey,'_').'_manage';

        // find page model 
        if($pagetype === 'category_page'){
           $category = CategoryPage::where('id',$request->categorypage_id)->first();
        }elseif($pagetype === 'subcategory_page'){
            $category = SubCategoryPage::where('id',$request->subcategorypage_id)->first();
        }elseif($pagetype === 'childcategory_page'){
            $category = ChildCategoryPage::where('id',$request->childcategorypage_id)->first();
        }

   

        $settings = [
            'bg_color'   => '#ffffff',
            'padding'    => '20px',
            'show_title' => true,
            'margin_top' => '10px',
        ];


        // ----- insert record into database 
        $insert = PageSection::create([
            'section_key'=>$request->section_key,
            'sectionable_type'=> get_class($category),
            'sectionable_id'=> $category->id,
            'section_heading'=>$request->section_heading,
            'section_title'=>$request->section_title,
            'description'=>$request->description,
            'order'=>$request->order,
            'dynamic_route'=>$baseSection,
            'payload_json'=>$settings ?? [],
            'public_status'=>$request->public_status ?? 0,
            'slug'=>$slug,
            'creator_id' => $creator_id,
            'created_at' => Carbon::now()->toDateTimeString(),
        ]);

        //---------------------- if insert ------
        if($insert){
            flash()->success('created successfully!');
        }else{
             flash()->error('created Faild!');
        }
        //---------------------- if insert ------

          return redirect()->back();
        


    }


    /**
     * 
     * ============ Update information function start here ===========
     */

    public function update(Request $request){
        /**--- validation code -- */
     
        // $request->validate( [
        //         'name' => ['required', 'string', 'max:255',Rule::unique('sub_category_pages','name')->ignore($category->id)],
        //         'url' => ['required', 'string', 'max:255', Rule::unique('sub_category_pages','url')->ignore($category->id)],
        //         'sub_category_id' =>'required',
               
        //     ],[
        //         'name.required'=> 'Name field is Required !',
        //         'url.required'=> 'Slug field is Required !',
        //         'name.unique'=> 'This name already exists. !',
        //         'url.unique'=> 'This URL already exists. !',
        //         'sub_category_id'=> 'Select Categories !',
        //     ]
        // );

        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;

        //------- make a custom url for -------
        $pagetype = $request->page_type;
       
        if($pagetype === 'category_page'){
           $category = CategoryPage::where('id',$request->categorypage_id)->first();
        }elseif($pagetype === 'subcategory_page'){
            $category = SubCategoryPage::where('id',$request->subcategorypage_id)->first();
        }elseif($pagetype === 'childcategory_page'){
            $category = ChildCategoryPage::where('id',$request->childcategorypage_id)->first();
        }
        // ----- insert record into database 
        $update = PageSection::where('id',$id)->where('slug',$slug)->update([
            'section_key'=>$request->section_key,
            'sectionable_type'=> get_class($category),
            'sectionable_id'=> $category->id,
            'section_heading'=>$request->section_heading,
            'section_title'=>$request->section_title,
            'description'=>$request->description,
            'order'=>$request->order,
            'public_status'=>$request->public_status ?? 0,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);

        if($update){
            flash()->success('Information Updated successfully!');
            return redirect()->route('page_section.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = PageSection::where('id',$id)->where('slug',$slug)->where('public_status',0)->update([
            'public_status' => 1,
        ]);

        if($active){
            flash()->success('Status Updated Successfully !');
        }else{
            flash()->error('Status Updated Faild !');
        }

        return redirect()->back();
    }

    /**
     * ======== De Active Functionality Start here ==========
     */
    public function deactive($id,$slug){

        $active = PageSection::where('id',$id)->where('slug',$slug)->where('public_status',1)->update([
            'public_status' => 0,
        ]);

        if($active){
            flash()->success('Status Updated Successfully !');
        }else{
            flash()->error('Status Updated Faild !');
        }

        return redirect()->back();
    }
    /**
     * ======== Soft Delete Functionality Start here ==========
     */
    public function softdelete($id){
        $data= PageSection::where('id',$id)->first();
        $data->delete();

        if ($data) {
        flash()->success('Record deleted successfully!');
        } else {
            flash()->error('Failed to delete record!');
        }

        return back();
    }
    /**
     * ========  Delete Functionality Start here ==========
     */
    public function delete($id){
        $data= PageSection::onlyTrashed()->where('id',$id)->first();
        
        if ($data) {
        $data->forceDelete();
        flash()->success('Record deleted successfully!');
        } else {
            flash()->error('Failed to delete record!');
        }

        return back();
    }

    /**
     * ========  Recycle Functionality Start here ==========
     */
    public function recycle(Request $request){
        $query = PageSection::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/cms/pagesection/recycle',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }






/**
 * ============== Bulk Action Function start here=====================
 * ==========================
 * =======================================================================================================================
 */

    public function bulkAction(Request $request){
        
        //-------- get multiple ids, type or bulk record 
        $ids = $request->input('ids', []);
        $action = $request->input('action');

        if (empty($ids)) {
            return response()->json(['success' => false, 'message' => 'No IDs selected.']);
        }
    

        // ---------- soft delete code start here 
        if($action === 'delete'){
            $data = PageSection::whereIn('id',$ids)->get();
            foreach($data as $items){
                $items->delete();
            }
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = PageSection::whereIn('id',$ids)->where('public_status',0)->update([
                'public_status'=>1,
            ]);
 
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = PageSection::whereIn('id',$ids)->where('public_status',1)->update([
                'public_status'=>0,
            ]);
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = PageSection::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->forceDelete();
                }

        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Restore'){
            $categorys = PageSection::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = PageSection::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new PageSectionExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new PageSectionExport($ids), now().'.csv');
        }
        return back();

    }





    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = PageSection::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/pagesection/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = PageSection::get();
        $fileName =now().'.pdf';
        $pdf = pdf::loadView('backend/export/pagesection/export_pdf',[
            'dataJson' => $data->toArray()
        ])->setPaper('a4', 'portrait');
        return $pdf->download($fileName);
       
    }


    /**
     * 
     * ================= export Excel function start here ===========================
     */
    public function export_excel(){
        return Excel::download(new PageSectionExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new PageSectionExport, now().'.csv');
    }



    //---------- change theme for each section 
    public function changeTheme($id,$slug){
        $data = PageSection::where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/cms/pagesection/change_theme',[
            'data'=>$data,
        ]);
    }


    //---------- theme update functionality here  
    public function themeUpdate(Request $request){
        $id = $request->id;
        $slug = $request->slug;
        $data = PageSection::where('id',$id)->where('slug',$slug)->firstOrFail();

        if($data){
            $data->update([
                'section_key'=>$request->theme,
            ]);
            flash()->success('Theme Updated successfully!');
        }else{
            flash()->error('Theme Updated Faild !');
        }

        
    }











}
