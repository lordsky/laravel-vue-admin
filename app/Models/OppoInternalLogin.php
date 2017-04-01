<?php
namespace App\Models;

use Log;

class OppoInternalLogin {

    public static function attempt($username , $password) {
        return self::process('/api/user!login.do' , array('username' => $username , 'password' => $password) , true);
    }

    private static function process($path , $params , $isPost = false) {
        $url = config('internalbuy.internal_login.base_uri') . $path;
        $appid = config('internalbuy.internal_login.appid');
        $secret = config('internalbuy.internal_login.secret');
        $ch = curl_init();
        $time = time();
        $needSecretParams = $params;
        $needSecretParams['time'] = $time;
        $needSecretParams['appid'] = $appid;
        ksort($needSecretParams);
        $data = $path;
        foreach ( $needSecretParams as $k => $v ) {
            $data .= "\n" . $k . '=' . urlencode($v);
        }
        $data .= "\n" . $secret;
        Log::info('sign before:'.$data);
        $sign = md5($data);
        $baseParams = array(
            'appid'    => $appid ,
            'time'     => $time ,
            'sign'     => $sign ,
        );
        $url .= '?' . http_build_query($baseParams);
        Log::info(array('url' => $url , 'params' => $params , 'ispost' => $isPost));
//        return false;
        curl_setopt($ch , CURLOPT_URL , $url);
        curl_setopt($ch , CURLOPT_RETURNTRANSFER , 1);
        curl_setopt($ch , CURLOPT_TIMEOUT , 20);
        if ( $isPost ) {
            curl_setopt($ch , CURLOPT_POST , 1);
            curl_setopt($ch , CURLOPT_POSTFIELDS , http_build_query($params));
        }
        $data = curl_exec($ch);
        if ( curl_errno($ch) ) {
            Log::error(__CLASS__ . ' error,Curl error: ' . curl_error($ch));
            return false;
        }
        $ret = curl_getinfo($ch , CURLINFO_HTTP_CODE);
        curl_close($ch);
        // 只有正式环境或者返回信息小于200字节，才记录日志
        if ( !app()->environment('product') || strlen($data) < 200 ) {
            Log::info(__CLASS__ . ' API return:' . $data);
        }
        if ( $ret == 200 ) {
            $json = json_decode($data , true);
            return $json;
        } else {
            Log::info(__CLASS__ . ' API return:' . $data);
            Log::info(__CLASS__ . ' API return is error');
            return false;
        }
    }
}
