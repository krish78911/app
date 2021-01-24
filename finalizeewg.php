<?php
session_id();
session_start();
////Print_r ($_SESSION);
//save.php code
//$_SESSION["favcolor"] =  $_POST['fname'];

//$img = $_POST['img_val'];
//Show the image
$newdi = $_SESSION["favcolor"];

////echo '<img src="'.$img.'" />';
 
//Get the base-64 string from data
//$filteredData=substr($img, strpos($img, ",")+1);
 
//Decode the string
//$unencodedData=base64_decode($filteredData);
 
//Save the image
//file_put_contents('img.png', $unencodedData);

	////print $success ? $file : 'Unable to save the file.';
$folder = 'database/'.session_id().'/';

if (!file_exists($folder)) {
  header('Location: folderemptywg.php'); 
    e.stopPropagation();
}
else if (is_dir_empty($folder)) {
  header('Location: folderemptywg.php'); 
    e.stopPropagation();
}else{

    header('Location: gooutlastwg.php');
    e.stopPropagation();

}

function is_dir_empty($folder) {
  if (!is_readable($folder)) return NULL; 
  return (count(scandir($folder)) == 2);
}




?>

