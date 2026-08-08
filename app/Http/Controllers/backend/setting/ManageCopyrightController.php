<?php

namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\sitesetting\CopyrightExport;
use Illuminate\Support\Str;
use App\Models\Copyright;
use App\Models\Faveicon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;


class ManageCopyrightController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = Copyright::query(); 

        if($request->filled('search')){
            $query->where('receved_by','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/copyright/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add()
    {
        $icons = Faveicon::pluck('icons');
        
        return Inertia::render('backend/sitesetting/copyright/add',[
            'iconlist'=> $icons,
        ]);
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = Copyright::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/copyright/show',[
            'data' => $data
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $data = Copyright::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        $icons = Faveicon::pluck('icons');
        return Inertia::render('backend/sitesetting/copyright/edit',[
            'data' => $data,
            'iconlist'=> $icons,
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
                'receved_by' => ['required'],
            ],[
                'receved_by.required'=> 'Owner field is Required !',
                
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();


        // ----- insert record into database 
        $insert = Copyright::create([
            'receved_by'=>$request->receved_by,
            'receiver_url'=>$request->receiver_url,
            'receiver_icon'=>$request->receiver_icon,
            'design_by'=>$request->design_by,
            'designer_url'=>$request->designer_url,
            'designer_icon'=>$request->designer_icon,
            'public_status'=>$request->public_status ?? 0,
            'slug'=>$slug,
            'creator_id' => $creator_id,
            'created_at' => Carbon::now()->toDateTimeString(),
        ]);

        //---------------------- if insert ------
        if($insert){
            flash()->success('Infromation Created successfully!');
        }else{
             flash()->error('Information  Created Faild!');
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
                'receved_by' => ['required'],
            ],[
                'receved_by.required'=> 'Owner field is Required !',
                
            ]
        );

        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;
        // ----- insert record into database 
        $update = Copyright::where('id',$id)->where('slug',$slug)->firstOrFail();

        if($update){
            $update->update([
            'receved_by'=>$request->receved_by,
            'receiver_url'=>$request->receiver_url,
            'receiver_icon'=>$request->receiver_icon,
            'design_by'=>$request->design_by,
            'designer_url'=>$request->designer_url,
            'designer_icon'=>$request->designer_icon,
            'public_status'=>$request->public_status ?? 0,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);
            flash()->success('Information Updated successfully!');
            return redirect()->route('copyright.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }
    }

    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = Copyright::where('id',$id)->where('slug',$slug)->where('public_status',0)->firstOrFail();

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
        $active = Copyright::where('id',$id)->where('slug',$slug)->where('public_status',1)->firstOrFail();

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
        $data= Copyright::where('id',$id)->first();
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
        $data= Copyright::onlyTrashed()->where('id',$id)->first();
        
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
        $query = Copyright::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('receved_by','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/copyright/recycle',[
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
            $data = Copyright::whereIn('id',$ids)->get();
            foreach($data as $items){
                $items->delete();
            }
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = Copyright::whereIn('id',$ids)->where('public_status',0)->get();
            foreach($categorys as $items){
                $items->update(['public_status'=>1,]);
            }
 
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = Copyright::whereIn('id',$ids)->where('public_status',1)->get();
             foreach($categorys as $items){
                $items->update(['public_status'=>0,]);
            }
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = Copyright::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->forceDelete();
                }

        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Restore'){
            $categorys = Copyright::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = Copyright::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new CopyrightExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new CopyrightExport($ids), now().'.csv');
        }
        return back();

    }





    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = Copyright::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/category/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = Copyright::get();
        $fileName =now().'.pdf';
        $pdf = pdf::loadView('backend/export/category/export_pdf',[
            'dataJson' => $data->toArray()
        ])->setPaper('a4', 'portrait');
        return $pdf->download($fileName);
       
    }


    /**
     * 
     * ================= export Excel function start here ===========================
     */
    public function export_excel(){
        return Excel::download(new CopyrightExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new CopyrightExport, now().'.csv');
    }


}
