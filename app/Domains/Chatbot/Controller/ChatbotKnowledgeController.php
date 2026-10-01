<?php

namespace App\Domains\Chatbot\Controller;

use App\Http\Controllers\Controller;
use App\Domains\Chatbot\Services\ChatbotKnowledgeService;
use App\Domains\Chatbot\Export\ChatbotknowledgeExport;
use App\Domains\Chatbot\Models\ChatbotIntent;
use App\Domains\Chatbot\Requests\ChatbotKnowledgeRequest;
use App\Domains\Chatbot\Models\ChatbotKnowledge;
use Barryvdh\DomPDF\Facade\Pdf;//-------------- export pdf
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
class ChatbotKnowledgeController extends Controller
{


    /**
     * ===========================================================
     * Service class function 
     * ===========================================================
     */
    protected $service ;

    public function __construct(ChatbotKnowledgeService $services )
    {
      $this->service = $services ;
    }




    /**
     * ======== index page function 
     */
    public function index(Request $request)
    {
      
        $filters = $request->only(['search','status']);

        $alldata = $this->service->getIndexData($filters);
    
        $alldata->withQueryString();

        return Inertia::render('backend/Chatbot/chatbotknowledge/index',[
            'alldata' => $alldata ,
            'filters' => $filters
        ]);
    }

    /**
     * ======== create page or add page function 
     */

    public function add()
    {
        $allintent = ChatbotIntent::where('public_status',1)->get();
        return Inertia::render('backend/Chatbot/chatbotknowledge/add',[
            'allintents' => $allintent ,
        ]);
       
    }

    /**
     * ========================================
     * view page or show page function 
     * ========================================
     */
    public function view($id,$slug)
    {

      try{
        // -------- insert data via the service class 
        $data =   $this->service->getViewDetails($id,$slug);

        // --------- render view
        return Inertia::render('backend/Chatbot/chatbotknowledge/show',[
            'data' => $data
        ]);
       
      }catch(\Exception $e){
        Log::error("ProductBrandService view page Error: " . $e->getMessage());
        flash()->error('Something went wrong! Please try again or contact support.');
      }
       
    }

    /**
     * ===================================================
     * edit or update page function 
     * ===================================
     */
    public function edit($id,$slug)
    {
        try{
            // -------- insert data via the service class 
            $data =   $this->service->getEditDetails($id,$slug);
            $allintent = ChatbotIntent::where('public_status',1)->get();
            // --------- render view
            return Inertia::render('backend/Chatbot/chatbotknowledge/edit',[
                'data' => $data,
                 'allintents' => $allintent,
            ]);
        
        }catch(\Exception $e){
            Log::error("ProductBrandService Edit Page  Error: " . $e->getMessage());
            flash()->error('Something went wrong! Please try again or contact support.');
        }
    }


    /**
     * =======================================================================
     *   CREATE FUNCTION START HERE 
     * =======================================================================
     */
    public function insert(ChatbotKnowledgeRequest $request){

      try{
        // -------- Check Validation 
        $data = $request->validated();

        // -------- insert data via the service class 
        $insert =   $this->service->createData($data);

        flash()->success('Information Created successfully!');
       
      }catch(\Exception $e){
        Log::error("ProductBrandService Create Error: " . $e->getMessage());
        flash()->error('Something went wrong! Please try again or contact support.');
      }

      return redirect()->back();
    }

    /**
     * =======================================================================
     *  Update FUNCTION START HERE 
     * =======================================================================
     */
    public function update(ChatbotKnowledgeRequest $request, $id, $slug){

      try{
        // -------- Check Validation 
        $data = $request->validated();
        // -------- insert data via the service class 
        $update =   $this->service->updateData($data,$id,$slug);

        flash()->success('Information Updated successfully!');
       return redirect()->route('chatbot_knowledge.view',[$id,$slug]);
      }catch(\Exception $e){
        Log::error(" ProductBrandService Update Error: " . $e->getMessage());
        flash()->error('Something went wrong! Please try again or contact support.');
      }

      return redirect()->back();
    }


    /**
     * ======== Active Functionality Start here ==========
     */
    public function active($id,$slug){
        try {
                // ১ পাস করার মানে হলো স্ট্যাটাস একটিভ করা
                $this->service->changeStatus($id, $slug, 1);
                flash()->success('Status Activated Successfully!');
                
        } catch (\Exception $e) {
            Log::error(" ProductBrandService Status Active Error for ID $id: " . $e->getMessage());
            flash()->error('Failed to active status! Data not found.');
        }

            return redirect()->back();
    }

    /**
     * ======== De Active Functionality Start here ==========
     */
    public function deactive($id,$slug){
        try {
            // ১ পাস করার মানে হলো স্ট্যাটাস একটিভ করা
            $this->service->changeStatus($id, $slug, 0);
            flash()->success('Status Activated Successfully!');
                
        } catch (\Exception $e) {
            Log::error(" ProductBrandService Status InActive Error for ID $id: " . $e->getMessage());
            flash()->error('Failed to active status! Data not found.');
        }

            return redirect()->back();
    }
    /**
     * ======== Soft Delete Functionality Start here ==========
     */
    public function softdelete($id){
        try {
            // ১ পাস করার মানে হলো স্ট্যাটাস একটিভ করা
            $this->service->moveToTrush($id);
            flash()->success('Item Deleted Successfully!');
                
        } catch (\Exception $e) {
            Log::error(" ProductBrandService Softdelete Error for ID $id: " . $e->getMessage());
            flash()->error('Failed to active status! Data not found.');
        }

        return redirect()->back();
    }
   
    /**
     * ========  Delete Functionality Start here ==========
     */
    public function delete($id){
        try {
            // ১ পাস করার মানে হলো স্ট্যাটাস একটিভ করা
            $this->service->dataForceDelete($id);
            flash()->success('Item Deleted Successfully!');
                
        } catch (\Exception $e) {
            Log::error(" ProductBrandService heard Delete Error for ID $id: " . $e->getMessage());
            flash()->error('Failed to Delete Data not found.');
        }

        return redirect()->back();
    }

    /**
     * ========  Recycle Functionality Start here ==========
     */
    public function recycle(Request $request){


        $filters = $request->only(['search','status']);

        $alldata = $this->service->getTrashData($filters);

        $alldata->withQueryString();

        return Inertia::render('backend/Chatbot/chatbotknowledge/recycle',[
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
            flash()->error('No items selected!');
        }
    

        try {
        // ------------ Multiple Item Export as an PDF -------------------------------
        if($action === 'export_pdf'){
          
            $category = ChatbotKnowledge::whereIn('id',$ids)->get();

            $fileName = now()->format('Y-m-d_H-i-s') . '.pdf';

             $pdf = Pdf::loadView('backend.export.category.export_pdf', [
                'dataJson' => $category->toArray()
            ])->setPaper('a4', 'portrait');

            return $pdf->stream($fileName);
        }

        // ------------ Multiple Item Export as an Excel file -------------------------------

        if($action === 'export_excel'){

            return Excel::download(new ChatbotknowledgeExport($ids), now().'.xlsx');
        }
        if($action === 'export_csv'){

            return Excel::download(new ChatbotknowledgeExport($ids), now().'.csv');
        }
        //    ----------- this acton form service class
            $this->service->executeBulkAction($ids, $action);
            flash()->success('Bulk action executed successfully!');
                
        } catch (\Exception $e) {
            Log::error("ProductTypeController Bulk action Error for IDs " . json_encode($ids) . ": " . $e->getMessage());
            flash()->error('Something went wrong! Bulk action failed.');
        }
        return back();

    }


    /**
     * 
     * ================= export single pdf function start here ===========================
     */

    public function exportPdf($id,$slug){

        $data = ChatbotKnowledge::where('id',$id)->where('slug',$slug)->firstOrFail();
        $fileName = $data->name.'-'.now().'.pdf';
        $pdf = pdf::loadView('backend/export/category/export_singlepdf',compact('data'))->setPaper('a4', 'portrait');
        return $pdf->download($fileName);

    }

    /**
     * 
     * ================= export all pdf  function start here ===========================
     */
    public function export_pdf(){
        $data = ChatbotKnowledge::get();
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
        return Excel::download(new ChatbotknowledgeExport, now().'.xlsx');
    }
    /**
     * 
     * ================= export csv function start here ===========================
     */
    public function export_csv(){
        return Excel::download(new ChatbotknowledgeExport, now().'.csv');
    }
}
