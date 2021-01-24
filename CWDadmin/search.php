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
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
</head>
    
<body>
    
    <div id="pageadd">
     <div id="content">
         
        <form action="searchinfo.php" method="post">
        <a href="index.php"><input style="float:right; border-radius:2px; width:40px; background-color: #000; opacity:0.5; color:#fff; font-size:20px;" type="button" onclick="add.php.close();" value="x" /></a>
          <p id="frametitle4">Search by First or Last name or by City.</p>
        <table>
        <tr>
            <td><label id="labeltext">First Name:</label></td> <td><input type="text" id="textboxtext"></td>
        </tr>
            
        <tr>
            <td><label id="labeltext">Last Name:</label></td> <td><input type="text" id="textboxtext"></td>
        </tr> 
            
        <tr>
            <td><label id="labeltext">City:</label></td> <td><input type="text" id="textboxtext"></td>
        </tr>
               
        </table>
        <input id="submitbutton" type="submit" value="Submit"><a href="index.php"><input id="submitbutton" type="button" value="Close"></a>
        </form>
         
     </div>
    </div>
    
</body>
</html>