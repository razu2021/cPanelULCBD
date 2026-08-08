<?php

namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\sitesetting\SiteInfromationExport;
use Illuminate\Support\Str;
use App\Models\SiteInfo;
use App\Models\PageSection;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\File; 
use Inertia\Inertia;
use App\Services\ImageUploadService;

class SiteInfromationController extends Controller
{
     /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = SiteInfo::query(); 

        if($request->filled('search')){
            $query->where('site_name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/siteinfo/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add()
    {
     
      
        return Inertia::render('backend/sitesetting/siteinfo/add');
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = SiteInfo::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/siteinfo/show',[
            'data' => $data
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $data = SiteInfo::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/siteinfo/edit',[
            'data' => $data
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
                'site_name' => ['required', 'string',], 
                'site_title' => ['required', 'string',], 
                'site_slogan' => ['required', 'string',], 
           
            ],[
                'site_name.required'=> 'Site Name field is Required !',
                'site_title.required'=> 'Title field is Required !',
                'site_slogan.required'=> 'Site Slogan field is Required !',
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();

       
        // ----- insert record into database 
        $insert = SiteInfo::create([
            'site_name'=>$request->site_name,
            'site_title'=>$request->site_title,
            'site_slogan'=>$request->site_slogan,
            'site_description'=>$request->site_description,
            'opening'=>$request->opening,
            'order'=>$request->order,
            'public_status'=>$request->public_status ?? 0,
            'slug'=>$slug,
            'creator_id' => $creator_id,
            'created_at' => Carbon::now()->toDateTimeString(),
        ]);


        /**======== upload Cover image image via the service class start ====== */
            $id = $insert->id;
        if ($request->hasFile('cover_image')) {
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('cover_image')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = SiteInfo::where('id', $id)
                        ->where('id', $id)->update([
                            'cover_image' => $upload,
                        ]);
        }
        /**======== upload Thumbnail image via the service class start ====== */
        if ($request->hasFile('thumbnail')) {
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('thumbnail')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = SiteInfo::where('id', $id)
                        ->where('id', $id)->update([
                            'thumbnail' => $upload,
                        ]);
        }

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
     
       
        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;


        // ----- insert record into database 
        $update = SiteInfo::where('id',$id)->where('slug',$slug)->firstOrFail();

        $update->update([
            'site_name'=>$request->site_name,
            'site_title'=>$request->site_title,
            'site_slogan'=>$request->site_slogan,
            'site_description'=>$request->site_description,
            'opening'=>$request->opening,
            'order'=>$request->order,
            'public_status'=>$request->public_status ?? 0,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);

        /**======== upload image via the service class start ====== */
        if ($request->hasFile('cover_image')) {
            //---- find old image for delete -----
            $exixtimage = SiteInfo::where('id', $id)->first();
            $oldimage = $exixtimage->cover_image;
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('cover_image')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = SiteInfo::where('id', $id)
                        ->where('slug', $slug)->update([
                            'cover_image' => $upload,
                        ]);
        }
        /**======== upload image via the service end ====== */
        if ($request->hasFile('thumbnail')) {
            //---- find old image for delete -----
            $exixtimage = SiteInfo::where('id', $id)->first();
            $oldimage = $exixtimage->thumbnail;
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('thumbnail')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = SiteInfo::where('id', $id)
                        ->where('slug', $slug)->update([
                            'thumbnail' => $upload,
                        ]);
        }
        /**======== upload image via the service end ====== */

        if($update){
             SiteInfo::normalizeOrder();
            flash()->success('Information Updated successfully!');
            return redirect()->route('site_info.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = SiteInfo::where('id',$id)->where('slug',$slug)->where('public_status',0)->firstOrFail();
        if($active){
            $active->update([
            'public_status' => 1,
        ]);

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

        $active = SiteInfo::where('id',$id)->where('slug',$slug)->where('public_status',1)->firstOrFail();

        if($active){
            $active->update([
            'public_status' => 0,
        ]);
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
        $data= SiteInfo::where('id',$id)->first();
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
        $data= SiteInfo::onlyTrashed()->where('id',$id)->first();
        
        if ($data) {

        /**=========== delete image form folder ===== */
            $file_paths = public_path($data->cover_image);
                if (file_exists($file_paths)) {
                    File::delete($file_paths);
            }

            $file_paths = public_path($data->thumbnail);
                if (file_exists($file_paths)) {
                    File::delete($file_paths);
            }
        /**=========== delete image form folder end here ===== */


        $data->forceDelete();
        flash()->success('Record deleted successfully!');
        } else {
            flash()->error('Failed to delete record !');
        }

        return back();
    }

    /**
     * ========  Recycle Functionality Start here ==========
     */
    public function recycle(Request $request){
        $query = SiteInfo::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('site_name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/siteinfo/recycle',[
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
            $data = SiteInfo::whereIn('id',$ids)->delete();
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = SiteInfo::whereIn('id',$ids)->where('public_status',0)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>1,]);
            }
 
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = SiteInfo::whereIn('id',$ids)->where('public_status',1)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>0,]);
            }
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = SiteInfo::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    /**=========== delete image form folder ===== */
                    $file_paths = public_path($category->cover_image);
                        if (file_exists($file_paths)) {
                            File::delete($file_paths);
                    }

                    $file_paths = public_path($category->thumbnail);
                        if (file_exists($file_paths)) {
                            File::delete($file_paths);
                    }
                /**=========== delete image form folder end here ===== */



                    $category->forceDelete();
                }

        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Restore'){
            $categorys = SiteInfo::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = SiteInfo::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new SiteInfromationExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new SiteInfromationExport($ids), now().'.csv');
        }
        return back();

    }





    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = SiteInfo::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/hero/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = SiteInfo::get();
        $fileName =now().'.pdf';
        $pdf = pdf::loadView('backend/export/hero/export_pdf',[
            'dataJson' => $data->toArray()
        ])->setPaper('a4', 'portrait');
        return $pdf->download($fileName);
       
    }


    /**
     * 
     * ================= export Excel function start here ===========================
     */
    public function export_excel(){
        return Excel::download(new SiteInfromationExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new SiteInfromationExport, now().'.csv');
    }

}
