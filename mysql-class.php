<?php
  header("content-type:text/html;charset=utf-8");
  class mysqlHelp
  {
      public $host;
      public $user;
      public $password;
      public $databaseName;
      public $conn;
      public $charset='UTF8';
      //构造函数
      public function __construct ($arrTemp)
      {
          $host=$this->host=$arrTemp['host'];
          $user=$this->user=$arrTemp['user'];
          $password=$this->password=$arrTemp['password'];
          $databaseName=$this->databaseName=$arrTemp['databaseName'];
          $this->conn=mysqli_connect($host,$user,$password,$databaseName) or die(mysqli_error($this->conn));
          mysqli_query($this->conn, "set names " . $this->charset);
      }
      //查询
      public function queryData($sql)
      {
          $res=mysqli_query($this->conn,$sql)or die(mysqli_error($this->conn));
          return $res;
      }
      //处理查询得到的数据
      public function getResult($sql){
          $resource=mysqli_query($this->conn,$sql) or die(mysqli_error($this->conn));//查询sql语句
          $res=array();
          while(($row=mysqli_fetch_assoc($resource))!=false){
              $res[]=$row;
          }
          return $res;//将查询到的所有数据返回到一个二维数组中；
      }
  }
  $arr=array(
      'host'=>'localhost',
      'user'=>'root',
      'password'=>'Zzbx32sWcqdxyq',
      'databaseName'=>'test'
  );
?>
