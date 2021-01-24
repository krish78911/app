<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<!-- 
Design by:- Krishna Kumar Singh 
Email:- krishnarathod791@gmail.com
-->
<html>
<head>
<title>Digi-Inventory Management System</title>
	    <link href="http://www.digi.ie/templates/digi/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />    
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    
</head>
<body>
<?php
// Set session variables
$_SESSION["favcolor"] = "green";
//echo "Session variables are set.";
?>
<div id="container4" >
        <form method="POST" enctype="multipart/form-data" action="door.php" id="myForm1">
            <table>
            <tr>
            <td><label id="labeltext1" >Name: </label></td>
            <td><input id="textboxtext1" type="text" name="fname"></td>
            </tr>
            
            <tr>
            <td><label id="labeltext1" >Email: </label></td>
            <td><input id="textboxtext1" type="text" name="email"></td>
            </tr>
    
             <input id="formsubmit" type="submit" class="showbutton" value="Submit">   
            </table>
    </form>
    </div>
    </body>
    </html>