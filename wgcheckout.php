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
</head>
<body>
    <div id="page">
    <!-- //echo "<script>window.history.go(-2)</script>";
     //header('Location: another.php'); 
     //header("Refresh:0; url=door.php");-->
     <div style='margin: 0px auto; background-color: #d8d8d8; text-align: center; width: 100%; margin-top: 40px;'>
     <form action='multipleemail.php' method='post' id='ssmyform' style="display: inline-block;">
     <table style="border-spacing: 25px 2px;">
            <tr>
            <td><label id="labeltext1" class="labelclass">Name: </label></td>
            <td><input id="textboxtext1" class="textclass" type="text" name="fname" required></td>
            </tr>
            
            <tr>
            <td><label id="labeltext1" class="labelclass">Email: </label></td>
            <td><input id="textboxtext1" class="textclass" type="text" name="email" required></td>
            </tr>
            
            <!--<tr>
            <td><label id="labeltext1" >Phone: </label></td>
            <td><input id="textboxtext1" type="text" name="phone"></td>
            </tr>-->
         
            <tr>
            <td><label id="labeltext1" class="labelclass">County: </label></td>
            <td>
            <select id="selectboxfinal" class="textclass" required>
  <option value="">Select</option>
  <option value="volvo">Antrim</option>
  <option value="saab">Armagh</option>
  <option value="mercedes">Carlow</option>
  <option value="audi">Cavan</option>
                <option value="volvo">Clare</option>
  <option value="saab">Cork</option>
  <option value="mercedes">Donegal</option>
  <option value="audi">Down</option>
                <option value="volvo">Dublin(North)</option>
                <option value="volvo">Dublin(South)</option>
  <option value="saab">Fermanagh</option>
  <option value="mercedes">Galway</option>
  <option value="audi">Kerry</option>
                <option value="volvo">Kildare</option>
  <option value="saab">Kilkenny</option>
  <option value="mercedes">Laois</option>
  <option value="audi">Leitrim</option>
                <option value="volvo">Limerick</option>
  <option value="saab">Londonderry</option>
  <option value="mercedes">Longford</option>
  <option value="audi">Louth</option>
                <option value="volvo">Mayo</option>
  <option value="saab">Meath</option>
  <option value="mercedes">Monaghan</option>
  <option value="audi">Offaly</option>
                <option value="volvo">Roscommon</option>
  <option value="saab">Sligo</option>
  <option value="mercedes">Tipperary</option>
  <option value="audi">Tyrone</option>
                <option value="volvo">Waterford</option>
  <option value="saab">Westmeath</option>
  <option value="mercedes">Wexford</option>
  <option value="audi">Wicklow</option>
</select>  </td>
            </tr>
         
            <tr>
            <td><label id="labeltext1" class="labelclass">Address: </label></td>
            <td><input id="textboxtext1" class="textclass" type="text" name="address" required></td>
            </tr>
              <tr><td><label id="labeltext" class="labelclass">Comments:</label></td>
              <td><textarea id="textareartxt" class="textclass" name="comments"></textarea></td></tr> 
                
    </table>
     <input type='submit' id="submitform">
     <!--//$_SESSION["favcolor"] =  $_POST['fname'];-->
     <a href='windowglass.php' ><input type='button' id="submitform" value='Make new'> </a>
     </form>
     </div>
</div>
</body>
</html>