<?php 
namespace App\Domains\Chatbot\Services;
use App\Domains\Chatbot\Repositories\ChatbotKnowledgeRepositories;
use Illuminate\Support\Facades\DB;
class ChatbotKnowledgeService{
    
    /**
     * Create a new class instance.
     */
    protected $repository ;
    public function __construct(ChatbotKnowledgeRepositories $repository)
    {
        $this->repository = $repository;
    }


    /**
     * ================== Get index Data  logic start here ==========
     */

    public function getIndexData(array $filters){
        try{
            return  $this->repository->index($filters,10 ,['intent']);

        }catch(\Exception $e){
            throw $e;
        }
    }

    /**
     * ================== get trash data start here ==========
     */

    public function getTrashData(array $filters){
        try{
            return  $this->repository->allTrashData($filters,10);

        }catch(\Exception $e){
            throw $e;
        }
    }


    /**
     * ================== GetDetails logic start here ==========
     */
    public function getViewDetails($id,$slug){
        try{
            return  $this->repository->findByIdAndSlug($id,$slug,['creator','editor','intent']);

        }catch(\Exception $e){
            throw $e;
        }
    }

    /**
     * ================== getEditDetails logic start here ==========
     */
    public function getEditDetails($id,$slug){
        try{
            return  $this->repository->findByIdAndSlug($id,$slug);

        }catch(\Exception $e){
            throw $e;
        }
    }



    /**
     * ================== createData logic start here ==========
     */
    public function createData(array $data){

        return DB::transaction(function() use ($data){
            try{


            return  $this->repository->storeData($data);
            }catch(\Exception $e){
                throw $e;
            }
        });

    }
    /**
     * ================== UpdateData logic start here ==========
     */
    public function updateData(array $data , $id, $slug, ){

        return DB::transaction(function() use ($data,$id,$slug){
            try{

                $item = $this->repository->findByIdAndSlug($id,$slug);

                if (!$item) {
                    throw new \Exception("Data not found with this ID and Slug!");
                }

               return  $this->repository->updateData($item,$data);
            }catch(\Exception $e){
                throw $e;
            }
        });

    }

    /**
     * ================== Change Status logic start here ==========
     */

    public function changeStatus($id,$slug,$status){

        return DB::transaction(function() use ($id,$slug,$status){
            try{
               return  $this->repository->updateStatus($id,$slug,$status);
            }catch(\Exception $e){
                throw $e;
            }
        });
    }


    
    public function moveToTrush($id){
        try{
            return  $this->repository->softDelete($id);
        }catch(\Exception $e){
            throw $e;
        }
    }

    public function dataForceDelete($id){
        try{
            return  $this->repository->heardDelete($id);
        }catch(\Exception $e){
            throw $e;
        }
    }


    /**
     * ================== Bulk Action logic start here ==========
     */

    public function executeBulkAction(array $ids, string $action){

        return DB::transaction(function() use ($ids,$action){
        try{

            switch($action){
                case 'active':
                    return $this->repository->bulkStatusUpdate($ids,1);

                case 'InActive':
                    return $this->repository->bulkStatusUpdate($ids,0);

                case 'delete':
                    return $this->repository->bulkSoftDelete($ids);

                case 'Restore':
                    return $this->repository->bulkRestore($ids);

                case 'Heard_Delete':
                    return $this->repository->bulkForceDelete($ids);

                default:
                    throw new \Exception("Invalid bulk action provided.");

            }

            


        }catch(\Exception $e){
            throw $e;
        }
    });

    }




}