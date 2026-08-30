<?php

namespace App\Http\Controllers\backend\cms\manage;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\MediaExport;
use App\Models\PageSection;
use Illuminate\Support\Str;
use App\Models\Post;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\File; 
use Inertia\Inertia;
use App\Services\ImageUploadService;


class MediaController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = Media::query(); 

        if($request->filled('search')){
            $query->where('title','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/cms/media/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add($id,$slug)
    {
        $section = PageSection::where('id',$id)->where('slug',$slug)->value('id');
      
        return Inertia::render('backend/cms/media/add',['section_id'=>$section]);
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = Media::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/cms/media/show',[
            'data' => $data
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $data = Media::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/cms/media/edit',[
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
                'type' => ['required', 'string', 'max:255'],
                'title' => ['required', 'string'],
                
            ],[
                'type.required'=> 'Title field is Required !',
                'title.required'=> 'Title field is Required !',
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();
       $url = Str::slug($request->case_title) . '-' . rand(1000, 9999);
       
        // ----- insert record into database 
        $insert = Media::create([
            'page_section_id'=>$request->section_id,
            'type'=>$request->type,
            'title'=>$request->title,
            'short_des'=>$request->short_des,
            'description'=>$request->description,
            'button'=>$request->button,
            'button_url'=>$request->button_url,
            'order'=>$request->order,
            'url'=>$url,
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
            $insert = Media::where('id', $id)
                        ->where('id', $id)->update([
                            'cover_image' => $upload,
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
        /**--- validation code -- */
        $request->validate( [
                'type' => ['required', 'string', 'max:255'],
                'title' => ['required', 'string'],
                
            ],[
                'type.required'=> 'Title field is Required !',
                'title.required'=> 'Title field is Required !',
            ]
        );
       
        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;
      $url = Str::slug($request->case_title) . '-' . rand(1000, 9999);

        // ----- insert record into database 
        $update = Media::where('id',$id)->where('slug',$slug)->firstOrFail();
        $update->update([
            'type'=>$request->type,
            'title'=>$request->title,
            'short_des'=>$request->short_des,
            'description'=>$request->description,
            'button'=>$request->button,
            'button_url'=>$request->button_url,
            'order'=>$request->order,
            'url'=>$url,
            'public_status'=>$request->public_status ?? 0,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);

        /**======== upload image via the service class start ====== */
        if ($request->hasFile('cover_image')) {
            //---- find old image for delete -----
            $exixtimage = Media::where('id', $id)->first();
            $oldimage = $exixtimage->cover_image;
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('cover_image')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = Media::where('id', $id)
                        ->where('slug', $slug)->update([
                            'cover_image' => $upload,
                        ]);
        }
        /**======== upload image via the service end ====== */
        if($update){
            flash()->success('Information Updated successfully!');
            return redirect()->route('media_manage.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = Media::where('id',$id)->where('slug',$slug)->where('public_status',0)->firstOrFail();

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

        $active = Media::where('id',$id)->where('slug',$slug)->where('public_status',1)->firstOrFail();

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
        $data= Media::where('id',$id)->first();
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
        $data= Media::onlyTrashed()->where('id',$id)->first();
        
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
        $query = Media::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/cms/media/recycle',[
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
            $data = Media::whereIn('id',$ids)->delete();
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = Media::whereIn('id',$ids)->where('public_status',0)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>1,]);
            }
 
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = Media::whereIn('id',$ids)->where('public_status',1)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>0,]);
            }
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = Media::onlyTrashed()->whereIn('id',$ids)->get();

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
            $categorys = Media::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = Media::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new MediaExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new MediaExport($ids), now().'.csv');
        }
        return back();

    }





    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = Media::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/media/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = Media::get();
        $fileName =now().'.pdf';
        $pdf = pdf::loadView('backend/export/media/export_pdf',[
            'dataJson' => $data->toArray()
        ])->setPaper('a4', 'portrait');
        return $pdf->download($fileName);
       
    }


    /**
     * 
     * ================= export Excel function start here ===========================
     */
    public function export_excel(){
        return Excel::download(new MediaExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new MediaExport, now().'.csv');
    }


}
