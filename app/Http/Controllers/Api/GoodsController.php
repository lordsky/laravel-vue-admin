<?php

namespace App\Http\Controllers\Api;

use App\Models\Goods;
use Illuminate\Http\Request;

class GoodsController extends BaseApiController {

    public function index(Request $request) {
//        $data = Goods::with('category')->OrderBy('sequence' , 'desc')->paginate();
        $queryBuilder = Goods::select('goods.*','goods_categories.name as category_name','companies.name as company_name')
            ->leftJoin('goods_categories','goods.category_id','goods_categories.id')
            ->leftJoin('companies','goods.company_id','companies.id');
        if( $request->has('name') ){
            $queryBuilder = $queryBuilder->where('goods.name',$request->input('name'));
        }
        if( $request->has('category_id') ){
            $queryBuilder = $queryBuilder->where('goods.category_id',$request->input('category_id'));
        }
        if( $request->has('company_id') ){
            $queryBuilder = $queryBuilder->where('goods.company_id',$request->input('company_id'));
        }
        $data = $queryBuilder->OrderBy('goods.sequence' , 'desc')->paginate();
        return $this->apiReturn(true,'ok',$data);
    }

    public function show($id){
        $data = Goods::findOrfail($id);
        return $this->apiReturn(true,'ok',$data);
    }

    public function store(Request $request) {
        $this->validate($request ,Goods::$rules);
        $data = $request->all();
        $data['sequence'] = Goods::max('sequence') + 1;
        if ( Goods::create($data) ) {
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function update(Request $request , $id) {
        $goods = Goods::find($id);
        if ( !$goods ) {
            return $this->apiReturn(false , '更新失败');
        }
        if ( $goods->update($request->all()) ) {
            return $this->apiReturn(true , '更新id为' . $id . '的数据成功');
        }
        return $this->apiReturn(false , '更新失败');
    }

    public function destroy($id) {
        $goods = Goods::find($id);
        if ( $goods ) {
            $goods->delete();
            return $this->apiReturn(true , '删除成功');
        }
        return $this->apiReturn(false , '删除失败');
    }

    public function set_sequence($id) {
        $goods = Goods::findOrfail($id);
        $highGoodsSequence = Goods::where('category_id',$goods->category_id)->where('sequence','>',$goods->sequence)->min('sequence');
        if( $highGoodsSequence > 0 ){
            $goods->sequence = $highGoodsSequence + 1;
            $goods->save();
            return $this->apiReturn(true, '更新排序成功');
        }
        return $this->apiReturn(false, '更新排序失败');
    }
}
