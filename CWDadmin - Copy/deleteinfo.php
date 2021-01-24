<?php 
//$name=$_POST["name"];
$delete=$_POST["delete"];
echo '<script language="javascript">';
echo 'alert("message successfully sent")';
echo '</script>';
//$description=$_POST["description"];
//$edit=$_POST["edit"];
//$instock=$_POST["instock"];
//$email=$_POST["email"];
//echo "My first PHP script!";
//echo $name;
//echo $age;
//echo $nationality;
//echo $contact;
//echo $address;
 //echo $fname;


$con=mysqli_connect("localhost","root","","emails");

 //Check connection
if (mysqli_connect_errno($con))
 {
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }
 
 
  
  $str = "DELETE FROM webbizemails WHERE ID = '".$delete."'";
 
 
 //echo "\n". $str;
  
  
$qury = mysqli_query($con,$str);
  if(!$qury)
  echo mysql_error();
  else
 echo "<script>alert('Successfully inserted 1 row');history.go(-1)</script>";
  
  
  //mysqli_close($con);
?>