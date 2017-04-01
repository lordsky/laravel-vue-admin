<?php

namespace App\Http\Controllers\Api;

use App\Models\Company;
use App\Models\Goods;
use Illuminate\Http\Request;

class CompanyController extends BaseApiController {

    public function index() {
        $data = Company::OrderBy('id' , 'desc')->paginate();
        return $this->apiReturn(true , 'ok' , $data);
    }

    public function show($id) {
        $data = Company::findOrfail($id);
        return $this->apiReturn(true , 'ok' , $data);
    }

    public function store(Request $request) {
        $this->validate($request , Company::$rules);
        $data = $request->all();
        if ( Company::create($data) ) {
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function update(Request $request , $id) {
        $company = Company::find($id);
        if ( !$company ) {
            return $this->apiReturn(false , '更新失败');
        }
        if ( $company->update($request->all()) ) {
            return $this->apiReturn(true , '更新id为' . $id . '的数据成功');
        }
        return $this->apiReturn(false , '更新失败');
    }

    public function destroy($id) {
        $company = Company::find($id);
        //判断该公司下是否有商品
        if( Goods::where('company_id',$id)->count()>0 ){
            return $this->apiReturn(false , '删除失败，该子公司下还有商品');
        }
        if ( $company ) {
            $company->delete();
            return $this->apiReturn(true , '删除成功');
        }
        return $this->apiReturn(false , '删除失败');
    }
}
