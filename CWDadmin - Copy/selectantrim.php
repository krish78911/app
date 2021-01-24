<?php
session_start();
//print_r($_SESSION);
?>
<?php
    if($_SESSION['loginname'] == 'CWDadmin' && $_SESSION['password'] == 'CWD2015webbiz') {
         
        
}
 else
 {
     echo '<script>window.location = "login.php";</script>';
     //header("Location: login.php");
         die("Please login");    
 }

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
<title>Admin Panel</title>
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" type="text/css" href="css/styleback.css">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

</head>
    
<body>
    
    <!--Main page starts-->
    <div id="page">

    
    <!--Navigation menu starts-->
   <!-- <nav class="clearfix">  
    <ul class="clearfix">  
        <li><a href="index.php">Home</a></li>  
        <li><a id="addpage">Add</a></li>  
        <li><a href="searchinfo.php">Search All</a></li>  
        <li><a href="searchinfo.php">Search by County</a></li>  
        <li><a id="logout">LogOut</a></li>  -->
        <!--<li><a id="editpage">Edit</a></li>  
        <li><a id="deletepage">Delete</a></li>-->   
    <!-- </ul>  
    <a href="#" id="pull">Menu</a>  
      </nav>  -->
     <!--Navigation menu ends-->
      
    <!--Page content starts-->
    <div id="content">
        
        <div id="frametitle1">
        <a href="http://comparisonwindowsanddoors.com/testwebsite/door.php" target="_blank"><input type="submit" id="logout" value="Test Website" style="float:right"></a>
        <a href="logout.php"><input type="submit" id="logout" value="Logout" style="float:right"></a>
        </div>
        
        <table style="background-color:#fff; width:100%;"><tr>
            <td style="width:15%;">
                <button id="countybuttonlogo">Select County to Add Emails</button><br>
                <div id="divcountycontainer" style="overflow-y: scroll;">
                    <form action="selectantrim.php" method="post">
                    <input type="submit" id="countybutton1" class="buttonscounty1" name="buttonname" value="Antrim"><br>
                    <input type="submit" id="countybutton2" class="buttonscounty" name="buttonname" value="Armagh"><br>
                    <input type="submit" id="countybutton3" class="buttonscounty1" name="buttonname" value="Carlow"><br>
                    <input type="submit" id="countybutton4" class="buttonscounty" name="buttonname" value="Cavan"><br>
                    <input type="submit" id="countybutton5" class="buttonscounty1" name="buttonname" value="Clare"><br>
                    <input type="submit" id="countybutton6" class="buttonscounty" name="buttonname" value="Cork"><br>
                    <input type="submit" id="countybutton7" class="buttonscounty1" name="buttonname" value="Donegal"><br>
                    <input type="submit" id="countybutton8" class="buttonscounty" name="buttonname" value="Down"><br>
                    <input type="submit" id="countybutton9" class="buttonscounty1" name="buttonname" value="Dublin North"><br>
                    <input type="submit" id="countybutton10" class="buttonscounty" name="buttonname" value="Dublin South"><br>
                    <input type="submit" id="countybutton11" class="buttonscounty1" name="buttonname" value="Fermanagh"><br>
                    <input type="submit" id="countybutton12" class="buttonscounty" name="buttonname" value="Galway"><br>
                    <input type="submit" id="countybutton13" class="buttonscounty1" name="buttonname" value="Kerry"><br>
                    <input type="submit" id="countybutton14" class="buttonscounty" name="buttonname" value="Kildare"><br>
                    <input type="submit" id="countybutton15" class="buttonscounty1" name="buttonname" value="Kilkenny"><br>
                    <input type="submit" id="countybutton16" class="buttonscounty" name="buttonname" value="Laois"><br>
                    <input type="submit" id="countybutton17" class="buttonscounty1" name="buttonname" value="Leitrim"><br>
                    <input type="submit" id="countybutton18" class="buttonscounty" name="buttonname" value="Limerick"><br>
                    <input type="submit" id="countybutton19" class="buttonscounty1" name="buttonname" value="Londonderry"><br>
                    <input type="submit" id="countybutton20" class="buttonscounty" name="buttonname" value="Longford"><br>
                    <input type="submit" id="countybutton21" class="buttonscounty1" name="buttonname" value="Louth"><br>
                    <input type="submit" id="countybutton22" class="buttonscounty" name="buttonname" value="Mayo"><br>
                    <input type="submit" id="countybutton23" class="buttonscounty1" name="buttonname" value="Meath"><br>
                    <input type="submit" id="countybutton24" class="buttonscounty" name="buttonname" value="Monaghan"><br>
                    <input type="submit" id="countybutton25" class="buttonscounty1" name="buttonname" value="Offaly"><br>
                    <input type="submit" id="countybutton26" class="buttonscounty" name="buttonname" value="Roscommon"><br>
                    <input type="submit" id="countybutton27" class="buttonscounty1" name="buttonname" value="Sligo"><br>
                    <input type="submit" id="countybutton28" class="buttonscounty" name="buttonname" value="Tipperary"><br>
                    <input type="submit" id="countybutton29" class="buttonscounty1" name="buttonname" value="Tyrone"><br>
                    <input type="submit" id="countybutton30" class="buttonscounty" name="buttonname" value="Waterford"><br>
                    <input type="submit" id="countybutton31" class="buttonscounty1" name="buttonname" value="Westmeath"><br>
                    <input type="submit" id="countybutton32" class="buttonscounty" name="buttonname" value="Wexford"><br>
                    <input type="submit" id="countybutton33" class="buttonscounty1" name="buttonname" value="Wicklow"><br>
                    </form>
                
                </div>
            </td>
            
            <td id="sidecontent" style="background-color: #e3e3e3; background-size:100% 100%; background-repeat:no-repeat; width:85%;">
                
                <div id="maincontent1">
<?php
$countynamee = $_POST['buttonname'];

if (isset($countynamee)) {
    
}
else{
  $countynamee = "antrim";
}

//echo $countynamee;
$con=mysqli_connect("mysql9.mylogin.ie","comparisonw2","]c*_3W+r:T)}j?L","RG319531_cwdback");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$result = mysqli_query($con,"SELECT *FROM backend where county = '".$countynamee."' ORDER BY id");
echo "<form action='insert.php' method='post'>";

echo "<input id='tablerowbutton' type='text' name='county79' value='".$countynamee."' readonly>";
echo "<table border='1' bgcolor='#d4d4d4' width='99%' style='border-style: none; border-color: #fff;'>
<tr>
<th id='tablerow1'>Company Name</th>
<th id='tablerow1'>Email</th>
<th id='tablerow1'>Phone</th>
<th id='tablerow1'>Address</th>
</tr>";

while($row = mysqli_fetch_array($result))
  {
	  
  echo "<tr>";
  echo "<td><input id='tablerow' style='width:100%; font-size:15px; font-weight:bold; height:30px; text-align:center' type='text' name='name[]' value='". $row['name']."'></td>";
  echo "<td><input id='tablerow' style='width:100%; font-size:15px; font-weight:bold; height:30px; text-align:center' type='text' name='email[]' value='". $row['email']."'></td>";
  echo "<td><input id='tablerow' style='width:100%; font-size:15px; font-weight:bold; height:30px; text-align:center' type='text' name='phone[]' value='". $row['phone']."'></td>";
  echo "<td><input id='tablerow' style='width:100%; font-size:15px; font-weight:bold; height:30px; text-align:center' type='text' name='address[]' value='". $row['address']."'></td>";
  //echo "<td><input id='tablerow' style='width:100%; height:30px; text-align:center; display:none' type='text' name='county[]' value=". $row['county']. "></td>";
  //echo "<td><input type='text' name='county' value=". $row['name']. "></td>";
  echo "</tr>";
    
 # $bc=$row['name'];
#echo "<input type='text' value='$bc'>";
  }
  echo "</table>";

echo "<input id='tablerowbutton1' type='submit' name='county' value='UPDATE'>";

//echo"<a href='searchallcategories.php'> <input type='submit' value='Back' style='width: 200px; height: 50px; background-color:#3c722c; color:#fff;'> </a>";

echo "<form>";

mysqli_close($con);
?> 
                </div>
                
    <div id="maincontent2">
           
        
            <!--mysql/php experiment-->
        
                    <!--mysql/php experiment-->
           <!-- <form action="addinfo.php" method="post" id="smyform">
        <input type="text" id="labeltextlogo" name="county79" value="abcd" style="display:none"> <br>  <hr>
        <input type="button" id="labeltextlogo1" name="county79" value="abcd"><br>  <hr>-->
        <!--<a href="index.php"><input style="float:right; border-radius:2px; width:40px; background-color: #000; opacity:0.5; color:#fff; font-size:20px;" type="button" onclick="add.php.close();" value="x" /></a>-->
        <!--<table>
          
        <tr>
            <td><label id="labeltext1">Name</label></td> 
            <td><label id="labeltext2">Email</label></td> 
            <td><label id="labeltext3">Phone</label></td> 
            <td><label id="labeltext4">Address</label></td>
        </tr>
            
        <tr>
            <td><input type="text" id="textboxtext1" placeholder="Company Name" name="name[]"></td>
            <td><input type="text" id="textboxtext2" placeholder="Email" name="email[]"></td>
            <td><input type="text" id="textboxtext3" placeholder="Phone" name="phone[]"></td>
            <td><input type="text" id="textboxtext4" placeholder="Address" name="address[]"></td>
        </tr>
         <tr>
            <td><input type="text" id="textboxtext1" placeholder="Company Name" name="name[]"></td>
            <td><input type="text" id="textboxtext2" placeholder="Email" name="email[]"></td>
            <td><input type="text" id="textboxtext3" placeholder="Phone" name="phone[]"></td>
            <td><input type="text" id="textboxtext4" placeholder="Address" name="address[]"></td>
        </tr>
        <tr>
            <td><input type="text" id="textboxtext1" placeholder="Company Name" name="name[]"></td>
            <td><input type="text" id="textboxtext2" placeholder="Email" name="email[]"></td>
            <td><input type="text" id="textboxtext3" placeholder="Phone" name="phone[]"></td>
            <td><input type="text" id="textboxtext4" placeholder="Address" name="address[]"></td>
        </tr>
         <tr>
            <td><input type="text" id="textboxtext1" placeholder="Company Name" name="name[]"></td>
            <td><input type="text" id="textboxtext2" placeholder="Email" name="email[]"></td>
            <td><input type="text" id="textboxtext3" placeholder="Phone" name="phone[]"></td>
            <td><input type="text" id="textboxtext4" placeholder="Address" name="address[]"></td>
        </tr>
         <tr>
            <td><input type="text" id="textboxtext1" placeholder="Company Name" name="name[]"></td>
            <td><input type="text" id="textboxtext2" placeholder="Email" name="email[]"></td>
            <td><input type="text" id="textboxtext3" placeholder="Phone" name="phone[]"></td>
            <td><input type="text" id="textboxtext4" placeholder="Address" name="address[]"></td>
        </tr>
               
        </table>
        <input id="submitbutton" type="submit" value="Submit"><a href="index.php"><input id="submitbutton" type="button" value="Close"></a>
       </form> -->
                    
                    
    </div>
            </td>
            
            </tr></table>
        <!--<p id="frametitle1">Admin Panel</p>
        <p id="frametitle2">Ireland's Only Window & Door Quote Service.</p>
        <div id="divcont">
        <div class = "custimage1">Notch</div>
        <div class = "custimage2">Peak</div>
        </div>-->
        <!--<div id="oval">
        <ul id="scroller" style="width:100%">
	<li><img src="images/scroller1.jpg" width="290" height="100"></li>
	<li><img src="images/scroller2.jpg" width="290" height="100"></li>
	<li><img src="images/scroller3.jpg" width="290" height="100"></li>
     </ul>  
        </div>

        <p id="frametitle2">Windows and Doors Customization System.<br> Use the top navigation menu for Adding Emails, Deteling Emails, Search all emails, Search by County and Update emails. Delete and Update operations will be performed after Search operation.</p>
       
        
        <p id="frametitle3"></p>-->
       
        <div id="footer">
        Developed By: Webbiz.ie | All Rights Reserved
        </div>
        
    </div>
    <!--Page content ends-->
        
    </div>
   <!--Main page ends--> 
    
    
    
    
    <script>
    $(function() {  
    var pull        = $('#pull');  
        menu        = $('nav ul');  
        menuHeight  = menu.height();  
  
    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
});  
        
        $(window).resize(function(){  
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
});
    </script>
    
<!--<script type="text/javascript">
        $(function() {
        var colors = ["#fafafa","#ddd","#c9c9c9","#f7e6e6"];
            setInterval(function() {
                var bodybgarrayno = Math.floor(Math.random() * colors.length);
                var selectedcolor = colors[bodybgarrayno];
                $("body").css("background",selectedcolor);
            }, 3000);
        })
    </script>-->
<script type="text/javascript" 
src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js">
</script>
<script type="text/javascript" src="js/jquery.simplyscroll.js"></script>
<script type="text/javascript" src="js/jscript.js"></script>
<link rel="stylesheet" href="jquery.simplyscroll.css" media="all" 
type="text/css">

<script type="text/javascript">
(function($) {
	$(function() { //on DOM ready 
    		$("#scrollerex").simplyScroll();
	});
 })(jQuery);
</script>
  
    
    
    <!--Experiment-->   
<!-- put the the overlay below before closing </body> the end of the page -->
<div class="overlayOuter"> 
    <div class="overlayInner">
      <!-- external content to be loaded here -->
    </div>
  </div>
<style>
.overlayOuter{
    background:#000;
    opacity:0.9;
    display:none;
    height:1100px;
    left:0;
    position:absolute;
    top:0;
    width:100%;
    z-index:100001;
 }


.overlayInner{
    position:relative;
    top:10%;/*or whatever*/
    left:40% /*or whatever*/
    width:500px;
    z-index:100001;
    background-size: 100% 100%;
    background-repeat:no-repeat;
 }    
</style>
    
<script>$("#addpage").live("click", function(){
    $(".overlayInner").load("add.php",
       // the following is the callback   
      function(){$(".overlayOuter").fadeIn(300); })
});</script>
    
<script>$("#searchpage").live("click", function(){
    $(".overlayInner").load("search.php",
       // the following is the callback   
      function(){$(".overlayOuter").fadeIn(300); })
});</script>
    
<script>$("#editpage").live("click", function(){
    $(".overlayInner").load("edit.php",
       // the following is the callback   
      function(){$(".overlayOuter").fadeIn(300); })
});</script>
    
<script>$("#contactpage").live("click", function(){
    $(".overlayInner").load("contact.php",
       // the following is the callback   
      function(){$(".overlayOuter").fadeIn(300); })
});</script>
    
    
<script language="JavaScript" type="text/javascript">
$(document).ready(function () {
    var images = ['images/scroller1.jpg', 'images/scroller2.jpg', 'images/scroller3.jpg'];
    var i = 0;

    function changeBackground() {
        $('#masthead').css('background-image', function () {
            if (i >= images.length) {
                i = 0;
            }
            return 'url(' + images[i++] + ')';
        });
    }
    // Call it on the first time
    changeBackground();
    // Set an interval to continue
    setInterval(changeBackground, 3000);
});
</script>

 <!--Experiment-->   
    
  
<!--<script>
$('.buttonscounty, .buttonscounty1').click(function(e){
    var buttonvalue = $(this).attr("value");
    alert(buttonvalue);
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "add.php",
        data: { },
        success: function(data){
            $('#sidecontent').html(data);
        }
    });
});    
</script>-->
    
</body>
</html>