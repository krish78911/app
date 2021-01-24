<?php
$dir = "database/ss";
$dh  = opendir($dir);
while (false !== ($filename = readdir($dh))) {
    $files[] = $filename;
    
}



rsort($files);
$files1[] = array_slice($files, 0, -2);
print_r($files1);



?>