<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Validator;

class UploadController extends BaseApiController {

    public function index(Request $request) {
        if ( !$request->ajax() ) {
            return $this->apiReturn(false , '请求非法');
        }
        $json = [
            'status'    => 0 ,
            'info'      => '' ,
            'operation' => '上传图片' ,
            'url'       => '' ,
        ];
        if ( !$request->hasFile('file') ) {
            return $this->apiReturn(false , 'file缺失');
        }
        $file = $request->file('file');
        $data = $request->all();
        $rules = [
            'file' => 'image|max:2048' ,
        ];
        if ( in_array($file->getClientOriginalExtension() , ['csv' , 'xls' , 'xlsx']) ) {
            //如果是文件格式，则不做图片格式校验
            $rules = [];
        }
        $messages = array(
            'file.image' => '文件类型不允许,请上传常规的图片(bmp|gif|jpg|png|csv)文件' ,
            'file.max'   => '文件过大,文件大小不得超出2MB' ,
        );
        $validator = Validator::make($data , $rules , $messages);
        if ( !$validator->passes() ) {
            return $this->apiReturn(false , '校验文件类型或大小错误');
        }
        $destPath = 'uploads/';
        $savePath = $destPath . '' . date('Ymd' , time());
        is_dir($savePath) || mkdir($savePath,0777,true); //如果不存在则创建目录
        $name = $file->getClientOriginalName();
        $ext = $file->getClientOriginalExtension();
        $check_ext = in_array(
            $ext ,
            array('jpg' , 'jpeg' , 'png' , 'gif' , 'bmp' , 'csv' , 'xls' , 'xlsx') ,
            true
        );
        if ( !$check_ext ) {
            return $this->apiReturn(false , '校验文件类型错误');
        }
        $uniqid = uniqid();
        $oFile = $uniqid . '.' . $ext;
        $thumbFile = $uniqid . 'thumb.' . $ext;
        $fullfilename = '/' . $savePath . '/' . $oFile; //原始完整路径
        if ( !$file->isValid() ) {
            return $this->apiReturn(false , '上传文件出现错误，请重试');
        }
        $uploadSuccess = $file->move($savePath , $oFile); //移动文件
        $file = [
            'original_file_name'      => $name , //添加文件操作信息，原始文件名
            'uploaded_full_file_name' => $fullfilename , //添加文件操作信息，上传之后存储在服务器上的原始完整路径
        ];
        $oFilePath = $savePath . '/' . $oFile;
        $rFilePath = $savePath . '/' . $thumbFile;
//        $img = Image::make($oFile)->resize(300, 200);
//        $img->save($thumbFile, 60);
//        $img->save('public/bar.jpg');
        return $this->apiReturn(true,'ok',url($fullfilename));
    }
}