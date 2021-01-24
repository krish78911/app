<?php
session_id();
session_start();

$_SESSION["favcolor"] =  session_id();

?>

<!DOCTYPE html>
<!--
Template Developed by: 
Name: Krishna Kumar Singh
Email: krishnarathod791@gmail.com
-->
<html>
<head>
<!--title of the page-->
<title></title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="js/html2canvas.js"></script>
<script type="text/javascript" src="js/jquery.plugin.html2canvas.js"></script>
    
<link href="css/jquery-ui.css" type="text/css" rel="stylesheet">

<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
</head>
<body>
    <div id="page11" style="width:400px; margin:20px auto; background-color:#688ccc; border:1px solid #e8e8e8; border-radius:5px;">
      
     <div style='margin: 0px auto; background-color: rgba(118, 118, 118, 0.38); text-align: center; width: 100%; margin-top: 2px;'>
     <p id="frontpagetextheading" style="color:#000;">Select Door Color <!--<img src="images/sadsmiley.png" style="height:50px; width:50px; margin-top: 20px;">--> </p>
     </div>
</div>
<script>
function funcaa() {
    var mydiv = document.getElementById("page11");
var curr_width = mydiv.style.width;
    alert(curr_width);
}
</script>
</body>
</html>