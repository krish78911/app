<?php
session_start();
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
</head>
<body style="background-image: url('images/doorhtml.jpg'); background-size: 100% 100%; background-repeat: no-repeat; height: 1000px;">
     <form method="POST" enctype="multipart/form-data" action="multipleemail.php" id="myForm">
            <table>
            <tr>
            <td><label id="labeltext1" >Name: </label></td>
            <td><input id="textboxtext1" type="text" name="fname"></td>
            </tr>
            
            <tr>
            <td><label id="labeltext1" >Email: </label></td>
            <td><input id="textboxtext1" type="text"></td>
            </tr>
            
            <tr>
            <td><label id="labeltext1" >Phone: </label></td>
            <td><input id="textboxtext1" type="text"></td>
            </tr>
              <tr><td colspan="2"><label id="labeltext" >Comments</label></td>
              <td colspan="2"><textarea id="textareartxt"></textarea></td></tr> 
                
            </table>
            
                 
            
            <input id="formsubmit" type="submit" name="submit4" class="showbutton" value="Finalize/Email">
            <input type="button" id="editdoorbtn" class="showbutton" value="Edit">
            </form>
            <a href="door.php"><input type="button" id="makeanother" class="showbutton" value="Save and Make one more"></a>
        
</body>
</html>