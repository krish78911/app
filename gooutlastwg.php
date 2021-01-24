<?php
session_id();
session_start();
//Show the image
$newdi = $_SESSION["favcolor"];
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
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
</head>
<body style="background:none">
    <!-- //echo "<script>window.history.go(-2)</script>";
     //header('Location: another.php'); 
     //header("Refresh:0; url=door.php");-->
     <div style='margin: 0px auto; background-color: #87d9a4; text-align: center; width: 500px; margin-top: 40px; box-shadow:0px 0px 5px #000;'>
      <form action='multipleemail.php' method='post' id='ssmyform' style="display: inline-block;">
     <table style="border-spacing: 25px 2px;">
            <tr>
            <td><label id="labeltext1" class="labelclass">Name: </label></td>
            <td><input id="textboxtext1" class="textclass" type="text" name="fname" placeholder="Name" required></td>
            </tr>
            
            <tr>
            <td><label id="labeltext1" class="labelclass">Email: </label></td>
            <td><input id="textboxtext1" class="textclass" type="email" name="email" placeholder="Email" required></td>
            </tr>
            
            <!--<tr>
            <td><label id="labeltext1" >Phone: </label></td>
            <td><input id="textboxtext1" type="text" name="phone"></td>
            </tr>-->
         
            <tr>
            <td><label id="labeltext1" class="labelclass">County: </label></td>
            <td>
            <select id="selectboxfinal" class="textclass" name="countysel" required>
  <option value="">Select</option>
  <option value="Antrim">Antrim</option>
  <option value="Armagh">Armagh</option>
  <option value="Carlow">Carlow</option>
  <option value="Cavan">Cavan</option>
                <option value="Clare">Clare</option>
  <option value="Cork">Cork</option>
  <option value="Donegal">Donegal</option>
  <option value="Down">Down</option>
                <option value="Dublin(North)">Dublin(North)</option>
                <option value="Dublin(South)">Dublin(South)</option>
  <option value="Fermanagh">Fermanagh</option>
  <option value="Galway">Galway</option>
  <option value="Kerry">Kerry</option>
                <option value="Kildare">Kildare</option>
  <option value="Kilkenny">Kilkenny</option>
  <option value="Laois">Laois</option>
  <option value="Leitrim">Leitrim</option>
                <option value="Limerick">Limerick</option>
  <option value="Londonderry">Londonderry</option>
  <option value="Longford">Longford</option>
  <option value="Louth">Louth</option>
                <option value="Mayo">Mayo</option>
  <option value="Meath">Meath</option>
  <option value="Monaghan">Monaghan</option>
  <option value="Offaly">Offaly</option>
                <option value="Roscommon">Roscommon</option>
  <option value="Sligo">Sligo</option>
  <option value="Tipperary">Tipperary</option>
  <option value="Tyrone">Tyrone</option>
                <option value="Waterford">Waterford</option>
  <option value="Westmeath">Westmeath</option>
  <option value="Wexford">Wexford</option>
  <option value="Wicklow">Wicklow</option>
</select>  </td>
            </tr>
         
            <tr>
            <td><label id="labeltext1" class="labelclass">Town: </label></td>
            <td><input id="textboxtext1" class="textclass" type="text" name="address" placeholder="Town" required></td>
            </tr>
              <tr><td><label id="labeltext" class="labelclass">Comments:</label></td>
              <td><textarea id="textareartxt" class="textclass" name="comments" placeholder="Write your comments"></textarea></td></tr> 
                
    </table>
     <input type='submit' id="submitform">
     <!--//$_SESSION["favcolor"] =  $_POST['fname'];-->
     <a href='windowglass.php' ><input type='button' id="submitform" value='Make new'> </a>
     </form>
     </div>
<script src="js/disableright.js"></script>
</body>
</html>

