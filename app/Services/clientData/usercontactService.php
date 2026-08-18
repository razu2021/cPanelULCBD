<?php
namespace App\Services\clientData;
use App\Repositories\clientData\clientSideDataRepositories;

class usercontactService{


/**
 * =============================================================
 *  use repository class for data store in database 
 * =============================================================
 */
protected $repositories = null;

public function __construct(clientSideDataRepositories $repositories){
    $this->repositories = $repositories;
}



/**
 * =============================================================
 *  submit contact form data submit here     
 * =============================================================
 */
public function storeContactFormData($sanitizedData){
    try{
        
       // stor clinet contact form data in database using repository class
       $data = $this->repositories->storeContactFormData($sanitizedData);
       return $data;
    }catch(\Exception $e){
       
        return false;
    }

}



}