<?php
session_id();
session_start();

$_SESSION["favcolor"] =  session_id();
//$_SESSION["favanimal"] = $_POST['email'];
//echo "Session variables are set{$_SESSION["favcolor"]}";
//print_r($_SESSION);
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
   
<!--include stlesheet in the page-->
<link rel="stylesheet" type="text/css" href="css/style.css">
<!--enable Jquery inside the page-->
  
    

    
<link rel="stylesheet" type="text/css" href="css/style.css">
<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="js/html2canvas.js"></script>
<script type="text/javascript" src="js/jquery.plugin.html2canvas.js"></script>
    

</head>
<body>
 
    

    
        <!--<div>
    <header> <!-- header tag contains logo and navigational links -->
        <!--<div id="logo">
        <img id="logoimage" src="images/logo.png">
        </div>
        <!--navigation menu starts here-->
             <!--<ul>
                 <a href="index.html"> <li>Home</li> </a>
                <a href="door.html"> <li>Make Door</li> </a>
                 <li>Nav
                    <ul>
                      <a href=""> <li>Nav1</li> </a>
                     <a href="">  <li>Nav2</li> </a>
                     <a href="">  <li>Nav3</li> </a>
                    </ul>
                 </li>
               <a href="">  <li>Nav</li> </a>
                <a href="contact.html">  <li>Contact</li> </a>
             </ul> 
        <!--navigation menu ends here-->
    <!--</header>
    </div>-->
<!--header ends here-->
<button id="viewcart1" class="viewcart">View Order</button>
<div id="topmenu">
<p id="frametitle2" style="">CLICK ON THE BUTTON TO SELECT (PROCESS LEFT-->RIGHT)</p>
 
<button id="wframe" class="showbutton">&nbsp frame</button>
    <button class="arrowbtn">&nbsp </button>
<button id="wglass" class="showbutton" onclick="noglass()">&nbsp glass</button>
    <button class="arrowbtn">&nbsp </button>
<a href="#container2" ><button id="wfinalizebtn" class="showbutton">&nbsp Next</button></a>
</div>
    
    <script>
    function noglass(){
        alert ('no glass available yet, under construction');
    }
    </script>
<div id="container">

    
    
    
<div id="frameid">
    
    

    
 
  
    
<!-- window starts here-->
    <div id="doorbox4">
   
<p id="frametitle">CLICK ON THE WINDOW FRAME TO SELECT </p>
 
<table><tr><td>
<div id="wframef1" style="background-image: url('windowimages/w1.png'); background-size: 100% 100%;"></div>
<div id="wframef2" style="background-image: url('windowimages/w2.png'); background-size: 100% 100%;"></div>
<div id="wframef3" style="background-image: url('windowimages/w3.png'); background-size: 100% 100%;"></div> 
<div id="wframef4" style="background-image: url('windowimages/w4.png'); background-size: 100% 100%;"></div> 
<div id="wframef5" style="background-image: url('windowimages/w5.png'); background-size: 100% 100%;"></div>
<div id="wframef6" style="background-image: url('windowimages/w6.png'); background-size: 100% 100%;"></div>
<div id="wframef7" style="background-image: url('windowimages/w7.png'); background-size: 100% 100%;"></div>
<div id="wframef8" style="background-image: url('windowimages/w8.png'); background-size: 100% 100%;"></div>
<div id="wframef9" style="background-image: url('windowimages/w9.png'); background-size: 100% 100%;"></div>
<div id="wframef10" style="background-image: url('windowimages/w10.png'); background-size: 100% 100%;"></div>
<div id="wframef11" style="background-image: url('windowimages/w11.png'); background-size: 100% 100%;"></div>
<div id="wframef12" style="background-image: url('windowimages/w12.png'); background-size: 100% 100%;"></div>
<div id="wframef13" style="background-image: url('windowimages/w13.png'); background-size: 100% 100%;"></div>
<div id="wframef14" style="background-image: url('windowimages/w14.png'); background-size: 100% 100%;"></div>
<div id="wframef15" style="background-image: url('windowimages/w15.png'); background-size: 100% 100%;"></div>
<div id="wframef16" style="background-image: url('windowimages/w16.png'); background-size: 100% 100%;"></div>
<div id="wframef17" style="background-image: url('windowimages/w1.png'); background-size: 100% 100%;"></div>
<div id="wframef18" style="background-image: url('windowimages/w2.png'); background-size: 100% 100%;"></div>
<div id="wframef19" style="background-image: url('windowimages/w3.png'); background-size: 100% 100%;"></div> 
<div id="wframef20" style="background-image: url('windowimages/w4.png'); background-size: 100% 100%;"></div> 
<div id="wframef21" style="background-image: url('windowimages/w5.png'); background-size: 100% 100%;"></div>
<div id="wframef22" style="background-image: url('windowimages/w6.png'); background-size: 100% 100%;"></div>
<div id="wframef23" style="background-image: url('windowimages/w7.png'); background-size: 100% 100%;"></div>
<div id="wframef24" style="background-image: url('windowimages/w8.png'); background-size: 100% 100%;"></div>
<div id="wframef25" style="background-image: url('windowimages/w9.png'); background-size: 100% 100%;"></div>
<div id="wframef26" style="background-image: url('windowimages/w10.png'); background-size: 100% 100%;"></div>
<div id="wframef27" style="background-image: url('windowimages/w11.png'); background-size: 100% 100%;"></div>
<div id="wframef28" style="background-image: url('windowimages/w12.png'); background-size: 100% 100%;"></div>
<div id="wframef29" style="background-image: url('windowimages/w13.png'); background-size: 100% 100%;"></div>
<div id="wframef30" style="background-image: url('windowimages/w14.png'); background-size: 100% 100%;"></div>
<div id="wframef31" style="background-image: url('windowimages/w15.png'); background-size: 100% 100%;"></div>
</td></tr>    

    
<tr><td>    
<p id="frametitle">CHOOSE YOUR FRAME COLOR</p>
        <input type="submit" id="wsubmit1" class="colorbutton" value="Black" style="background-image: url('images/selectcolor/blackcolor.png')">
        <input type="submit" id="wsubmit2" class="colorbutton" value="Brown" style="background-image: url('images/selectcolor/oakcolor.png')">
        <input type="submit" id="wsubmit3" class="colorbutton" value="White" style="background-image: url('images/selectcolor/whitecolor.png')">
    
   </td></tr>  </table> </div>
<!--window ends here-->

</div>

  <div id="framehidden">
      </div>
 <!-- Green Div to show door -->
    
    <div id="displaydoor">           

  <div id="doorbox5">
      
    <div id="windowframe3">

</div>
      </div>
     
    </div>
</div>
    

 <!--Convert to image-->  
  

  <script>
        
        function capture() {
    $('#container2').html2canvas({
        onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
            $('#img_val').val(canvas.toDataURL("image/png"));
            $("#img_val").attr('border', '5px solid #000');
            //Submit the form manually
            document.getElementById("myForm").submit();
           
            
            
            
        }
        
    });
}
      
      function capture1() {
    $('#container2').html2canvas({
        onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
            $('#img_val').val(canvas.toDataURL("image/png"));
            $("#img_val").attr('border', '5px solid #000');
            //Submit the form manually
            document.getElementById("myForm").submit();
           
            
            
        }
        
    });
}
     
     /* function capture() {
    $('#container2 #outerframe').html2canvas({
        onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
            $('#img_val').val(canvas.toDataURL("image/png"));
            //Submit the form manually
            document.getElementById("myForm").submit();
        }
    });
}*/
     /* function capture1() {
    $('#frame3').html2canvas({
        onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
            $('canvas #frame3').css({'border':'5px solid #000'});
             $('#img_val').val('#frame3');
            //Submit the form manually
            document.getElementById("myForm").submit();
           
            
        }
        
    });
}*/
        </script>
    
     <!--Convert to image-->  

   
    <div id="container2">
        
        <div id="container2-2" style="float:right; display: inline-block;">
           
            <table>
            <tr>
            <td><label id="labeltext" >Height (CM)</label></td>
            <td><input id="textboxtext" type="text"></td>
            </tr>
            
            <tr>
            <td><label id="labeltext" >Width (CM)</label></td>
            <td><input id="textboxtext" type="text"></td>
            </tr>
            
            <tr>
            <td><label id="labeltext" >Number of Doors (CM)</label></td>
            <td><input id="textboxtext" type="text"></td>
            </tr>
            
            <tr>
            <td><label id="labeltext" >Select</label></td>
            <td><select id="textboxtext" style="width:150px;">
  <option value="volvo">UPVC</option>
  <option value="saab">Hardwood</option>
  <option value="mercedes">Aluclad</option>
</select></td>
            </tr>
            
            </table>
            <hr>
            
        <form method="POST" enctype="multipart/form-data" action="ssw.php" id="myForm">
           <!-- <table>
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
                
            </table>-->
            
                <form method="POST" enctype="multipart/form-data" action="ssw.php" id="myForm">
                    <input type="hidden" name="img_val" id="img_val" value="yjyghjh" />
                </form>  
            
            <input id="formsubmit" type="submit" name="submit4" class="showbutton" value="Finalize" onclick="capture();">
            <a href="#container2" ><input type="button" id="weditdoorbtn" class="showbutton" value="Edit"> </a>
            
        </form>
             
        </div>
    
        
    <div id="outerframe">
        <div id="frame3outer"></div>
        
    </div>
            
    </div>
 
<div id="container3" style="display:none">
    <button id="gobackdoor">&nbsp BACK &nbsp</button>
     <?php
        $folder = 'database/'.session_id().'/';
$filetype = '*.*';
$files = glob($folder.$filetype);
$count = count($files);
echo '<div>';
echo '<table><tr>';
for ($i = 0; $i < $count; $i++) {
    echo '<td>';
    
    echo '<a name="'.$i.'" href="#'.$i.'"><img src="'.$files[$i].'" style="width: 200px; height: 150px;" onclick="myFunction()" id="showimg"/></a>';
    //echo substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder)); 
    echo '<br>';
    $fff = substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder));
    
    echo '<form method="POST" enctype="multipart/form-data" action="deleteimg.php" id="myForm">';
    echo '<input type="submit" value="'.$fff.'" name="imgbtn">';
    echo '</form>';
    echo '</td>';
}
echo '</tr></table>';
echo '</div>';


?>
</div>

<div id="footer">Developed By: Webbiz.ie | All Rights Reserved</div>    

<script src="jswindow/wframeshowhide.js"></script>
</body>
</html>
</html>


<!------------------------------------------------
--------------------------------------------
----------------------
---------------->
<div id="wframecontainer">
<div id="window1" >
 <table id="window1table">
    <tr>
    <td id="window1td" class="windowglassbk">French Door<img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left; "/></td>    
    </tr>
    </table>
</div> 


<div id="window2" >
 <table id="window2table">
    <tr>
    <td id="window2td" class="windowglassbk">French Door<img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right; "/></table></td>    
    </tr>
    </table>
</div> 


<div id="window3" >
    <table style="width:200px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
    <td id="window3td" class="windowglassbk">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td></tr>   
    </table>
</div>

<div id="window4" >
    <table style="width:200px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898;">
        French Door<img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right; "/>
        <table style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td></tr>   
    </table>
</div>

    
    <table style="width:400px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6;">
        </td>
    
        <td class="windowglassbk" style="border: 15px solid #e6e6e6;">
        </td>
    </tr>   
    </table>


<div id="window5" >
    <table style="width:200px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
         <td id="window3td" class="windowglassbk">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td></tr>   
    </table>
</div>

    
<div id="window6" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:55%;">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
    
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:45%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window7" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:45%;">
        </td>
        
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:55%;">French Door
            <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right; "/>
        </td>
    </tr>   
    </table>
</div>


<div id="window8" >
    <table style="width:350px; height:300px; border: 10px solid #d1d1d1; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:33%;">
        </td>
        
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:33%;">French Door
            <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:33%;">
        </td>
    </tr>   
    </table>
</div>
    
<div id="window9" >
    <table style="width:350px; height:300px; border: 10px solid #d1d1d1; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:33%;">
        </td>
        
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:33%;">French Door
            <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right; "/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; background-color:#bdeaea; border-right-color:#989898; width:33%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window10" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; width:50%;">French Door
        <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        <table style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; width:50%;">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        <table style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td></tr>   
    </table>
</div>


<div id="window11" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; width:50%;">French Door
        <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; width:50%;">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td></tr>   
    </table>
</div>


<div id="window12" >
    <table style="width:350px; height:300px; border: 10px solid #d1d1d1; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">
        </td>
        
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">French Door
            <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right; "/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">French Door
            <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window13" >
    <table style="width:350px; height:300px; border: 10px solid #d1d1d1; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">
        </td>
        
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">French Door
            <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">French Door
            <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window14" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">
        </td>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:35%;">
        <div id="divintable14">French Door<img src="windowimages/wpanel1.png" style="width:20px; height:50px; margin-top:110%; float:right;"/></div>
        </td>
        
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:35%;">
        <div id="divintable14">French Door<img src="windowimages/wpanel.png" style="width:20px; height:50px; margin-top:110%; float:left;"/></div>
            
        </td>
    </tr>   
    </table>
</div>



<div id="window15" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:35%;">
        <div id="divintable15">French Door<img src="windowimages/wpanel1.png" style="width:20px; height:50px; margin-top:110%; float:right;"/></div>
        </td>
        
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:35%;">
        <div id="divintable15">French Door<img src="windowimages/wpanel.png" style="width:20px; height:50px; margin-top:110%; float:left;s"/></div>   
        </td>
         <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%; float:left;">
        </td>
    </tr>   
    </table>
</div>


<div id="window16" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:30%;">
        <div id="divintable16">French Door<img src="windowimages/wpanel1.png" style="width:20px; height:50px; margin-top:180%; float:right;"/></div>
        </td>
        
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:30%;">
            <div id="divintable16">French Door<img src="windowimages/wpanel.png" style="width:20px; height:50px; margin-top:180%; float:left;"/></div>   
        </td>
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window17" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">French Door
       <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
        
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window18" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">French Door
       <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:left;"/>
        </td>
        
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    </tr>   
    </table>
</div>

<div id="window19" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
            <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; margin-top:50px; width:100%;"></table>
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">French Door
       <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:left;"/>
        </td>
        
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
             <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; margin-top:50px; width:100%;"></table>
        </td>
    </tr>   
    </table>
</div>

<div id="window20" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
            <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; margin-top:50px; width:100%;"></table>
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">French Door
       <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
        
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
             <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; margin-top:50px; width:100%;"></table>
        </td>
    </tr>   
    </table>
</div>


<div id="window21" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:60%;">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
    
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:40%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window22" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:60%;">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:right;"/>
        </td>
    
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:40%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window23" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:40%;">
        </td>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:60%;">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:right;"/>
        </td>
    </tr>   
    </table>
</div>


<div id="window24" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:40%;">
        </td>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:60%;">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
    </tr>   
    </table>
</div>


<div id="window25" >
    <table style="width:350px; height:300px; border: 10px solid #d1d1d1; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">
        </td>
        
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">Patio Door
            <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">Patio Door
            <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window26" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
            <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; margin-top:50px; width:100%;"></table>
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">French Door
       <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
        
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
             <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; margin-top:50px; width:100%;"></table>
        </td>
    </tr>   
    </table>
</div>


<div id="window27" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:60%;">Patio Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
    
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:40%;">
        </td>
    </tr>   
    </table>
</div>





<div id="window28" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:40%;">
        </td>
        <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:60%;">Patio Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:right;"/>
        </td>
    </tr>   
    </table>
</div>


<div id="window29" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">Patio Door
       <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
        
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    </tr>   
    </table>
</div>


<div id="window30" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; width:30%;">Patio Door
       <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:left;"/>
        </td>
        
         <td class="windowglassbk" style="border: 5px solid #e6e6e6; border-right-color:#989898; width:20%;">
        </td>
    </tr>   
    </table>
</div>

<div id="window31" >
    <table style="width:350px; height:300px; border: 10px solid #d1d1d1; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">Patio Door
            <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
        
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">Patio Door
            <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">Patio Door
            <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
        <td class="windowglassbk" style="border: 10px solid #e6e6e6; border-right-color:#989898; width:25%;">Patio Door
            <img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right;"/>
        </td>
    </tr>   
    </table>
</div>

</div>