<?php
$servername = "localhost";
$username = "root";
$password = "Zzbx32sWcqdxyq";
$dbname = "test";

$json = $_POST["data"];
$res = json_decode($json);

$ready = $res->searchterms;
$searchtype = $res->searchtype;

$token = strtok($ready, "\n");

$searchby = "'".chop($token)."'";

$i = 1;
 
while ($token != false)
{
	if($i == 1){
		$i += 1;
		$token = strtok("\n");
		continue;
	}
	
	$searchby = $searchby.","."'".chop($token)."'";
	
	$token = strtok("\n");
	
	$i += 1;
}

$searchby = "(".$searchby.")";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
 
$sql = "SELECT * FROM Sheet2 WHERE $searchtype in $searchby";

$result = mysqli_query($conn, $sql);
 
if (mysqli_num_rows($result) > 0) {
    // 输出数据
    while($row = mysqli_fetch_assoc($result)) {
		echo $row["chr"]."\t";
		echo $row["begining"]."\t";
		echo $row["Ref"]."\t";
		echo $row["Alt"]."\t";
		echo $row["Function"]."\t";
		echo $row["Gene"]."\t";
		echo $row["ExonicFunc"]."\t";
		echo $row["AAChange"]."\t";
		echo $row["avsnp150"]."\t";
		echo $row["1000g2015aug_all"]."\t";
		echo $row["esp6500siv2_all"]."\t";
		echo $row["ExAC_ALL"]."\t";
		echo $row["SIFT"]."\t";
		echo $row["Polyphen2"]."\t";
        echo $row["changeID"]. "<br>";
    }
} else {
    echo "0 结果";
}
 
mysqli_close($conn);
?>
