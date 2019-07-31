<?php
  $json = $_POST["searchterms"];
//$res = json_decode($json);
//var_dump($res);
$ready = $_POST["searchterms"];
//$searchtype = $res->searchtype;
$searchtype = $_POST["searchtype"];

$token = strtok($ready, "\n");

$searchby = chop($token);

$i = 1;
 
while ($token != false)
{
	if($i == 1){
		$i += 1;
		$token = strtok("\n");
		continue;
	}
	
	$searchby = $searchby."|".chop($token);
	
	$token = strtok("\n");
	
	$i += 1;
}

//$searchby = $searchby."'";

//echo($searchby);

  require 'mysql-class.php';
  $link = new mysqlHelp($arr);
if($searchtype != "undefinded"){
	$searchby = "'".$searchby."'";
	$sql="SELECT * FROM Sheet2 WHERE $searchtype REGEXP $searchby";   //查询数据库表中数据
	
	
}
  else{
	  $searchby = "'%".$searchby."%'";
  $sql="SELECT * FROM Sheet2 WHERE (chr LIKE $searchby) OR (begining LIKE $searchby) OR (Ref LIKE $searchby) OR (Alt LIKE $searchby) OR (Function LIKE $searchby) OR (Gene LIKE $searchby) OR (ExonicFunc LIKE $searchby) OR (AAChange LIKE $searchby) OR (avsnp150 LIKE $searchby) OR (1000g2015aug_all LIKE $searchby) OR (esp6500siv2_all LIKE $searchby) OR (ExAC_ALL LIKE $searchby) OR (SIFT LIKE $searchby) OR (Polyphen2 LIKE $searchby) OR (changeID LIKE $searchby)";
  }
  $array=$link->getResult($sql);    //对查询的数据进行处理
  $json = json_encode($array);      //将得到的数据转换成json格式
  echo ('{"data":'.$json.'}'); //转换的json要以这种格式输出，才能被前台读取，不能直接输出,否则将报错，数据不能再表格中显示

?>