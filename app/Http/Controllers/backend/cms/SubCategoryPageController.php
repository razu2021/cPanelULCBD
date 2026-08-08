<?php

namespace App\Http\Controllers\backend\cms;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\SubCategoryPageExport;
use App\Models\CategoryPage;
use Illuminate\Support\Str;
use App\Models\SubCategoryPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;


class SubCategoryPageController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = SubCategoryPage::query(); 
        $query->with(['category']);

        if($request->filled('search')){
            $query->where('name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/cms/subcategory/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add()
    {
        $allcategory = CategoryPage::where('public_status',1)->get();
        return Inertia::render('backend/cms/subcategory/add',[
            'allcategory'=> $allcategory
        ]);
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = SubCategoryPage::with(['creator','editor','category'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/cms/subcategory/show',[
            'data' => $data
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $allcategory = CategoryPage::where('public_status',1)->get();

        $data = SubCategoryPage::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/cms/subcategory/edit',[
            'data' => $data,
            'allcategory' => $allcategory
        ]);
       
    }




    /**
     * =======================================================================
     * ==============================================================================================  CREATE FUNCTION START HERE ========================================================
     * =======================================================================
     */
    public function insert(Request $request){
         /**--- validation code -- */
        $request->validate( [
                'name' => ['required', 'string', 'max:255',Rule::unique('sub_category_pages','name')],
                'slug' => ['required', 'string', 'max:255', Rule::unique('sub_category_pages','url')],
                'category_id' => 'required',
               
            ],[
                'name.required'=> 'Name field is Required !',
                'slug.required'=> 'Slug field is Required !',
                'name.unique'=> 'This name already exists. !',
                'slug.unique'=> 'This URL already exists. !',
                'category_id'=> 'Select a Categories. !',
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();

        //------- make a custom url for -------
        $categoryname = strtolower($request->name);
        $user_input_url  = strtolower($request->slug) ;
        if(!empty($user_input_url)){
            $url = Str::slug($user_input_url); // Output: "my-new-category-name"
        }else{
            $url = Str::slug($categoryname); // Output: "my-new-category-name"
        }

        // ----- insert record into database 
        $insert = SubCategoryPage::create([
            'category_id'=>$request->category_id,
            'name'=>$request->name,
            'title'=>$request->title,
            'description'=>$request->description,
            'url'=>$url,
            'order'=>$request->order,
            'public_status'=>$request->public_status ?? 0,
            'is_nav'=>$request->is_nav ?? 1,
            'slug'=>$slug,
            'creator_id' => $creator_id,
            'created_at' => Carbon::now()->toDateTimeString(),
        ]);

        // ---------- seo data insert into seo table 
        $insert->seo()->create([
            'user_id'=>$creator_id,
            'meta_title'=>$insert->title ?? 'title',
            'meta_description'=>$insert->title ?? 'description',
            'slug'=>$slug,
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
        $category = SubCategoryPage::where('id',$request->id)->first();
        $request->validate( [
                'name' => ['required', 'string', 'max:255',Rule::unique('sub_category_pages','name')->ignore($category->id)],
                'url' => ['required', 'string', 'max:255', Rule::unique('sub_category_pages','url')->ignore($category->id)],
                'category_id' =>'required',
               
            ],[
                'name.required'=> 'Name field is Required !',
                'url.required'=> 'Slug field is Required !',
                'name.unique'=> 'This name already exists. !',
                'url.unique'=> 'This URL already exists. !',
                'category_id'=> 'Select Categories !',
            ]
        );

        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;

        //------- make a custom url for -------
        $categoryname = strtolower($request->name);
        $user_input_url  = strtolower($request->url) ;
        if(!empty($user_input_url)){
            $url = Str::slug($user_input_url); // Output: "my-new-category-name"
        }else{
            $url = Str::slug($categoryname); // Output: "my-new-category-name"
        }

        // ----- insert record into database 
        $update = SubCategoryPage::where('id',$id)->where('slug',$slug)->firstOrFail();

        if($update){
            $update->update([
            'category_id'=>$request->category_id,
            'name'=>$request->name,
            'title'=>$request->title,
            'description'=>$request->description,
            'url'=>$url,
            'order'=>$request->order,
            'public_status'=>$request->public_status ?? 0,
            'is_nav'=>$request->is_nav ?? 1,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);
            flash()->success('Information Updated successfully!');
            return redirect()->route('sub_category_page.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = SubCategoryPage::where('id',$id)->where('slug',$slug)->where('public_status',0)->firstOrFail();

        if($active){
            $active->update(['public_status' => 1,]);
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

        $active = SubCategoryPage::where('id',$id)->where('slug',$slug)->where('public_status',1)->firstOrFail();

        if($active){
            $active->update(['public_status' => 0,]);
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
        $data= SubCategoryPage::where('id',$id)->first();
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
        $data= SubCategoryPage::onlyTrashed()->where('id',$id)->first();
        
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
        $query = SubCategoryPage::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/cms/subcategory/recycle',[
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
            $data = SubCategoryPage::whereIn('id',$ids)->get();
            foreach($data as $items){
                $items->delete();
            }
            flash()->success(' Informations deleted successfully.');
            return redirect()->back();
     
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = SubCategoryPage::whereIn('id',$ids)->where('public_status',0)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>1,]);
            }
            flash()->success(' Informations Active successfully.');
            return redirect()->back();
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = SubCategoryPage::whereIn('id',$ids)->where('public_status',1)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>0,]);
            }
            flash()->success(' Informations Inactive successfully.');
            return redirect()->back();
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = SubCategoryPage::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->forceDelete();
                }
            flash()->success(' Informations deleted successfully.');
            return redirect()->back();

        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Restore'){
            $categorys = SubCategoryPage::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }
            flash()->success(' Informations Restore successfully.');
            return redirect()->back();

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = SubCategoryPage::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new SubCategoryPageExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new SubCategoryPageExport($ids), now().'.csv');
        }
        return back();

    }





    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = SubCategoryPage::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/subcategory/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = SubCategoryPage::get();
        $fileName =now().'.pdf';
        $pdf = pdf::loadView('backend/export/subcategory/export_pdf',[
            'dataJson' => $data->toArray()
        ])->setPaper('a4', 'portrait');
        return $pdf->download($fileName);
       
    }


    /**
     * 
     * ================= export Excel function start here ===========================
     */
    public function export_excel(){
        return Excel::download(new SubCategoryPageExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new SubCategoryPageExport, now().'.csv');
    }


}
