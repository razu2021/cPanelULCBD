<?php

namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon; //----------  defualt -------
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\sitesetting\SeomanageExport;
use Illuminate\Support\Str;
use App\Models\Seo;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use App\Services\ImageUploadService;
use Illuminate\Support\Facades\File; 

class SeoManageController extends Controller
{
    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
        $query = Seo::query(); 

        if($request->filled('search')){
            $query->where('title','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }

        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/seo/index',[
            'alldata' => $alldata ,
            'filters' => $request->only(['search','status'])
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add()
    {
        return Inertia::render('backend/sitesetting/seo/add');
       
    }

    /**
     * ======= view page or show page function 
     */
    public function view($id,$slug)
    {
        $data = Seo::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/seo/show',[
            'data' => $data
        ]);
       
    }

    /**
     * ======= edit or update page function 
     */
    public function edit($id,$slug)
    {
        $data = Seo::with(['creator','editor'])->where('id',$id)->where('slug',$slug)->firstOrFail();
        return Inertia::render('backend/sitesetting/seo/edit',[
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
                'type' => ['required'],
                'phone' => ['required', 'string', 'max:255'],

            ],[
                'phone.required'=> 'Phone field is Required !',
                'type.required'=> 'Type field is Required !',
            ]
        );

        //---------- get authenticate use id and create a slug
        $creator_id = Auth::user()->id;
        $slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();


        // ----- insert record into database 
        $insert = Seo::create([
            'type'=>$request->type,
            'phone'=>$request->phone,
            'title'=>$request->title,
            'description'=>$request->description,
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
        // $request->validate( [
        //         'type' => ['required'],
        //         'phone' => ['required', 'string', 'max:255'],

        //     ],[
        //         'phone.required'=> 'Email field is Required !',
        //         'type.required'=> 'Type field is Required !',
        //     ]
        // );

        //---------- get authenticate use id and create a slug
        $editor_id = Auth::user()->id;
        $slug = $request->slug;
        $id = $request->id;
        // ----- insert record into database 
        
        $update = Seo::where('id',$id)->where('slug',$slug)->firstOrFail();
        

            $structuredData = $request->input('structured_data');

            if ($request->filled('structured_data')) {
                // Jodi user bhule <script> tag shoho paste kore, seta clean kora
                $cleanJson = preg_replace('/<script\b[^>]*>|<\/script>/i', '', $structuredData);
                
                // JSON valid kina check kora
                $decoded = json_decode($cleanJson, true);

                if (json_last_error() === JSON_ERROR_NONE) {
                    $structuredData = $decoded; // Valid array
                } else {
                    // JSON invalid hole error back kora
                    return back()->withErrors(['structured_data' => 'Invalid JSON format. Please check your schema code.']);
                }
            } else {
                $structuredData = null;
            }

         

        if($update){
            $update->update([
            'meta_keywords'=>$request->meta_keywords,
            'meta_robots'=>$request->meta_robots,
            'canonical_url'=>$request->canonical_url,
            'hreflang_tags'=>$request->hreflang_tags,
            'structured_data'=> $structuredData,
            'og_title'=>$request->og_title,
            'og_description'=>$request->og_description,
            'og_url'=>$request->og_url,
            'og_type'=>$request->og_type,
            'og_locale'=>$request->og_locale,
            'twitter_card'=>$request->twitter_card,
            'twitter_title'=>$request->twitter_title,
            'twitter_description'=>$request->twitter_description,
            'twitter_site'=>$request->twitter_site,
            'pinterest_description'=>$request->pinterest_description,
            'pinterest_rich_pin'=>$request->pinterest_rich_pin,
            'whatsapp_title'=>$request->whatsapp_title,
            'whatsapp_description'=>$request->whatsapp_description,
            'public_status'=>$request->public_status ?? 0,
            'editor_id' => $editor_id,
            'updated_at' => Carbon::now()->toDateTimeString(),
        ]);

        /**======== upload image via the service class start ====== */
        if ($request->hasFile('cover_image')) {
            //---- find old image for delete -----
            $exixtimage = Seo::where('id', $id)->first();
            $oldimage = $exixtimage->cover_image;
            // upload image in local folder path via tha service class
            $upload = (new ImageUploadService($request->file('cover_image')))
                        ->setPath('uploads/website/')->setResize(1200, 800)->setOldImage($oldimage ?? '')->upload();
            // ------  save image in database 
            $insert = Seo::where('id', $id)
                        ->where('slug', $slug)->update([
                            'cover_image' => $upload,
                        ]);
            }

            flash()->success('Information Updated successfully!');
            return redirect()->route('manage_seo.view',[$id,$slug]);
        }else{
            flash()->error('Information Updated Faild !');
            return redirect()->back();
        }

        
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        $active = Seo::where('id',$id)->where('slug',$slug)->where('public_status',0)->firstOrFail(); 

        if($active){
            $active->update(['public_status' => 1, ]);
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
        $active = Seo::where('id',$id)->where('slug',$slug)->where('public_status',1)->firstOrFail();

        if($active){
            $active->update(['public_status' => 0, ]);
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
        $data= Seo::where('id',$id)->first();
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
        $data= Seo::onlyTrashed()->where('id',$id)->first();
        
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
        $query = Seo::query(); 

        $query->onlyTrashed();

        if($request->filled('search')){
            $query->where('name','LIKE', '%' .$request->search .'%');
        }

            // 📅 Status Filter
        if ($request->filled('status')) {
            $query->where('public_status', $request->status);
        }


        $alldata = $query->paginate(10)->withQueryString();

        return Inertia::render('backend/sitesetting/seo/recycle',[
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
            $data = Seo::whereIn('id',$ids)->get();
            foreach($data as $items){
                $items->delete();
            }
            return back();
        }

        // ---------- Multiple Items active code start here ----------
        if($action === 'active'){
            $categorys = Seo::whereIn('id',$ids)->where('public_status',0)->get();

            foreach($categorys as $items){
                $items->update([ 'public_status'=>1,]);
            }
           
 
        }
        // ---------- Multiple Items Inactive code start here ----------
        if($action === 'InActive'){
            $categorys = Seo::whereIn('id',$ids)->where('public_status',1)->get();          
            foreach($categorys as $items){
                $items->update([ 'public_status'=>0,]);
            }
        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Heard_Delete'){
            $categorys = Seo::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->forceDelete();
                }

        }
        // ---------- Multiple Items Heard Delete code start here ----------
        if($action === 'Restore'){
            $categorys = Seo::onlyTrashed()->whereIn('id',$ids)->get();

                foreach ($categorys as $category) {
                    $category->restore();
                }

        }




        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = Seo::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new SeomanageExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new SeomanageExport($ids), now().'.csv');
        }
        return back();

    }





    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = Seo::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/category/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }


    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = Seo::get();
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
        return Excel::download(new SeomanageExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new SeomanageExport, now().'.csv');
    }


}
