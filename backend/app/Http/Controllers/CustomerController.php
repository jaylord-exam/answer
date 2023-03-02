<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Exception;

class CustomerController extends Controller
{
    public function index()
    {
        return response(Customer::all())->setStatusCode(200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make(request()->all(), Customer::$validation);
        
        if ($validator->fails()) {
            #show errors
            return response([
                'error' => $validator->errors(),
                'description' => 'validation'
            ])->setStatusCode(500);
        }

        #add handling for any error encounter
        try {
            #save customer
            Customer::create($request->all());

            return response(Customer::all())->setStatusCode(200);
        } catch (Exception $e) {
            #show errors
            return response([
                'error' => 'something went wrong',
                'description' => 'encounter an error while saving customer'
            ])->setStatusCode(500);
        }
    }

    public function show($id)
    {
        $customer = Customer::find($id);

        if($customer){
            return response($customer)->setStatusCode(200);
        }else{
            return response([
                'result' => "customer doesn't exist"
            ])->setStatusCode(200);
        }
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make(request()->all(), Customer::$validation);

        if ($validator->fails()) {
            #show errors
            return response([
                'error' => $validator->errors(),
                'description' => 'validation'
            ])->setStatusCode(500);
        }

        $customer = Customer::find($id);
        if($customer){
            $customer->update($request->all());

            return response(Customer::all())->setStatusCode(200);
        }else{
            return response([
                'result' => "customer doesn't exist"
            ])->setStatusCode(500);
        }
    }

    public function destroy($id)
    {
        $customer = Customer::find($id);
        if($customer){
            $customer->delete();

            return response(Customer::all())->setStatusCode(200);
        }else{
            return response([
                'result' => "customer doesn't exist"
            ])->setStatusCode(500);
        }
    }
}
