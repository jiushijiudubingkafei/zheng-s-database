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
  $jsondecode = json_decode($json, true);

$array1000g2015aug_all = array();
$arrayesp6500siv2_all = array();
$arrayExAC_ALL = array();
$i41000g2015aug_all = 0;
$i4esp6500siv2_all = 0;
$i4ExAC_ALL = 0;

for($i=0;$i<count($jsondecode);$i++){
	if($jsondecode[$i]['1000g2015aug_all'] != "."){
		if($jsondecode[$i]['1000g2015aug_all'] > 0.5){
			$jsondecode[$i]['1000g2015aug_all'] = 1 - $jsondecode[$i]['1000g2015aug_all'];
		}
		$array1000g2015aug_all[$i41000g2015aug_all] = $jsondecode[$i]['1000g2015aug_all'];
		$i41000g2015aug_all += 1;
	}
	if($jsondecode[$i]['esp6500siv2_all'] != "."){
		if($jsondecode[$i]['1000g2015aug_all'] > 0.5){
			$jsondecode[$i]['esp6500siv2_all'] = 1 - $jsondecode[$i]['esp6500siv2_all'];
		}
		$arrayesp6500siv2_all[$i4esp6500siv2_all] = $jsondecode[$i]['esp6500siv2_all'];
		$i4esp6500siv2_all += 1;
	}
	if($jsondecode[$i]['ExAC_ALL'] != "."){
		if($jsondecode[$i]['1000g2015aug_all'] > 0.5){
			$jsondecode[$i]['ExAC_ALL'] = 1 - $jsondecode[$i]['ExAC_ALL'];
		}
		$arrayExAC_ALL[$i4ExAC_ALL] = $jsondecode[$i]['ExAC_ALL'];
		$i4ExAC_ALL += 1;
	}
}

$arraytojson[0] = $array1000g2015aug_all;
$arraytojson[1] = $arrayesp6500siv2_all;
$arraytojson[2] = $arrayExAC_ALL;

echo json_encode($arraytojson);
?>