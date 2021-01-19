<?php

namespace App\Http\Controllers;

use App\Models\Customer;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    protected $customers;

    public function __construct(Customer $customers)
    {
        $this->customers = $customers;
    }

    public function index()
    {
        return Customer::get();
    }

    public function add(Request $request)
    {
        // $customer = new Customer();
        // $customer->name = $request->name;
        // $customer->age = $request->age;
        // $customer->address = $request->address;
        // $customer->save();
        $customer = Customer::create($request->all());
        return response($customer, 201);
    }

    public function delete($id) {
        if ($id != null) {
            $customer = Customer::find($id);
            $customer->delete();
        }
    }

    public function show($id) {
        return Customer::find($id);
    }

    public function update(Request $request, $id)
    {
        // Update the Product
        if ($id != null) {
            Customer::where('id', $id)->update($request->all());
        }
    }
}
