<?php 
//设置最大执行时间
set_time_limit(0);
$url="curl -i http://cadd.gs.washington.edu/api/v1.0/GRCh38-v1.4/22:44044001-44044002"
function getHtml($url){
  // 1. 初始化
   $ch = curl_init();
   // 2. 设置选项，包括URL
   curl_setopt($ch,CURLOPT_URL,$url);
   curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
   curl_setopt($ch,CURLOPT_HEADER,0);
   // 3. 执行并获取HTML文档内容
   $output = curl_exec($ch);
   if($output === FALSE ){
    $output = '';
   }
   // 4. 释放curl句柄
   curl_close($ch);
   return $output;
}
function getPageData($url){
  // 获取整个网页内容
  $html = getHtml($url);
  echo($html);
}
?>