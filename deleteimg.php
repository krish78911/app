<?php
session_id();
session_start();
$imgname = $_POST['imgbtn'];
//echo $imgname;
$oo = session_id();
$filename = 'database/'.$oo.'/'.$imgname.'.png';
unlink($filename);
header("Refresh:0; url=door.php");
/*if (file_exists($filename)) {
    echo "The file $filename exists";
} else {
    echo "The file $filename does not exist";
}*/
?>



<html>
<head>
<title> Popup Box DIV </title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/styleback.css">    

</head>
<body>
   
<div id="popup_box">    <!-- OUR PopupBox DIV-->
    <h1 id="explaintxt">Image Deleted</h1>
    <a id="popupBoxClose" href="door.php">Close</a>
</div>
    
    
    
    
    
    
    
    
<style type="text/css">
/* popup_box DIV-Styles*/
#popup_box { 
    display:none; /* Hide the DIV */
    position:fixed;  
    _position:absolute; /* hack for internet explorer 6 */  
    height:200px;  
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
    font-size:50px;  
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
    font-size:25px;  
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
    
<script>
$( document ).ready(function() {
  //window.location("http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page");
  setTimeout(function() {
    window.location = "door.php";
    //history.go(-1)
  }, 1000);
});    
</script>
   
</body>
</html>