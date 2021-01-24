<?php
//save.php code
$data = $_POST['img_val'];
//$data = addslashes(file_get_contents($_FILES['images']['img_val']));
//$image = file_get_contents($_FILES['image']['img_val']);
//$image = mysql_real_escape_string($image);
$no = $_POST['textbox1'];

//Show the image
//echo '<img src="'.$_POST['img_val'].'" />';
 
//Get the base-64 string from data
$filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);
 
//Decode the string
$unencodedData=base64_decode($filteredData);
 
//Save the image
$data1 = file_put_contents('img.png', $unencodedData);

$imgData = addslashes(file_get_contents('img.png', $unencodedData));
$imageProperties = getimageSize('img.png');

echo $imageProperties;
$con=mysqli_connect('localhost', 'root', '', 'doors');
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$result = mysqli_query($con,"INSERT INTO doorproject(image, number) VALUES('".$imgData ."', '".$no ."')");
echo "alert('inserted one row')";
/*
$sql = "SELECT image FROM doorproject";
$ss = mysqli_query($con, $sql);
$result=mysqli_fetch_array($ss);
echo '<img src="data:image/jpeg;base64,'.base64_encode( $result['image'] ).'"/>';*/

mysqli_close($con);


?>