<?php 

namespace App\Repositories\clientData;

use App\Models\getappointment;
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
    /**
     * =============================================================
     *  submit contact form data submit here     
     * =============================================================
     */
    public function storeAppointmentFormData($sanitizedData){
        try{
            
           $insert = getappointment::create($sanitizedData);
           return $insert;
           
        }catch(\Exception $e){
           
            return false;
        }

    }

}