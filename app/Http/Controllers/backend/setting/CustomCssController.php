<?php

namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\sitesetting\CustomeCssExport;
use Illuminate\Support\Str;
use App\Models\Customcss;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;


class CustomCssController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = Customcss::query(); 

        if($request->filled('search')){
            $query->where('css_note','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/customcss/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add()
    {
        return Inertia::render('backend/sitesetting/customcss/add');
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = Customcss::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/customcss/show',[
            'data' => $data
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $data = Customcss::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/customcss/edit',[
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
                'css_note' => ['required'],
                'custom_css' => ['required','not_regex:/<[^>]*>/'],
            ],[
                'css_note.required'=> 'Note field is Required !',
                
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();


        // ----- insert record into database 
        $insert = Customcss::create([
            'css_note'=>$request->css_note,
            'custom_css'=>$request->custom_css,
            'order'=>$request->order,
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
                'css_note' => ['required'],
                'custom_css' => ['required','not_regex:/<[^>]*>/'],
            ],[
                'css_note.required'=> 'Note field is Required !',
                
            ]
        );

        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;
        // ----- insert record into database 
        $update = Customcss::where('id',$id)->where('slug',$slug)->firstOrFail();

        if($update){
          $update->update([
                'css_note'=>$request->css_note,
                'custom_css'=>$request->custom_css,
                'order'=>$request->order,
                'public_status'=>$request->public_status ?? 0,
                'editor_id' => $editor_id,
                'updated_at' => Carbon::now()->toDateTimeString(),
            ]);
            flash()->success('Information Updated successfully!');
            return redirect()->route('custom_css.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = Customcss::where('id',$id)->where('slug',$slug)->where('public_status',0)->firstOrFail();

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
        $active = Customcss::where('id',$id)->where('slug',$slug)->where('public_status',1)->firstOrFail(); 

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
        $data= Customcss::where('id',$id)->first();
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
        $data= Customcss::onlyTrashed()->where('id',$id)->first();
        
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
        $query = Customcss::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('css_note','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/customcss/recycle',[
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
            $data = Customcss::whereIn('id',$ids)->get();
            foreach($data as $items){
                $items->delete();
            }
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = Customcss::whereIn('id',$ids)->where('public_status',0)->get();
            foreach($categorys as $items){
                $items->update([
                    'public_status'=>1,
                ]);
            }
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = Customcss::whereIn('id',$ids)->where('public_status',1)->get();
             foreach($categorys as $items){
                    $items->update([
                    'public_status'=>0,
                ]);
            }
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = Customcss::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->forceDelete();
                }

        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Restore'){
            $categorys = Customcss::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = Customcss::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new CustomeCssExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new CustomeCssExport($ids), now().'.csv');
        }
        return back();

    }


    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = Customcss::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/category/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = Customcss::get();
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
        return Excel::download(new CustomeCssExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new CustomeCssExport, now().'.csv');
    }


}
