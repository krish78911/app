<?php 
//$name=$_POST["name"];
if (isset($_POST["county79"])) 
{
  $user = $_POST["county79"];
  echo $user;
  echo " is your username";
} 
else 
{
  $user = null;
  echo "no username supplied";
}



$con=mysqli_connect("localhost","root","","emails");

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


foreach( $name as $key => $n ) {
   print "The name is ".$n.", email is ".$email[$key].", and location is ".$phone[$key].". Thank".$address[$key]." you\n";
    $str = "INSERT INTO backend(name, email, phone, address, county)
VALUES ( '".$n."', '".$email[$key]."', '".$phone[$key]."', '".$address[$key]."', 'armagh')";
    $qury = mysqli_query($con,$str);
    if(!$qury)
    echo mysql_error();
 else
 echo "<script>alert('Successfully inserted 1 row');history.go(-1)</script>";
}
 
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
