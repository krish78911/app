<?php 
session_start();
?>

<?php
$con=mysqli_connect("localhost","root","","CWD");

 //Check connection
if (mysqli_connect_errno($con))
 {
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$county = $_POST["county79"];

//$str = "UPDATE backend SET name='".$n."', email='".$email[$key]."', phone='".$phone[$key]."', address='".$address[$key]."' WHERE county='".$county."'";


$str = "DELETE from backend WHERE county = '".$county."'";
$qury = mysqli_query($con,$str);
  if(!$qury)
  echo mysql_error();
  else
 echo "";

foreach( $name as $key => $n ) {
   //print "The name is ".$n.", email is ".$email[$key].", and location is ".$phone[$key].". Thank".$address[$key]." you\n";
   $str = "INSERT INTO backend(name, email, phone, address, county)
VALUES ( '".$n."', '".$email[$key]."', '".$phone[$key]."', '".$address[$key]."', '".$county."')";
	
	/*$str = "UPDATE backend SET name='".$n."', email='".$email[$key]."', phone='".$phone[$key]."', address='".$address[$key]."' WHERE county='".$county."'";*/
	
  // $str = "UPDATE backend SET name = '".$n."', email = '".$email[$key]."', phone = '".$phone[$key]."', address = '".$address[$key]."' WHERE county= '".$county."'";
    $qury = mysqli_query($con,$str);
  if(!$qury)
  echo mysql_error();
  //else
 //echo "";
   // echo "<script>history.go(-1)</script>";
    
   // echo " - <a href = 'selectantrim.php?id=".$county."'>Edit</a><br>";
    
}

//header("Refresh:0");
//echo "<script>history.go(-1)</script>";
//echo '<a href="javascript:window.location.reload(history.go(-2));">Back<a>'
//echo "<script>history.go(-1)</script>";

//header("Refresh:0");
//echo "<a href='http://comparisonwindowsanddoors.com/doorproject/backend/selectantrim.php'>dfgdfgfhf</a>";
//header('Refresh: 2; url=http://comparisonwindowsanddoors.com/doorproject/backend/selectantrim.php');

    
 
 //echo "\n". $str;
  

 





/*
$county=$_POST["county79"];
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
 
$str = "SELECT name, email, phone, address FROM backend";
    $str .= "insert into backend(name, email, phone, address) values('".$addcategory."', '".$addproduct."', '".$addsname."', '".$addscode."');";
    $str .= "insert into delivery(name, email, phone, address) values('".$addcategory."', '".$addproduct."', '".$addsname."', '".$addscode."', '".$addinstock."');";


    $qury = mysqli_multi_query($con,$str);
    if(!$qury)
    echo mysql_error();
    else
    echo "<script>alert('stock updated');history.go(-1)</script>";
  //mysqli_close($con);
*/
?>



<html>
<head>
<title> Popup Box DIV </title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/styleback.css">    

</head>
<body>
     
<script>
$( document ).ready(function() {
  //window.location("http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page");
    window.location = "fileupdated.php";
    //history.go(-1)
});    
</script>
   
</body>
</html> 

