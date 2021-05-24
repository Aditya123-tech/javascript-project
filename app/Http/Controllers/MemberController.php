<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class MemberController extends Controller
{
    //
    function addData(Request $req){
        $user=new User;
        $user->name=$req->name;
        $user->email=$req->email;
        $user->password=$req->password;
        $user ->save();
        return redirect('add');
    }

    function show(){
        $data= User::all();
        return view('list',['users'=>$data]);
    }

    function delete($id){
        $data=User::find($id);
        $data->delete();
        return redirect('list');
    }
    function showData($id){
        $data= User::find($id);
        return view('edit',['data'=>$data]);
    }
    function update(Request $req){
        $data =User::find($req->id);
        $data->name=$req->name;
        $data->email=$req->email;
        $data->password=$req->password;
        $data->save();
        return redirect('list');
}
}
