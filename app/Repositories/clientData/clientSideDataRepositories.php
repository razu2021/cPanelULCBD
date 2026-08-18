<?php 

namespace App\Repositories\clientData;
use App\Models\UserContact;

class clientSideDataRepositories{

    /**
     * =============================================================
     *  submit contact form data submit here     
     * =============================================================
     */
    public function storeContactFormData($sanitizedData){
        try{
            
           $insert = UserContact::create($sanitizedData);
           return $insert;
           
        }catch(\Exception $e){
           
            return false;
        }

    }

}