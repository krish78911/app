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
<link rel="stylesheet" type="text/css" href="css/styleback.css">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
</head>
    
<body BGCOLOR="white">
    <!--Main page starts-->
    <div id="page">
    
    <!--Navigation menu starts-->
     <nav class="clearfix">  
    <ul class="clearfix">  
        <li><a href="index.php">Home</a></li>  
        <li><a id="addpage">Add</a></li>  
        <li><a href="searchinfo.php">Search All</a></li>  
        <li><a href="searchinfo.php">Search by County</a></li>  
        <li><a id="logout">LogOut</a></li>  
        <!--<li><a id="editpage">Edit</a></li>  
        <li><a id="deletepage">Delete</a></li>-->   
    </ul>  
    <a href="#" id="pull">Menu</a>  
      </nav>  
     <!--Navigation menu ends-->
      
    <!--Page content starts-->
    <div id="content">
        <p id="frametitle1"><!--<img src="images/book.png" style="width:60px; height:50px">-->Admin Panel</p>
       <div style="height:300px; overflow: scroll"> 
<form action="deleteinfo.php" method="post">
        <?php
$con=mysqli_connect("localhost","root","","emails");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$result = mysqli_query($con,"SELECT *FROM webbizemails");

echo "<table border='1' bgcolor='#767676' width='100%' style='color:#000;'>
<tr style='background-color:#2c2c2c; color: #fff'>
<th>ID</th>
<th>COUNTY</th>
<th>EMAIL</th>
<th>DELETE</th>
<th>EDIT</th>
</tr>";

while($row = mysqli_fetch_array($result))
  {
  echo "<tr>";
  echo "<td><li style='list-style-type: none;'>  ". $row['ID']. "</li></td>";
  echo "<td><li style='list-style-type: none;'>  ". $row['COUNTY']. "</li></td>";
  echo "<td><li style='list-style-type: none;'>  ". $row['EMAIL']. "</li></td>";
  echo "<td><li style='list-style-type: none;'> <input type='submit' name='delete' value='". $row['ID']. "' stye='background-color: red'> </li></td>";
  echo "<td><li style='list-style-type: none;'> <input type='submit' value='X' stye='background-color: red'> </li></td>";
  echo "</tr>";
 # $bc=$row['name'];
#echo "<input type='text' value='$bc'>";
  }
  echo "</table>";
/*echo"<a href='index.php'> <input type='submit' value='Back' style='width: 200px; height: 50px; background-color:#3c722c; color:#fff;'> </a>";*/
mysqli_close($con);
?>
</form>
</div>        
        <p id="frametitle3"></p>
        
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
<link rel="stylesheet" href="jquery.simplyscroll.css" media="all" 
type="text/css">

<script type="text/javascript">
(function($) {
	$(function() { //on DOM ready 
    		$("#scroller").simplyScroll();
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
    
</body>
</html>