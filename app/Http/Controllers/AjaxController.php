<?php

namespace App\Http\Controllers;

use App\Models\test;
use Illuminate\Http\Request;

class AjaxController extends Controller
{
    //------------ index functionality start here ------

    public function index(){
        return view('ajax.index');
    }
    //------------ index functionality start here ------

    public function add(){
        return view('ajax.add');
    }
    //------------ index functionality start here ------

    public function view(){
        return view('ajax.view');
    }
    //------------ index functionality start here ------

    public function edit(){
        return view('ajax.edit');
    }





    //------------ index functionality start here ------

    public function insert(Request $request){
     
    $insert = test::create([
        'name'=>$request->name,
        'email'=>$request->email,
        'phone'=>$request->phone,
        'description'=>$request->des,
    ]);
    

    
    return response()->json([
        'message' => 'Form submitted successfully!'
    ]);




    }
    //------------ index functionality start here ------

    public function update(Request $request){
        return view('ajax.edit');



    }



}
