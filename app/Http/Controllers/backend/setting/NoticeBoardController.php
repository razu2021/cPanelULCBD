<?php

namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\sitesetting\NoticeBoardExport;
use Illuminate\Support\Str;
use App\Models\Noticeboard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File; 
use Inertia\Inertia;
use App\Services\ImageUploadService;


class NoticeBoardController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = Noticeboard::query(); 

        if($request->filled('search')){
            $query->where('heading','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/noticeboard/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add()
    {
       
      
        return Inertia::render('backend/sitesetting/noticeboard/add');
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = Noticeboard::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/noticeboard/show',[
            'data' => $data
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $data = Noticeboard::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/noticeboard/edit',[
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
                'description' => ['required', 'string'],
            ],[
                'description.required'=> 'Description field is Required !', 
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();

        // ----- insert record into database 
        $insert = Noticeboard::create([
            'heading'=>$request->heading,
            'title'=>$request->title,
            'description'=>$request->description,
            'public_status'=>$request->public_status ?? 0,
            'slug'=>$slug,
            'creator_id' => $creator_id,
            'created_at' => Carbon::now()->toDateTimeString(),
        ]);
        /**======== upload Thumbnail image via the service class start ====== */
        $id = $insert->id;
        if ($request->hasFile('thumbnail')) {
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('thumbnail')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = Noticeboard::where('id', $id)
                        ->where('id', $id)->update([
                            'thumbnail' => $upload,
                        ]);
        }

        //---------------------- if insert ------
        if($insert){
            flash()->success('Information Created successfully!');
        }else{
             flash()->error('Information Created Faild!');
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
        $update = Noticeboard::where('id',$id)->where('slug',$slug)->update([
            'heading'=>$request->heading,
            'title'=>$request->title,
            'description'=>$request->description,
            'public_status'=>$request->public_status ?? 0,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);
        /**======== upload image via the service end ====== */
        if ($request->hasFile('thumbnail')) {
            //---- find old image for delete -----
            $exixtimage = Noticeboard::where('id', $id)->first();
            $oldimage = $exixtimage->thumbnail;
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('thumbnail')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = Noticeboard::where('id', $id)
                        ->where('slug', $slug)->update([
                            'thumbnail' => $upload,
                        ]);
        }
        /**======== upload image via the service end ====== */

        if($update){
            flash()->success('Information Updated successfully!');
            return redirect()->route('notice_board.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = Noticeboard::where('id',$id)->where('slug',$slug)->where('public_status',0)->update([
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

        $active = Noticeboard::where('id',$id)->where('slug',$slug)->where('public_status',1)->update([
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
        $data= Noticeboard::where('id',$id)->first();
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
        $data= Noticeboard::onlyTrashed()->where('id',$id)->first();
        
        if ($data) {

        /**=========== delete image form folder ===== */
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
        $query = Noticeboard::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/noticeboard/recycle',[
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
            $data = Noticeboard::whereIn('id',$ids)->delete();
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = Noticeboard::whereIn('id',$ids)->where('public_status',0)->update([
                'public_status'=>1,
            ]);
 
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = Noticeboard::whereIn('id',$ids)->where('public_status',1)->update([
                'public_status'=>0,
            ]);
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = Noticeboard::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    /**=========== delete image form folder ===== */
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
            $categorys = Noticeboard::onlyTrashed()->whereIn('id',$ids)->get();
                foreach ($categorys as $category) {
                    $category->restore();
                }

        }

        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = Noticeboard::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new NoticeBoardExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new NoticeBoardExport($ids), now().'.csv');
        }
        return back();

    }


    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = Noticeboard::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/hero/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = Noticeboard::get();
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
        return Excel::download(new NoticeBoardExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new NoticeBoardExport, now().'.csv');
    }

}

