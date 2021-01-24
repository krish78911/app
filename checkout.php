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
  echo "<p style='color:#fff; font-size:50px'>Folder Empty. Please make a Door or Window</p>"; 
}
else if (is_dir_empty($folder)) {
  echo "<p style='color:#fff; font-size:50px'>Folder Empty. Please make a Door or Window</p>"; 
}else{
  $filetype = '*.*';
$files = glob($folder.$filetype);
$count = count($files);
echo '<div style="overflow-x: scroll;">';
echo '<table><tr>';
for ($i = 0; $i < $count; $i++) {
    echo '<td>';
    
    echo '<a name="'.$i.'" href="#'.$i.'"><img id="popupimage" src="'.$files[$i].'" style="width: 500px; height: 500px;" onclick="myFunction()" id="showimg"/></a>';
    //echo substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder)); 
    echo '<br>';
    $fff = substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder));
    
    echo '<form method="POST" enctype="multipart/form-data" action="deleteimg.php" id="myForm">';
    echo '<input type="submit" value="'.$fff.'" class="deletebutton" name="imgbtn" style="color: rgba(255, 255, 255, 0);">';
    echo '</form>';
    echo '</td>';
}
echo '</tr></table>';
echo '</div>';

}

function is_dir_empty($folder) {
  if (!is_readable($folder)) return NULL; 
  return (count(scandir($folder)) == 2);
}




?>