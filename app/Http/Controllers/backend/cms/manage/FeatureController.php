<?php

namespace App\Http\Controllers\backend\cms\manage;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\FeatureExport;
use App\Models\PageSection;
use Illuminate\Support\Str;
use App\Models\Feature;
use App\Models\Faveicon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\File; 
use Inertia\Inertia;
use App\Services\ImageUploadService;


class FeatureController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = Feature::query(); 

        if($request->filled('search')){
            $query->where('title','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/cms/feature/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add($id,$slug,$model)
    {
        $target_id = $id ;
        $target_model = $model ;
        $icons = Faveicon::pluck('icons');

        return Inertia::render('backend/cms/feature/add',[
            'target_id'=>$target_id,
            'target_model'=>$target_model,
            'iconlist' => $icons
        ]);
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = Feature::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
          
        return Inertia::render('backend/cms/feature/show',[
            'data' => $data,
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $data = Feature::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
          $icons = Faveicon::pluck('icons');
        return Inertia::render('backend/cms/feature/edit',[
            'data' => $data,
            'iconlist' => $icons
        ]);
       
    }




    /**
     * =======================================================================
     * ==============================================================================================  CREATE FUNCTION START HERE ========================================================
     * =======================================================================
     */
    public function insert(Request $request){
        //dd($request->all());
         /**--- validation code -- */
        $request->validate( [
                'featureable_type' => 'required|in:About,Whychooseus', // শুধু এই মডেলগুলো এলাউড
                'featureable_id'   => 'required|integer',
                'icon' => ['required', 'string'],
                'title' => ['required', 'string'],
            ],[
                'icon.required'=> 'Icon field is Required !',
                'title.required'=> 'Title field is Required !',
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();


        // ----- insert record into database 
        $insert = Feature::create([
            'featureable_id'=>$request->featureable_id,
            'featureable_type' => "App\Models\\" . ucfirst($request->featureable_type),
            'icon'=>$request->icon,
            'title'=>$request->title,
            'short_des'=>$request->short_des,
            'order'=>$request->order,
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
        //dd($request->all());

        /**--- validation code -- */
        $request->validate( [
                'icon' => ['required', 'string'],
                'title' => ['required', 'string'],
            ],[
                'icon.required'=> 'Icon field is Required !',
                'title.required'=> 'Title field is Required !',
            ]
        );
      
        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;


        // ----- insert record into database 
        $update = Feature::where('id',$id)->where('slug',$slug)->firstOrFail();
        $update->update([
            'featureable_id'=>$request->featureable_id,
            'featureable_type' => $request->featureable_type,
            'icon'=>$request->icon,
            'title'=>$request->title,
            'short_des'=>$request->short_des,
            'order'=>$request->order,
            'public_status'=>$request->public_status ?? 0,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);

       
        // ---------- if insert -----------
        if($update){
            flash()->success('Information Updated successfully!');
            return redirect()->route('sectionfeature_manage.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = Feature::where('id',$id)->where('slug',$slug)->where('public_status',0)->firstOrFail();

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

        $active = Feature::where('id',$id)->where('slug',$slug)->where('public_status',1)->firstOrFail();

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
        $data= Feature::where('id',$id)->first();
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
        $data= Feature::onlyTrashed()->where('id',$id)->first();
        
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
        $query = Feature::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('title','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/cms/feature/recycle',[
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
            $data = Feature::whereIn('id',$ids)->delete();
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = Feature::whereIn('id',$ids)->where('public_status',0)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>1,]);
            }
 
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = Feature::whereIn('id',$ids)->where('public_status',1)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>0,]);
            }
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = Feature::onlyTrashed()->whereIn('id',$ids)->get();

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
            $categorys = Feature::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = Feature::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new FeatureExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new FeatureExport($ids), now().'.csv');
        }
        return back();

    }





    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = Feature::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/feature/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = Feature::get();
        $fileName =now().'.pdf';
        $pdf = pdf::loadView('backend/export/feature/export_pdf',[
            'dataJson' => $data->toArray()
        ])->setPaper('a4', 'portrait');
        return $pdf->download($fileName);
       
    }


    /**
     * 
     * ================= export Excel function start here ===========================
     */
    public function export_excel(){
        return Excel::download(new FeatureExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new FeatureExport, now().'.csv');
    }


}
