<?php
session_id();
session_start();
$name = session_id(); //edit this for session variable
$dir = "database/{$name}";
//$dir = "database/ss";
$dh  = opendir($dir);
while (false !== ($filename = readdir($dh))) {
    $files[] = "{$dir}/{$filename}";
}
rsort($files);
$files1[] = array_slice($files, 0, -2);

// array with filenames to be sent as attachment
//$files = array("database/ss/1.png","database/ss/2.png","database/ss/3.png");
 
// email fields: to, from, subject, and so on
$company = "Email sent from: info@comparisonwindowsanddoors.com";
$delivery = "info@comparisonwindowsanddoors.com";
$headersdelivery = "From: $delivery";
$from = $_POST["email"]; 
$subject = $_POST["email"]; 
$subjectdelivery = "Comparison Windows and Doors";
$message = $_POST["comments"];
$headers = "From: $from";
$countyy = $_POST["countysel"];

$name = $_POST["fname"]; 
$kounty = $_POST["fname"]; 
$address = $_POST["address"]; 
$comments = $_POST["comments"];

$countysel = $_POST["countysel"];
//echo $countysel;
// boundary 
$semi_rand = md5(time()); 
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
 
// headers for attachment 
$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
 
$headersdelivery .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 

// multipart boundary 
$message = ' Name: ' . $name . "\n";
$message .= "\n Email: " . $from . "\n";
$message .= "\n County: " . $countyy . "\n";
$message .= "\n Town: " . $address . "\n";
$message .= "\n Comments: " . $comments . "\n";
$message = "\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n"; 
$message .= "--{$mime_boundary}\n";
 
// preparing attachments
for($x=0;$x<count($files)-2;$x++){
	$file = fopen($files[$x],"rb");
	$data = fread($file,filesize($files[$x]));
	fclose($file);
	$data = chunk_split(base64_encode($data));
	$message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$files[$x]\"\n" . 
	"Content-Disposition: attachment;\n" . " filename=\"$files[$x]\"\n" . 
	"Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
	$message .= "--{$mime_boundary}\n";
}








 
/*
// send
  @mail($too, $subject, $message, $headers); 
$ok = @mail($to, $subject, $message, $headers); 
if ($ok) { 
	echo "<p>mail sent to $to!</p>"; 
} else { 
	echo "<p>mail could not be sent!</p>"; 
}
*/

$con=mysqli_connect("mysql9.mylogin.ie","comparisonw2","]c*_3W+r:T)}j?L","RG319531_cwdback");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$result = mysqli_query($con,"SELECT *FROM backend where county = '".$countysel."'");

/*echo "<table border='1' bgcolor='#999999' width='100%'>
<tr>
<th>Locations</th>
</tr>";*/

while($row = mysqli_fetch_array($result))
  {
        $happle= $row['email'];
      
	 $ok = @mail($happle, $subject, $message, $headers); 
    
    //echo '<script> alert("hihi") </script>';
    
if ($ok) { 
	//echo "<p>mail sent to $to!</p>"; 
} else { 
	//echo "<p>mail could not be sent!</p>"; 
}
 
 /* echo "<tr>";
  echo "<td><li>  ". $row['email']. "</li></td>";
  echo "</tr>";*/
 # $bc=$row['name'];
#echo "<input type='text' value='$bc'>";
  }

@mail($from, $subjectdelivery, $message, $headersdelivery);
//@mail($from, $subjectdelivery, $message, $headersdelivery); 
  //echo "</table>";
//echo"<a href='http://localhost:8090/doorproject/windowglass.php'> <input type='submit' value='Back' style='width: 200px; height: 50px; background-color:#3c722c; color:#fff;'> </a>";
mysqli_close($con);

?>





<html>
<head>
<title> Popup Box DIV </title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/styleback.css">    

</head>
<body style="background-image: url('images/websitebodyback.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;">
   
<div id="popup_box">    <!-- OUR PopupBox DIV-->
    <h1 id="explaintxt">Thank you for choosing Comparison Windows and Doors.com. <br>
       Quotations will be provided within 24 - 72 hours </h1>
	<!--<a id="popupBoxClose">Close</a>-->
    <a id="popupBoxClose" href="door.php">Close</a>
</div>
    
    
    
    
    
    
    
    
<style type="text/css">
/* popup_box DIV-Styles*/
#popup_box { 
    display:none; /* Hide the DIV */
    position:fixed;  
    _position:absolute; /* hack for internet explorer 6 */  
    height:250px;  
    width: 40%;  
    background:#ebebeb;  
    left: 30%;
    right: 30%;
    top: 150px;
    z-index:100; /* Layering ( on-top of others), if you have lots of layers: I just maximized, you can change it yourself */
    margin-left: 15px;  
    
    /* additional features, can be omitted */
    border:2px solid #000;      
    padding:15px;  
    font-size:20px;  
    -moz-box-shadow: 0 0 5px #4b4b4b;
    -webkit-box-shadow: 0 0 5px #4b4b4b;
    box-shadow: 0 0 5px #4b4b4b;
    text-align:center;
}
#explaintxt{
    margin-top:70px;
    color: #00b47d;
    font-family: Serif, Perpetua;
    font-size:21px;  
}
#container {
    background: #d2d2d2; /*Sample*/
    width:100%;
    height:100%;
}

a{  
cursor: pointer;  
text-decoration:none;  
} 

/* This is for the positioning of the Close Link */
#popupBoxClose {
    font-size:21px;  
    line-height:15px;  
    right:5px;  
    top:5px;  
    position:absolute;  
    color:#fff;  
    font-weight:bold;
    background-color:#00b47d;
    padding:10px 30px 10px 30px;
}
</style>   
    
    
    
    
    
    
    
<script src="http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js" type="text/javascript"></script>

<script type="text/javascript">
    
    $(document).ready( function() {
    
        // When site loaded, load the Popupbox First
        loadPopupBox();
    
        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
        
        $('#container').click( function() {
            unloadPopupBox();
        });

        function unloadPopupBox() {    // TO Unload the Popupbox
            $('#popup_box').fadeOut("slow");
            $("#container").css({ // this is just for style        
                "opacity": "1"  
            }); 
            $("#content").css({ // this is just for style        
                "opacity": "1"  
            });
        }    
        
        function loadPopupBox() {    // To Load the Popupbox
            $('#popup_box').fadeIn("Slow");
            $("#container").css({ // this is just for style
                "opacity": "0.3"  
            }); 
            $("#content").css({ // this is just for style        
                "opacity": "0.3"  
            });
        }        
    });
</script>  
    
<script>/*
$( document ).ready(function() {
  //window.location("http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page");
  setTimeout(function() {
    window.location = "door.php";
    //history.go(-1)
  }, 1000);
});    
*/
</script>
   
</body>
</html>