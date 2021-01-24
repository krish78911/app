<?php
session_id();
session_start();

$_SESSION["favcolor"] =  session_id();

?>
<!DOCTYPE html>
<!--
Template Developed by: 
Name: Webbiz.ie
Email: info@webbiz.ie
-->
<html>
<head>
<!--title of the page-->
<title>Windows</title>
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />  
    
<!--include stlesheet in the page-->
<link rel="stylesheet" type="text/css" href="css/style.css">
<!--enable Jquery inside the page-->

<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="js/html2canvas.js"></script>
<script type="text/javascript" src="js/jquery.plugin.html2canvas.js"></script>
    

</head>
<body>
 
    
<div id="page" style="display:none">
    
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
<table id="table1" style="width:100%"><tr><td><a href="http://comparisonwindowsanddoors.com/"><img src="images/logo.png" id="logo"> </a> </td>
    <td><div style="float:right"><!--<a href="http://comparisonwindowsanddoors.com/" id="topmenunav1"> Home </a>  --><button class="arrowbtn">&nbsp </button>
        <!--
        <a href="http://comparisonwindowsanddoors.com/?page_id=1258" id="topmenunav2"> Get Quote </a>  <button class="arrowbtn">&nbsp </button>
        <a href="http://comparisonwindowsanddoors.com/?page_id=271" id="topmenunav3"> How its Made </a>  <button class="arrowbtn">&nbsp </button>
        <a href="http://comparisonwindowsanddoors.com/?page_id=406" id="topmenunav4"> FAQ </a>  <button class="arrowbtn">&nbsp </button>
        <a href="http://comparisonwindowsanddoors.com/?page_id=643" id="topmenunav5"> Contact Us </a> <button class="arrowbtn">&nbsp </button>
        <a><img src="images/logo2nav.jpg" id="logo2"></a> <button class="arrowbtn">&nbsp </button>
-->
        </div>
    </td></tr></table>
    
    
        
<div id="topmenu">
<p id="frametitle2" style="">Choose your dream Window</p>
    
<button id="wframe" class="showbutton">1. Frame Design</button>
    <button class="arrowbtn">&nbsp </button>
<a href="#container2" ><button id="wfinalizebtn" class="showbutton">2. View Window</button></a>
</div>
    
    <script>
    function noglass(){
        alert ('no glass available yet, under construction');
    }
    </script>
    
    <hr id="horizontalline">
<div id="container">

 
<div id="frameid">
    
<!-- window starts here-->
    <div id="doorbox4">
 
<table>

<tr><td>    
<p id="frametitle">CHOOSE YOUR FRAME COLOR</p>
    <table><tr><td>
        <button type="submit" id="wsubmit1" class="colorbutton" value="Black" style="background-image: url('images/selectcolor/blackcolor.png')"></button></td>
        <td>
        <button type="submit" id="wsubmit2" class="colorbutton" value="Brown" style="background-image: url('images/selectcolor/redcolor.png')"></button></td>
        <td>
        <button type="submit" id="wsubmit3" class="colorbutton" value="White" style="background-image: url('images/selectcolor/whitecolor.png')"></button></td>
        <td>
    <button type="submit" id="wsubmit4" class="colorbutton" value="Oak" style="background-image: 
url('images/selectcolor/oakcolor.png')"></button></td>
        <td>
    <button type="submit" id="wsubmit5" class="colorbutton" value="Blue" style="background-image: 
url('images/selectcolor/bluecolor.png')"></button></td>
        <td>
    <button type="submit" id="wsubmit6" class="colorbutton" value="Green" style="background-image: 
url('images/selectcolor/greencolor.png')"></button></td>
        <td>
    <button type="submit" id="wsubmit7" class="colorbutton" value="Burgundy" style="background-image: 
url('images/selectcolor/burgundycolor.png')"></button></td>
        <td>
    <button type="submit" id="wsubmit8" class="colorbutton" value="Rosewood" style="background-image: 
url('images/selectcolor/rosewoodcolor.png')"></button></td>
        <td>
    <button type="submit" id="wsubmit9" class="colorbutton" value="Cream" style="background-image: 
url('images/selectcolor/creamcolor.png')"></button></td></tr>
    
    <tr><td id="colortxt">Black</td> <td id="colortxt">Red</td> <td id="colortxt">White</td> <td id="colortxt">Oak</td> <td id="colortxt">Blue</td> <td id="colortxt">Green</td> <td id="colortxt">Burgundy</td> <td id="colortxt">Rosewood</td> <td id="colortxt">Cream</td> </tr>
        </table>
    
   </td></tr> 
    
<tr><td>    
<p id="frametitle">CHOOSE YOUR FRAME COLOR</p>
    <table><tr>
        <td>
        <button type="submit" id="wsubmit10" class="colorbutton" value="Black" style="background-image: url('images/selectcolor/black_white.png')"></button></td>
        <td>
        <button type="submit" id="wsubmit11" class="colorbutton" value="Oak" style="background-image: 
url('images/selectcolor/oak_white.png')"></button></td>
        <td>
        <button type="submit" id="wsubmit12" class="colorbutton" value="White" style="background-image: url('images/selectcolor/rosewood_white.png')"></button></td>
        </tr>
    
    <tr><td id="colortxt">Black/White</td> <td id="colortxt">Oak/White</td> <td id="colortxt">Rosewood/White</td></tr>
        </table>
    
   </td></tr>
    
<tr><td>
<p id="frametitle">STANDARD WINDOW</p>
<!--Window Number 1--><div id="wgframef1" style="background-image: url('windowglassimages/wgframe1.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 2--><div id="wgframef5" style="background-image: url('windowglassimages/wgframe5.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 3--><div id="wgframef13" style="background-image: url('windowglassimages/wgframe13.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 4--><div id="wgframef14" style="background-image: url('windowglassimages/wgframe14.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 5--><div id="wgframef15" style="background-image: url('windowglassimages/wgframe15.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 6--><div id="wgframef16" style="background-image: url('windowglassimages/wgframe16.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 7--><div id="wgframef17" style="background-image: url('windowglassimages/wgframe17.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 8--><div id="wgframef18" style="background-image: url('windowglassimages/wgframe18.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 9--><div id="wgframef19" style="background-image: url('windowglassimages/wgframe19.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 10--><div id="wgframef20" style="background-image: url('windowglassimages/wgframe20.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 11--><div id="wgframef21" style="background-image: url('windowglassimages/wgframe21.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 12--><div id="wgframef222" style="background-image: url('windowglassimages/wgframe222.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 13--><div id="wgframef232" style="background-image: url('windowglassimages/wgframe232.jpg'); background-size: 100% 100%;"></div>  
<!--Window Number 14--><div id="wgframef12e" style="background-image: url('windowglassimages/wgframe12.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 15--><div id="wgframef6e" style="background-image: url('windowglassimages/wgframe6.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 16--><div id="wgframef7e" style="background-image: url('windowglassimages/wgframe7.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 17--><div id="wgframef10e" style="background-image: url('windowglassimages/wgframe10.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 18--><div id="wgframef11e" style="background-image: url('windowglassimages/wgframe11.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 19--><div id="wgframef2extra" style="background-image: url('windowglassimages/wgframe2extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 20--><div id="wgframef3extra" style="background-image: url('windowglassimages/wgframe3extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 21--><div id="wgframef4extra" style="background-image: url('windowglassimages/wgframe4extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 22--><div id="wgframef5extra" style="background-image: url('windowglassimages/wgframe5extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 23--><div id="wgframef6extra" style="background-image: url('windowglassimages/wgframe6extra.jpg'); background-size: 100% 100%;"></div>
    
<!--Window Number 24--><div id="wgframef7extra" style="background-image: url('windowglassimages/wgframe7extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 25--><div id="wgframef8extra" style="background-image: url('windowglassimages/wgframe8extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 26--><div id="wgframef9extra" style="background-image: url('windowglassimages/wgframe9extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 27--><div id="wgframef10extra" style="background-image: url('windowglassimages/wgframe10extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 28--><div id="wgframef11extra" style="background-image: url('windowglassimages/wgframe11extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 29--><div id="wgframef12extra" style="background-image: url('windowglassimages/wgframe12extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 30--><div id="wgframef13extra" style="background-image: url('windowglassimages/wgframe13extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 31--><div id="wgframef14extra" style="background-image: url('windowglassimages/wgframe14extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 32--><div id="wgframef15extra" style="background-image: url('windowglassimages/wgframe15extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 33--><div id="wgframef16extra" style="background-image: url('windowglassimages/wgframe16extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 34--><div id="wgframef17extra" style="background-image: url('windowglassimages/wgframe17extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 35--><div id="wgframef18extra" style="background-image: url('windowglassimages/wgframe18extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 36--><div id="wgframef19extra" style="background-image: url('windowglassimages/wgframe19extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 37--><div id="wgframef20extra" style="background-image: url('windowglassimages/wgframe20extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 38--><div id="wgframef21extra" style="background-image: url('windowglassimages/wgframe21extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 39--><div id="wgframef22extra" style="background-image: url('windowglassimages/wgframe22extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 40--><div id="wgframef23extra" style="background-image: url('windowglassimages/wgframe23extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 41--><div id="wgframef24extra" style="background-image: url('windowglassimages/wgframe24extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 42--><div id="wgframef25extra" style="background-image: url('windowglassimages/wgframe25extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 43--><div id="wgframef26extra" style="background-image: url('windowglassimages/wgframe26extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 44--><div id="wgframef27extra" style="background-image: url('windowglassimages/wgframe27extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 45--><div id="wgframef28extra" style="background-image: url('windowglassimages/wgframe28extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 46--><div id="wgframef29extra" style="background-image: url('windowglassimages/wgframe29extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 47--><div id="wgframef30extra" style="background-image: url('windowglassimages/wgframe30extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 48--><div id="wgframef31extra" style="background-image: url('windowglassimages/wgframe31extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 49--><div id="wgframef32extra" style="background-image: url('windowglassimages/wgframe32extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 50--><div id="wgframef33extra" style="background-image: url('windowglassimages/wgframe33extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 51--><div id="wgframef34extra" style="background-image: url('windowglassimages/wgframe34extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 52--><div id="wgframef35extra" style="background-image: url('windowglassimages/wgframe35extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 53--><div id="wgframef36extra" style="background-image: url('windowglassimages/wgframe36extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 54--><div id="wgframef37extra" style="background-image: url('windowglassimages/wgframe37extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 55--><div id="wgframef38extra" style="background-image: url('windowglassimages/wgframe38extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 56--><div id="wgframef39extra" style="background-image: url('windowglassimages/wgframe39extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 57--><div id="wgframef40extra" style="background-image: url('windowglassimages/wgframe40extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 58--><div id="wgframef41extra" style="background-image: url('windowglassimages/wgframe41extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 59--><div id="wgframef42extra" style="background-image: url('windowglassimages/wgframe42extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 60--><div id="wgframef43extra" style="background-image: url('windowglassimages/wgframe43extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 61--><div id="wgframef44extra" style="background-image: url('windowglassimages/wgframe44extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 62--><div id="wgframef45extra" style="background-image: url('windowglassimages/wgframe45extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 63--><div id="wgframef46extra" style="background-image: url('windowglassimages/wgframe46extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 64--><div id="wgframef47extra" style="background-image: url('windowglassimages/wgframe47extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 65--><div id="wgframef48extra" style="background-image: url('windowglassimages/wgframe48extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 66--><div id="wgframef49extra" style="background-image: url('windowglassimages/wgframe49extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 67--><div id="wgframef50extra" style="background-image: url('windowglassimages/wgframe50extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 68--><div id="wgframef51extra" style="background-image: url('windowglassimages/wgframe51extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 69--><div id="wgframef52extra" style="background-image: url('windowglassimages/wgframe52extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 70--><div id="wgframef53extra" style="background-image: url('windowglassimages/wgframe53extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 71--><div id="wgframef54extra" style="background-image: url('windowglassimages/wgframe54extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 72--><div id="wgframef55extra" style="background-image: url('windowglassimages/wgframe55extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 73--><div id="wgframef56extra" style="background-image: url('windowglassimages/wgframe56extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 74--><div id="wgframef57extra" style="background-image: url('windowglassimages/wgframe57extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 75--><div id="wgframef58extra" style="background-image: url('windowglassimages/wgframe58extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 76--><div id="wgframef59extra" style="background-image: url('windowglassimages/wgframe59extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 77--><div id="wgframef60extra" style="background-image: url('windowglassimages/wgframe60extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 78--><div id="wgframef61extra" style="background-image: url('windowglassimages/wgframe61extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 79--><div id="wgframef62extra" style="background-image: url('windowglassimages/wgframe62extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 80--><div id="wgframef63extra" style="background-image: url('windowglassimages/wgframe63extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 81--><div id="wgframef64extra" style="background-image: url('windowglassimages/wgframe64extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 82--><div id="wgframef65extra" style="background-image: url('windowglassimages/wgframe65extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 83--><div id="wgframef66extra" style="background-image: url('windowglassimages/wgframe66extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 84--><div id="wgframef67extra" style="background-image: url('windowglassimages/wgframe67extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 85--><div id="wgframef68extra" style="background-image: url('windowglassimages/wgframe68extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 86--><div id="wgframef69extra" style="background-image: url('windowglassimages/wgframe69extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 87--><div id="wgframef70extra" style="background-image: url('windowglassimages/wgframe70extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 88--><div id="wgframef71extra" style="background-image: url('windowglassimages/wgframe71extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 89--><div id="wgframef72extra" style="background-image: url('windowglassimages/wgframe72extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 90--><div id="wgframef73extra" style="background-image: url('windowglassimages/wgframe73extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 91--><div id="wgframef74extra" style="background-image: url('windowglassimages/wgframe74extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 92--><div id="wgframef75extra" style="background-image: url('windowglassimages/wgframe75extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 93--><div id="wgframef76extra" style="background-image: url('windowglassimages/wgframe76extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 94--><div id="wgframef77extra" style="background-image: url('windowglassimages/wgframe77extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 95--><div id="wgframef78extra" style="background-image: url('windowglassimages/wgframe78extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 96--><div id="wgframef79extra" style="background-image: url('windowglassimages/wgframe79extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 97--><div id="wgframef80extra" style="background-image: url('windowglassimages/wgframe80extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 98--><div id="wgframef81extra" style="background-image: url('windowglassimages/wgframe81extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 99--><div id="wgframef82extra" style="background-image: url('windowglassimages/wgframe82extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 100--><div id="wgframef83extra" style="background-image: url('windowglassimages/wgframe83extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 101--><div id="wgframef84extra" style="background-image: url('windowglassimages/wgframe84extra.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 102--><div id="wgframef85extra" style="background-image: url('windowglassimages/wgframe85extra.jpg'); background-size: 100% 100%;"></div>

</td></tr>    

<tr><td>
<p id="frametitle">TILT & TURN WINDOW</p>  
<!--Window Number 1--><div id="wgframef2" style="background-image: url('windowglassimages/wgframe2.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 2--><div id="wgframef22" style="background-image: url('windowglassimages/wgframe22.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 3--><div id="wgframef3" style="background-image: url('windowglassimages/wgframe3.jpg'); background-size: 100% 100%;"></div> 
<!--Window Number 4--><div id="wgframef33" style="background-image: url('windowglassimages/wgframe33.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 5--><div id="wgframef4" style="background-image: url('windowglassimages/wgframe4.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 6--><div id="wgframef44" style="background-image: url('windowglassimages/wgframe44.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 7--><div id="wgframef6" style="background-image: url('windowglassimages/wgframe6.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 8--><div id="wgframef66" style="background-image: url('windowglassimages/wgframe66.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 9--><div id="wgframef7" style="background-image: url('windowglassimages/wgframe7.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 10--><div id="wgframef8" style="background-image: url('windowglassimages/wgframe8.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 11--><div id="wgframef88" style="background-image: url('windowglassimages/wgframe88.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 12--><div id="wgframef9" style="background-image: url('windowglassimages/wgframe9.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 13--><div id="wgframef10" style="background-image: url('windowglassimages/wgframe10.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 14--><div id="wgframef11" style="background-image: url('windowglassimages/wgframe11.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 15--><div id="wgframef12" style="background-image: url('windowglassimages/wgframe12.jpg'); background-size: 100% 100%;"></div>
</td></tr>
    
<tr><td>
<p id="frametitle">SASH WINDOW</p>  
<!--Window Number 1--><div id="wgsashframef2" style="background-image: url('windowglassimages/wgsashframe2.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 2--><div id="wgsashframef3" style="background-image: url('windowglassimages/wgsashframe3.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 3--><div id="wgsashframef4" style="background-image: url('windowglassimages/wgsashframe4.jpg'); background-size: 100% 100%;"></div>
</td></tr> 
    
<tr><td>
<p id="frametitle">BAY WINDOW</p>  
<!--Window Number 1--><div id="baywindowframef1" style="background-image: url('windowglassimages/baywindow1.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 2--><div id="baywindowframef2" style="background-image: url('windowglassimages/baywindow2.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 3--><div id="baywindowframef3" style="background-image: url('windowglassimages/baywindow3.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 4--><div id="baywindowframef5" style="background-image: url('windowglassimages/baywindow5.jpg'); background-size: 100% 100%;"></div>
<!--Window Number 5--><div id="baywindowframef6" style="background-image: url('windowglassimages/baywindow6.jpg'); background-size: 100% 100%;"></div>
</td></tr> 
    
<tr><td> <br>
        <a href="#container2" ><button id="wfinalizebtnbelow" class="showbutton" >View Window</button></a>
</td></tr>
    
</table> </div>
<!--window ends here-->

</div>
    
<div class="overlayOuter1" id="overlayOuter12"> 
    <input type="button" onclick="funcoo()" style="margin-top:100px; margin-right:-380px; background-color:#ff7400; font-size:20px; font-weight:bold;" value="X">
    <div class="overlayInner1" id="overlayInner12">
      <!-- external content to be loaded here -->
    </div>
  </div>
<style>
.overlayOuter1{
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


.overlayInner1{
    position:relative;
    margin:-20px auto;
    z-index:100001;
    background-size: 100% 100%;
    background-repeat:no-repeat;
 }    
</style>
    
<script>
    function funcoo(){
    //alert("");
document.getElementById("overlayOuter12").style.display = "none";
       // document.document.getElementsByClassName("overlayInner").style.display = none;
        //alert(cvb);
    }
</script>
    
<script>
    function funcoodisp(){
    //alert("");
document.getElementById("overlayOuter123").style.display = "none";
       // document.document.getElementsByClassName("overlayInner").style.display = none;
        //alert(cvb);
    }
</script>

  <div id="framehidden">
      </div>
 <!-- Green Div to show door -->
    
    <div id="displaydoor">           
  <p id="outsideviewtextexpwg">This is Inside View</p>
  <!--<p id="outsideviewtext1"></p>-->
  <p id="outsideviewtext2expwg">colour for quotation purposes only</p>
  <div id="doorbox5">
      
    <div id="windowframe3">

</div>
      </div>
     
    </div>
</div>
    

 <!--Convert to image-->  
    
 <!--Convert to image-->  

   
    <div id="container2">
        
        <div id="container2-2" style="float:right; display: inline-block; background-color:#e7f4e9;">
           
            <table style="padding:0px 0px 0px 25px;">
            <tr>
            <td><label id="labeltext" >Height </label></td>
            <td><input id="textboxtext" class="textboxtext1" type="text"></td>
            <td>    <select style="height:30px; margin-top: 10px; float:right;" class="textboxtext4" required>
  <option value="">Select</option>
  <option value="volvo">CM</option>
  <option value="saab">MM</option>
  <option value="saab">INCHES</option>
</select></td>
            </tr>
            
            <tr>
            <td><label id="labeltext" >Width </label></td>
            <td><input id="textboxtext" class="textboxtext2" type="text"></td>
            <td>  <select style="height:30px; margin-top: 10px; float:right;" class="textboxtext5" required>
  <option value="">Select</option>
  <option value="volvo">CM</option>
  <option value="saab">MM</option>
  <option value="saab">INCHES</option>
</select></td>
            </tr>
            
            <tr>
            <td colspan="2"><label id="labeltext" >Number of Windows</label></td>
            <td><input id="textboxtext" class="textboxtext3" type="text"></td>
            </tr>
            
            <tr>
            <td><label id="labeltext" >Glass</label></td>
            <td colspan="2"><select id="textboxtext" class="textboxtext6" style="width:210px;" required>
  <option value="">Select</option>
  <option value="mercedes">Clear Double glaze</option>
  <option value="mercedes">Clear Triple glaze</option>
  <option value="volvo">Obscure Double glaze</option>
  <option value="saab">Obscure Triple glaze</option>
  <option value="saab">Georgian Bar</option>
  <option value="volvo">Georgian Double glaze</option>
  <option value="saab">Georgian Triple glaze</option>
</select></td>
            </tr>
                
           <!-- <tr>
            <td><label id="labeltext" >Select</label></td>
            <td><select id="textboxtext" style="width:200px;">
  <option value="volvo">Tilt & Turn</option>
  <option value="saab">Standard hinge</option>
</select></td>
            </tr> -->
            
           <tr>
            <td><label id="labeltext" >Frame</label></td>
            <td colspan="2"><select id="textboxtext" class="textboxtext7" style="width:210px;" required>
  <option value="">Select</option>
  <option value="volvo">UPVC</option>
  <option value="saab">Hardwood</option>
  <option value="mercedes">Aluclad</option>
    <option value="mercedes">T.B aluminium </option>
</select></td>
            </tr>
                
            <tr>
            <td><label id="labeltext" >Select</label></td>
            <td colspan="2"><select id="textboxtext" class="textboxtext8" style="width:210px;" required>
  <option value="">Select</option>
  <option value="saab">Supply and fit</option>
  <option value="volvo">Supply only </option>
</select></td>
            </tr>
                
              <tr><td colspan="3"><label id="labeltext" >Comments</label></td></tr>  
              <tr><td colspan="3"><textarea id="textareartxt" maxlength="100" placeholder="write upto 100 characters"></textarea></td></tr> 
            </table>
            <hr>
            
       <!-- <form method="POST" enctype="multipart/form-data" action="sswg.php" id="myForm">-->
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
            
                <form method="POST" enctype="multipart/form-data" action="sswg.php" id="myForm">
                    <input type="hidden" name="img_val" id="img_val" value="yjyghjh" />
                </form>  
            
            <input id="formsubmit" type="submit" name="submit4" class="showbutton" value="Finalize" onclick="capture();">
            <a href="#container2" ><input type="button" id="weditdoorbtn" class="showbutton" value="Edit"> </a>
            
       <!-- </form>-->
         <hr>
       <p id="frontdoortextfinal">Once finalized you will be unable to edit. Press edit to edit or press finalize to finalize your door.</p>    
        </div>
    
        
    <div id="outerframe">
        <p id="outsideviewtext" style="background-color:#fff">This is Inside View</p>
        <p id="outsideviewtext11" style="background-color:#fff"></p>
        <p id="outsideviewtext2" style="background-color:#fff">colour for quotation purposes only</p>
        <div id="frame3outer"></div>
        
    </div>
            
    </div>
 
 <hr>
    
    
<div id="container3" style="background-color: #fff; opacity: 0.7;">
    <button id="gobackdoor" style="display:none">&nbsp BACK &nbsp</button>
     <?php
        $folder = 'database/'.session_id().'/';
$filetype = '*.*';
$files = glob($folder.$filetype);
$count = count($files);
echo '<div style="overflow-x: scroll;">';
echo '<table><tr>';
for ($i = 0; $i < $count; $i++) {
    echo '<td>';
    
    echo '<a name="'.$i.'" href="#'.$i.'"><img src="'.$files[$i].'" style="width: 200px; height: 150px;" onclick="myFunction()" id="showimg"/></a>';
    //echo substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder)); 
    echo '<br>';
    $fff = substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder));
    
    echo '<form method="POST" enctype="multipart/form-data" action="deleteimgsswg.php" id="myForm">';
    echo '<input type="submit" value="'.$fff.'" class="deletebutton" name="imgbtn" style="color: rgba(255, 255, 255, 0)">';
    echo '</form>';
    echo '</td>';
}
echo '</tr></table>';
echo '</div>';


?>
</div>  

<script src="js/disableright.js"></script>
<script src="jswindowglass/wgframeshowhide.js"></script>
<script src="jswindowglass/capturephoto.js"></script>
<script>   
$(document).ready(function(){ 
    $('#page').fadeIn(1000);
});    
</script> 
    
<!--<div id="topcart">
    <hr>
    <br><br>
<table id="table2"><tr><td>
<form method="POST" enctype="multipart/form-data" action="checkout.php">
                    <input type="submit" id="checkout1" value="CheckOut" />
</form> 
</td><td>
<button id="viewcart1" class="viewcart">View Order</button>
</td><td>
<a href="http://localhost:8090/doorproject/door.php"> <button id="viewcart1">Front Door</button> </a>
</td><td>
<a href="http://localhost:8090/doorproject/window.php"> <button id="viewcart1">Back Door</button> </a>
</td></tr></table> 
    <br><br><br><br>
    <hr>
</div>-->
    <div id="topcart">
  
<table id="table2"><tr><td>
<!--<form method="POST" enctype="multipart/form-data" action="checkout.php">
                    <button type="submit" id="checkout1" style="background-image: url('images/checkoutbtn.png')"/></button>
</form> -->
    
<!--Experiment-->   
<button type="submit" id="checkout122" style="background-image: url('images/gooutlast.png'); text-align:right"/>View Item &nbsp;</button>
<!--<button type="submit" id="gooutlastpg" style="background-image: url('images/gooutlast.png'); text-align:right"/>Checkout &nbsp;</button>-->
<a href="finalizeewg.php" ><button type="submit" id="gooutlastpg" style="background-image: url('images/gooutlast.png'); text-align:right"/>Checkout &nbsp;</button></a>
<!-- put the the overlay below before closing </body> the end of the page -->
<div class="overlayOuter" id="overlayOuter12"> 
    <input type="button" onclick="funcoo()" style="margin-top:100px; margin-right:-370px; background-color:#000; font-size:20px; font-weight:bold; z-index:1; color:#fff; border-radius:10px;" value="X">
    <div class="overlayInner" id="overlayInner12">
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
 }


.overlayInner{
    position:relative;
    margin:-50px auto;
    background-size: 100% 100%;
    background-repeat:no-repeat;
    z-index: -1;
 }    
</style>
  
    
<div class="overlayOuter3" id="overlayOuter1233"> 
    <input type="button" onclick="funcoodisp()" style="margin-top:20px; background-color:#41762a; font-size:20px; font-weight:bold; z-index:1; color:#fff; border-radius:10px; width:200px;" value="X">
    <div class="overlayInner3" id="overlayInner1233" style="margin-top:70px">
      <!-- external content to be loaded here -->
    </div>
  </div>
<style>
.overlayOuter3{
    background:#000;
    opacity:0.9;
    display:none;
    height:1100px;
    left:0;
    position:absolute;
    top:0;
    width:100%;
 }


.overlayInner3{
    position:relative;
    margin:-50px auto;
    background-size: 100% 100%;
    background-repeat:no-repeat;
    z-index: -1;
 }    
</style>
    
<script>
    function funcoodisp(){
    //alert("");
document.getElementById("overlayOuter1233").style.display = "none";
       // document.document.getElementsByClassName("overlayInner").style.display = none;
        //alert(cvb);
    }
</script>
    

<script>$("#checkout122").live("click", function(){
    $(".overlayInner3").load("checkout.php",
       // the following is the callback   
      function(){$(".overlayOuter3").fadeIn(300); })
});</script>
    
<script>$("#gooutlastpg").live("click", function(){
    $(".overlayInner3").load("gooutlast.php",
       // the following is the callback   
      function(){$(".overlayOuter3").fadeIn(300); })
});</script>

 <!--Experiment-->   
    
    
</td><!--<td>
<button id="viewcart1" class="viewcart">View Order</button>
</td>--><td>
<a href="http://lodgetrade.com/app/door.php"> <button id="viewcart1" style="background-image: url('images/belowbtns.png'); text-align:right">Front Door&nbsp;</button> </a>
</td><td>
<a href="http://lodgetrade.com/app/window.php"> <button id="viewcart1" style="background-image: url('images/belowbtns.png'); text-align:right">Back Door&nbsp;</button> </a>
<a href="http://lodgetrade.com/app/windowpatio.php"> <button id="viewcart1" class="belowbuttons" style="background-image: url('images/belowbtns.png'); text-align:right">Patio Door&nbsp;</button> </a>
</td></tr></table>     
    
    <br><br><br><br>
    <hr>
</div>  
    
    
    <br><br>
   <div id="footer">Developed By: Webbiz.ie | All Rights Reserved</div> 
    <br><br>
    
</div>


<script type="text/javascript">

$(document).ready(function(){ 
    $('#page').fadeIn(1000);
});

</script>





<!--Popup functions-->


<div id="popup_boxf">    <!-- OUR PopupBox DIV-->
    <h1>Select Frame Color</h1>
    <a id="popupBoxClosef">Click anywhere to exit</a>    
</div>
<div id="containerf"> <!-- Main Page -->
</div>

<div id="popup_boxd">    <!-- OUR PopupBox DIV-->
    <h1>Select Door Color</h1>
    <a id="popupBoxClosed">Click anywhere to exit</a>    
</div>
<div id="containerd"> <!-- Main Page -->
</div>

<div id="popup_boxg">    <!-- OUR PopupBox DIV-->
    <h1>Select Glass</h1>
    <a id="popupBoxCloseg">Click anywhere to exit</a>    
</div>
<div id="containerg"> <!-- Main Page -->
</div>

<div id="popup_boxh">    <!-- OUR PopupBox DIV-->
    <h1>Select Door Handle</h1>
    <a id="popupBoxCloseh">Click anywhere to exit</a>    
</div>
<div id="containerh"> <!-- Main Page -->
</div>




<style type="text/css">
/* popup_box DIV-Styles*/
#popup_boxf, #popup_boxd, #popup_boxg, #popup_boxh { 
    display:none; /* Hide the DIV */
    position:fixed;  
    _position:absolute; /* hack for internet explorer 6 */  
    height:150px;  
    width:40%;  
    /*background:#fff;*/
    background:#e8e8e8;
    margin-right:30%;
    margin-left:30%;
    top: 50px;
    z-index:100; /* Layering ( on-top of others), if you have lots of layers: I just maximized, you can change it yourself */
    /* additional features, can be omitted */
    border:2px solid #c7c7c7;        
    font-size:15px;  
    -moz-box-shadow: 0 0 5px #000;
    -webkit-box-shadow: 0 0 5px #000;
    box-shadow: 0 0 5px #000;
    
}
#popup_boxf h1, #popup_boxd h1, #popup_boxg h1, #popup_boxh h1{
    color:#00b47d;
    font-size:40px;
}

#containerf, #containerd, #containerg, #containerh {
    background: #cecece; /*Sample*/
    width:100%;
    height:100%;
}

a{  
cursor: pointer;  
text-decoration:none;  
} 

/* This is for the positioning of the Close Link */
#popupBoxClosef, #popupBoxClosed, #popupBoxCloseg, #popupBoxCloseh {
    font-size:20px;  
    line-height:20px;  
    right:5px;  
    top:0px;  
    position:absolute;  
    color:#00b47d; 
    font-weight:500;  
}
</style> 

<!--Popup functions-->

</body>
</html>
</html>


<!------------------------------------------------
--------------------------------------------
----------------------
---------------->
<div id="wframecontainer">
<!--<div id="window1" >
 <table id="window1table">
    <tr>
    <td id="window1td" class="windowglassbk">French Door<img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left; "/></td>    
    </tr>
    </table>
</div>--> 


<!--<div id="window2" >
 <table id="window2table">
    <tr>
    <td id="window2td" class="windowglassbk">French Door<img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right; "/></table></td>    
    </tr>
    </table>
</div> -->


<!--<div id="window3" >
    <table style="width:200px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
    <td id="window3td" class="windowglassbk">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td></tr>   
    </table>
</div>-->

<!--<div id="window4" >
    <table style="width:200px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
    <td class="windowglassbk" style="border: 15px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898;">
        French Door<img src="windowimages/wpanel1.png" style="width:20px; height:50px; float:right; "/>
        <table style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td></tr>   
    </table>
</div>-->

<div id="windowglass1" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:40px; float:right; margin-right: -20px;"/>
              </td></tr>  </table>
            </td></tr></table>
        </td>
    
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:40px; float:left; margin-left: -20px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass2" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbktt" id="innerdiv" style="width:100%; height:170px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass22" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbktt" id="innerdiv" style="width:100%; height:170px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="windowglass3" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass33" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass4" >
    <table class="windowglassbk" id="maintableback" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbktt" id="innerdiv" style="width:100%; height:170px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass44" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbktt" id="innerdiv" style="width:100%; height:170px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass5" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 

    <tr>
        <td class="windowglassbk" style="width:50%; height:50px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-left:10px; margin-bottom:-20px;"/>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:50%; height:50px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:30px; margin-bottom:-20px;"/>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
    </tr>   

    <tr>
        <td colspan="2" class="windowglassbk" id="innerdiv" style="border: 10px solid #e6e6e6; border-right-color:#c7c7c7; width:100%;">
        </td>
    </tr>   

    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass6" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>    
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>

        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass66" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>    
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>

        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass6e" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>    
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>

        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass66e" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>    
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>

        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
   
    
    
<div id="windowglass7" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr style="height:220px;">
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>      
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>  
        
        <tr><td class="windowglassbk" colspan="3" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
</div>
    
<div id="windowglass7e" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr style="height:220px;">
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>      
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>  
        
        <tr><td class="windowglassbk" colspan="3" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
</div>
    
<div id="windowglass77" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr style="height:220px;">
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>      
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>  
        
        <tr><td class="windowglassbk" colspan="3" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>

    
<div id="windowglass8" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr style="height:220px;">
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>      
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
    </tr>  
        
        <tr><td class="windowglassbk" colspan="3" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass88" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr style="height:220px;">
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>      
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
    </tr>  
        
        <tr><td class="windowglassbk" colspan="3" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
  
    
<div id="windowglass9" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:200px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9;"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
                
        </td></tr>  </table>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:75px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
            
        </td>      
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:200px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9;"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:75px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
    </tr>  
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass99" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:200px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9;"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
            
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:75px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>      
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:200px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9;"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
            
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:75px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
    </tr>  
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<!--<div id="window5" >
    <table style="width:200px; height:350px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
         <td id="window3td" class="windowglassbk">French Door
        <img src="windowimages/wpanel.png" style="width:20px; height:50px; float:left;"/>
        <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        <table id="window3td" style="border: 15px solid #e6e6e6; border-right-color:#c7c6c6; border-bottom-color:#cbc8c8; width:100%;"></table>
        </td></tr>   
    </table>
</div>-->

    
<div id="windowglass10" >
    <table style="width:350px; height:280px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:35%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
            </td></tr>  </table>
        </td></tr>  </table>
        </td>
    
        <td class="windowglassbk" id="innerdiv" style="border: 5px solid #e6e6e6; width:65%;">
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass10e" >
    <table style="width:350px; height:280px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:35%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
            </td></tr>  </table>
        </td></tr>  </table>
        </td>
    
        <td class="windowglassbk" id="innerdiv" style="border: 5px solid #e6e6e6; width:65%;">
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass101" >
    <table style="width:350px; height:280px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:35%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
        <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
            </td></tr>  </table>
        </td></tr>  </table>
        </td>
    
        <td class="windowglassbk" id="innerdiv" style="border: 5px solid #e6e6e6; width:65%;">
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="windowglass11" >
    <table style="width:350px; height:280px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 5px solid #e6e6e6; width:65%;">
        </td>
        
        <td class="windowglassbk" style="width:35%;">
        <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
            </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass11e" >
    <table style="width:350px; height:280px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 5px solid #e6e6e6; width:65%;">
        </td>
        
        <td class="windowglassbk" style="width:35%;">
        <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
            </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass111" >
    <table style="width:350px; height:280px; border: 10px solid #e6e6e6; border-right-color:#989898; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 5px solid #e6e6e6; width:65%;">
        </td>
        
        <td class="windowglassbk" style="width:35%;">
        <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
            </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="windowglass12" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbktt" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass12e" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass121" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    

<div id="windowglass13" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:88%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:88%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
    
<div id="windowglass14" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:35%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:88%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; float:bottom; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:65%;">
        </td>
        
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass15" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:65%;">
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:35%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:88%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; float:bottom; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass16" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; border-right-color:#989898; height:190px;"></td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
    
<div id="windowglass17" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:65px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:65px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
    
<div id="windowglass18" >
    <table style="width:350px; height:350px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr style="height:220px;">
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:86%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow2.png" style="width:30px; height:20px; margin-top:50px; margin-left:10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:86%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:30px; height:20px; margin-top:50px; margin-left:25px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr> 
        
    <tr><td class="windowglassbk" colspan="3" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass19" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
 

<div id="windowglass20" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass21" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass222" >
    <table style="height: 300px; width: 300px; background-color: #7b7b7b; border-radius: 50%; border-width: 15px; border-style: solid; border-radius: 160%; border-color: #e6e6e6"> 
    <tr>
        <td><table id="outerdiv" style="height: 300px; width: 300px; background-image: url('windowglassimages/windowback.png'); background-size:100% 100%; background-repeat: no-repeat; border-radius: 150%;"><tr><td>
        </td></tr>  </table>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<div id="windowglass232" >
    
    <table style="background-image:url(windowglassimages/semicircle.png); background-size:100% 100%; background-repeat:no-repeat; height:100px; width:300px;"><tr>
<td></td>
</tr></table>
    
    <table style="
    width: 300px;
    height: 100px;
    border-radius: 150% / 300%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;border-width: 15px; border-style: solid; border-color: #e6e6e6; display:none"> 
    <tr>
        <td><table id="outerdiv" style="background-image: url('windowglassimages/windowback.png'); background-size:100% 100%; background-repeat: no-repeat;
    width: 300px;
    height: 100px;
    border-radius: 150% / 300%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;"><tr><td>
        </td></tr>  </table>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
 

<!-- <div id="sashwindowglass1" >
    <table style="width:280px; height:350px; border: 20px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td>
            
            
            <table class="windowglassbk" id="innerdiv1" style="width:100%; height:170px; border: 10px solid #b5b5b5; height:170px;">
        <tr style="height:100px"><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:50%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:50%;">  </td></tr>  
        <tr id="trbefore" style="height:30px;"><td class="windowglassbk" id="innerline2" style="border-top-width:10px; border-style:solid; border-color:#797979; border-bottom-color: rgba(121, 121, 121, 0); border-top-color: rgba(121, 121, 121, 0.3); opacity:0.7"> </td> 
            <td class="windowglassbk" id="innerline2" style="border-top-width:10px; border-style:solid; border-color:#797979;border-bottom-color: rgba(121, 121, 121, 0); border-top-color: rgba(121, 121, 121, 0.3); opacity:0.7"> </td></tr>
            </table>
           
            <table class="windowglassbk" id="innerdiv2" style="width:100%; margin-bottom:40px; height:100px; border: 10px solid #c1c1c1; border-top-color:rgba(0, 0, 0, 0); border-top-width:0px; opacity:0.7">
                <tr><td id="innerline3" style="border:2px solid #8b8b8b; border-top-color:rgba(0, 0, 0, 0)"> </td> 
            <td id="innerline3" style="border:2px solid #8b8b8b; border-top-color:rgba(0, 0, 0, 0)"> </td></tr>    
            </table>
        </td></tr>    
            </table>
            
        
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div> -->



<div id="sashwindowglass2" >
    
    <table style="width:300px; height:300px; border: 20px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td style="width:30%"> 
            <table class="windowglassbk" id="innerdiv1" style="width:100%; height:150px; border: 10px solid #e5e5e5;">
            <tr>  
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
          </tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv5" style="width:100%; height:150px; border:10px solid #7b7b7b  ">
        <tr>
        <td> <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-70px;"/> </td> 
        </tr>  
            </table>
        </td>
        
        <td style="width:40%"> 
            <table class="windowglassbk" id="innerdiv1" style="width:100%; height:150px; border: 10px solid #e5e5e5;">
            <tr>  
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;"> </td>
          </tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv5" style="width:100%; height:150px; border:10px solid #7b7b7b  "><tr>
        <td> <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-70px;"/> </td> 
        </tr>  
            </table>
        </td>
        
        <td style="width:30%"> 
            <table class="windowglassbk" id="innerdiv1" style="width:100%; height:150px; border: 10px solid #e5e5e5;">
            <tr>  
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;"> </td>
          </tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv5" style="width:100%; height:150px; border:10px solid #7b7b7b  "><tr>
        <td> <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-70px;"/> </td> 
        </tr>  
            </table>
        </td>
    </tr>    
    </table>  
  <!--  <table style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td style="width:48%"> 
            <table class="windowglassbk" id="innerdiv1" style="width:100%; height:150px; border: 10px solid #e5e5e5;">
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr>  
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv5" style="width:100%; height:150px; border:10px solid #7b7b7b ">
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr> 
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr>  
            </table>
        </td>
        
        <td id="innerdiv6" style="width:4%; height:100%; background-color:#b5b5b5;"></td>
        
        <td style="width:48%"> 
            <table class="windowglassbk" id="innerdiv1" style="width:100%; height:150px; border: 10px solid #e5e5e5">
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr>  
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv5" style="width:100%; height:150px; border:10px solid #7b7b7b ">
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr> 
        <tr><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr>  
            </table>
        </td>
    </tr>    
    </table> -->
            
        
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="sashwindowglass3" >
    <table style="width:250px; height:300px; border: 20px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td> 
            <table class="windowglassbk" id="innerdiv1" style="width:100%; height:150px; border: 10px solid #e5e5e5;">
       <!-- <tr style="height:50%"><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:100%%;"> </td> -->
           <!-- <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td>-->
            <tr>  
       <!-- <tr style="height:50%"><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> -->
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;"> </td>
          <!--  <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td> --></tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv4" style="width:100%; height:150px; border:10px solid #7b7b7b  "><tr>
        <td> <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-70px;"/>  </td> 
        </tr>  
            </table>
        </td>
    </tr>    
    </table>
            
        
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    


<div id="sashwindowglass4" >    
    
  <table style="width:300px; height:300px; border: 20px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td style="width:50%"> 
            <table class="windowglassbk" id="innerdiv44" style="width:100%; height:150px; border: 10px solid #e5e5e5;">
            <tr>  
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
          </tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv14" style="width:100%; height:150px; border:10px solid #7b7b7b  ">
        <tr>
        <td> <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-70px;"/> </td> 
        </tr>  
            </table>
        </td>
        
        <td style="width:50%"> 
            <table class="windowglassbk" id="innerdiv44" style="width:100%; height:150px; border: 10px solid #e5e5e5;">
            <tr>  
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;"> </td>
          </tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv14" style="width:100%; height:150px; border:10px solid #7b7b7b  "><tr>
        <td> <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-70px;"/> </td> 
        </tr>  
            </table>
        </td>
    </tr>    
    </table>  
    
  <!-- <table style="width:250px; height:300px; border: 20px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td> 
            <table class="windowglassbk" id="innerdiv14" style="width:100%; height:150px; border:10px solid #7b7b7b "> 
            <tr>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;"></td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;">  </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td>
            </tr>  
        <tr style="height:50%"><td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;"> </td> 
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:34%;"> <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-30px;"/> </td>
            <td id="innerline" style="border:2px solid #5c5c5c; border-bottom-color: rgba(247, 247, 247, 0); width:33%;">  </td></tr>  
            </table>
           
            <table class="windowglassbk" id="innerdiv44" style="width:100%; height:150px; border: 10px solid #e5e5e5;"> </td> 
        </tr>  
            </table>
        </td>
    </tr>    
    </table> -->
            
        
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
<!--Sash Window-->
    
    

    
<!--bay window start-->

<div id="baywindowglass1">
    
<table style="background-image:url(windowglassimages/baywindowex1.png); background-size:100% 100%; background-repeat:no-repeat; height:400px; width:300px;"><tr>
<td></td>
</tr></table>
    
    
<table id="baywindowglass11" style="background-color:rgba(255, 255, 255, 0); display:none">
<tr>
<td id="baywhite">

<div id="parallelogramltop1">
    <div id="innerdiv" style="width:120px; height:90px; border:5px solid #e5e5e5; background-image: url('windowglassimages/baywindowglassn1.jpg'); background-size:100% 100%;"><img src="windowglassimages/panelwindow2.png" style="height:20px; width:40px; margin-left:40px; margin-top:85px;"> </div>
</div>
</td>
<td id="baywhite">
<div id="parallelogramrtop1">
<div id="innerdiv" style="width:120px; height:90px; border:5px solid #e5e5e5; background-image: url('windowglassimages/baywindowglassn2.jpg'); background-size:100% 100%;"><img src="windowglassimages/panelwindow3.png" style="height:20px; width:40px; margin-left:40px; margin-top:85px;"></div></div>
</td>
</tr>
<tr>
<td id="baywhite">
<div id="parallelograml1"></div>
</td>
<td id="baywhite">
<div id="parallelogramr1"></div>
</td>
</tr>
</table>
    
    
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="baywindowglass2">
    
<table style="background-image:url(windowglassimages/baywindowex2.png); background-size:100% 100%; background-repeat:no-repeat; height:400px; width:300px;"><tr>
<td></td>
</tr></table>
    
<table id="baywindowglass22" style="background-color:rgba(255, 255, 255, 0); display:none">
<tr>
<td id="baywhite">
<div id="parallelogramltop2"></div>
</td>
<td id="baywhite">
<div id="parallelogramrtop2"></div>
</td>
</tr>
<tr>
<td id="baywhite">
<div id="parallelograml2"><div id="innerdiv" style="width:120px; height:190px; border:5px solid #e5e5e5; background-image: url('windowglassimages/baywindowglassn1.jpg'); background-size:100% 100%;"><img src="windowglassimages/panelwindow2.png" style="height:20px; width:40px; margin-left:40px; margin-top:185px;"></div></div>
</td>
<td id="baywhite">
<div id="parallelogramr2"><div id="innerdiv" style="width:120px; height:190px; border:5px solid #e5e5e5; background-image: url('windowglassimages/baywindowglassn2.jpg'); background-size:100% 100%;"><img src="windowglassimages/panelwindow3.png" style="height:20px; width:40px; margin-left:40px; margin-top:185px;"></div></div>
</td>
</tr>
</table>
    

<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="baywindowglass3">

<table id="baywindowglass33" style="background-color:rgba(255, 255, 255, 0);">
<tr>
<td id="baywhite">
<div id="parallelogramltop3"></div>
</td>
<td id="baywhite"><div id="baywindowmiddle1"><div id="innerdiv" style="width:120px; height:88px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow3.png" style="height:20px; width:40px; margin-left:40px; margin-top:85px;"></div></div></td>
<td id="baywhite">
<div id="parallelogramrtop3"></div>
</td>
</tr>
<tr>
<td id="baywhite">
<div id="parallelograml3"><div id="innerdiv" style="width:50px; height:190px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow.png" style="height:40px; width:20px; margin-top:85px; float:left; margin-left:-17px;"></div></div>
</td>
<td id="baywhite"><div id="baywindowmiddle2"></div></td>
<td id="baywhite">
<div id="parallelogramr3"><div id="innerdiv" style="width:50px; height:190px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow.png" style="height:40px; width:20px; margin-top:85px; float:right; margin-right:-17px;"></div></div>
</td>
</tr>
</table>
    
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>









<!--<div id="baywindowglass4">
<table id="baywindowglass44" style="background-color:rgba(255, 255, 255, 0)">
<tr>
<td id="baywhite">
<div id="parallelogramltop4"></div>
</td>
<td id="baywhite"><div id="baywindowmiddle14"></div></td>
<td id="baywhite">
<div id="parallelogramrtop4"></div>
</td>
</tr>
<tr>
<td id="baywhite">
<div id="parallelograml4"></div>
</td>
<td id="baywhite"><div id="baywindowmiddle24"></div></td>
<td id="baywhite">
<div id="parallelogramr4"></div>
</td>
</tr>
</table>
    
    
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>-->










<div id="baywindowglass5">
<table id="baywindowglass55" style="background-color:rgba(255, 255, 255, 0)">
<tr>
<td id="baywhite">
<div id="parallelogramltop36l"></div>
</td>
<td id="baywhite">
<div id="parallelogramltop36"></div>
</td>
<td id="baywhite"><div id="baywindowmiddle16"><div id="innerdiv" style="width:70px; height:85px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow3.png" style="height:20px; width:40px; margin-left:20px; margin-top:85px;"></div></div></td>
<td id="baywhite">
<div id="parallelogramrtop36"></div>
</td>
<td id="baywhite">
<div id="parallelogramrtop36r"></div>
</td>
</tr>
<tr>
<td id="baywhite">
<div id="parallelograml36l"><div id="innerdiv" style="width:20px; height:140px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow.png" style="height:40px; width:20px; margin-top:65px; float:left; margin-left:-17px;"></div></div>
</td>
<td id="baywhite">
<div id="parallelograml36"></div>
</td>
<td id="baywhite"><div id="baywindowmiddle26"></div></td>
<td id="baywhite">
<div id="parallelogramr36"></div>
</td>
<td id="baywhite">
<div id="parallelogramr36r"><div id="innerdiv" style="width:20px; height:140px; border:0px solid #e5e5e5;background-size:100% 100%;"><img src="windowglassimages/panelwindow.png" style="height:40px; width:20px; margin-top:65px; float:right; margin-right:-17px;"></div></div>
</td>
</tr>
</table>
    
    
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>









<div id="baywindowglass6">
<table id="baywindowglass66" style="background-color:rgba(255, 255, 255, 0)">
<tr>
<td id="baywhite">
<div id="parallelogramltop36l"></div>
</td>
<td id="baywhite">
<div id="parallelogramltop36"></div>
</td>
<td id="baywhite"><div id="baywindowmiddle16"><div id="innerdiv" style="width:70px; height:85px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow3.png" style="height:20px; width:40px; margin-left:20px; margin-top:85px;"></div></div></td>
<td id="baywhite">
<div id="parallelogramrtop36"></div>
</td>
<td id="baywhite">
<div id="parallelogramrtop36r"></div>
</td>
</tr>
<tr>
<td id="baywhite">
<div id="parallelograml36l"></div>
</td>
<td id="baywhite">
<div id="parallelograml36"><div id="innerdiv" style="width:30px; height:140px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow.png" style="height:40px; width:20px; margin-top:65px; float:left; margin-left:-17px;"></div></div>
</td>
<td id="baywhite"><div id="baywindowmiddle26"></div></td>
<td id="baywhite">
<div id="parallelogramr36"><div id="innerdiv" style="width:30px; height:140px; border:0px solid #e5e5e5; background-size:100% 100%;"><img src="windowglassimages/panelwindow.png" style="height:40px; width:20px; margin-top:65px; float:right; margin-right:-17px;"></div></div>
</td>
<td id="baywhite">
<div id="parallelogramr36r"></div>
</td>
</tr>
</table>
    
    
<table class="windowglassbk" style="width:300px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>

<!--bay window end-->
   
    
    
    
    
    
<div id="windowglass1extra" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:75px; height:110px; border: 10px solid #e5e5e5;">    
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 100px;"/>
              </div></td></tr>
                
            <tr><td>
                <div class="windowglassbk" id="innerdiv" style="width:100%; height:170px; border: 1px solid #e5e5e5;">
              </div>
              </td></tr>  </table>
            </td></tr></table>
        </td>
    
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 10px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:40px; float:left; margin-left: -20px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass2extra" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:80px; height:130px; border: 10px solid #e5e5e5;">    
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 125px;"/>
              </div></td></tr>
                
            <tr><td>
                <div class="windowglassbk" id="innerdiv" style="width:80px; height:130px; border: 10px solid #e5e5e5;">    
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 125px;"/>
              </div>
              </td></tr>  </table>
            </td></tr></table>
        </td>
    
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 0px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:40px; float:left; margin-left: -20px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass3extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:85px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:195px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; border-right-color:#989898; height:190px;"></td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:85px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:195px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass4extra" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 10px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow1.png" style="width:20px; height:40px; float:right; margin-right: -20px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
        
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:75px; height:110px; border: 10px solid #e5e5e5;">    
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 100px;"/>
              </div></td></tr>
                
            <tr><td>
                <div class="windowglassbk" id="innerdiv" style="width:100%; height:170px; border: 0px solid #e5e5e5;">
              </div>
              </td></tr>  </table>
            </td></tr></table>
        </td>

    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass5extra" >
    <table class="windowglassbk" style="width:220px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 95px;"/>
        </div>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:220px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -15px;"/></td>
        </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="windowglass6extra" >
    <table class="windowglassbk" style="width:220px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 95px;"/>
        </div>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:220px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -15px;"/></td>
        </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    
<div id="windowglass8extra" >
        <table class="windowglassbk" style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td>
        
        <div class="windowglassbk" id="innerdiv" style="width:94%; height:140px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 130px;"/>
        </div>

        </td>
    </tr>
    <tr><td>
        <div class="windowglassbk" id="innerdiv" style="width:94%; height:140px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 130px;"/>
        </div>
        </td>
        </tr>
    </table>
    
    
    
    <table class="windowglassbk" style="width:220px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 95px;"/>
        </div>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:220px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -15px;"/></td>
        </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>








<div id="windowglass7extra" >
        <table class="windowglassbk" style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td>
            <table><tr><td class="windowglassbk" id="innerdiv" style="border: 10px solid #e5e5e5; height:80px; width:142px"></td>
                <td class="windowglassbk" id="innerdiv" style="border: 10px solid #e5e5e5; height:80px; width:142px;"></td></tr>
            <div style="height:0px;"><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 85px;"/></div>
            </table>
        </td>
    </tr>
    <tr><td>
        <table><tr><td class="windowglassbk" id="innerdiv" style="border: 10px solid #e5e5e5; height:150px; width:142px"></td><td class="windowglassbk" id="innerdiv" style="border: 10px solid #e5e5e5; height:150px; width:142px;"></td></tr>
        <div style="height:0px;"><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 155px;"/></div>
        </table>
        
        </td>
        </tr>
    </table>
    
    
    
    
    <table class="windowglassbk" style="width:220px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 95px;"/>
        </div>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:220px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -15px;"/></td>
        </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>







<div id="windowglass9extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:92%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
               
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:92%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>












<div id="windowglass10extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:5%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:210px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <tr><td><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-170px;"/></td></tr>
                </table>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:70px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
               
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:94%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>










<div id="windowglass11extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:5%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:210px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:33%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <tr><td><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-30px;"/></td></tr>
                </table>
        </td></tr>
                    </table>
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:33%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <tr><td><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-30px;"/></td></tr>
                </table>
        </td></tr>
                    </table>
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:34%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <tr><td><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-30px;"/></td></tr>
                </table>
        </td></tr>
                     </table>
                </td>
            </tr>
            
            </table>
        </td>
        
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:210px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <tr><td></td></tr>    <!--<img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-bottom:-170px;"/>-->
                </table>
        </td></tr>  </table>
                </td>
            </tr>
           
            </table>
        </td>
    </tr>  
        
    <tr>
        <td colspan="2" class="windowglassbk" style="height:70px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
               
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>









<div id="windowglass12extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:10%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:75%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:20px; height:20px; margin-left:0px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:10%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:75%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:20px; height:20px; margin-left:0px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:10%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:75%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:20px; height:20px; margin-left:0px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:10%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:75%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:20px; height:20px; margin-left:0px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>






<div id="windowglass13extra" >
        
<table style="background-image:url(windowglassimages/wgframe13extra.png); background-size:100% 100%; background-repeat:no-repeat; height:250px; width:250px;"><tr>
<td></td>
</tr></table>
    
    <table class="windowglassbk" style="width:220px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 95px;"/>
        </div>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:220px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -15px;"/></td>
        </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass14extra" >
 
<table style="background-image:url(windowglassimages/wgframe14extra.png); background-size:100% 100%; background-repeat:no-repeat; height:200px; width:300px;"><tr>
<td></td>
</tr></table>
    
    <table class="windowglassbk" style="width:220px; height:300px; display:none; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top: 95px;"/>
        </div>
        </td></tr>  </table>
        </td>
    </tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:220px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -15px;"/></td>
        </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass15extra" >
    <table class="windowglassbk" style="width:280px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:220px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-220px; margin-left:0px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass16extra" >
    <table class="windowglassbk" style="width:280px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:220px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-220px; margin-left:0px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>







<div id="windowglass17extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:94%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:5%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:210px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <tr><td>
                  <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-100px;"/>
                </td></tr>
                </table>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:70px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
               
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>









<div id="windowglass18extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:210px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                 <tr><td></td></tr>   <!--<img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-bottom:-170px;"/>-->
                </table>
        </td></tr>  </table>
                </td>
            </tr>
           
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:5%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:210px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:33%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <tr><td><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-30px;"/></td></tr>
                </table>
        </td></tr>
                    </table>
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:33%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <tr><td><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-30px;"/></td></tr>
                </table>
        </td></tr>
                    </table>
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:34%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                  <tr><td><img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px;  margin-right:20px; margin-bottom:-30px;"/></td></tr>
                </table>
        </td></tr>
                     </table>
                </td>
            </tr>
            
            </table>
        </td>
    </tr>  
        
    <tr>
        <td colspan="2" class="windowglassbk" style="height:70px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
               
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


    
    
    
    
    
    
<div id="windowglass19extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; border-right-color:#7b7b7b; border-bottom-color:#989898; margin:0px auto; background-color:#7b7b7b;">
    <tr>    
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 2px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -15px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 2px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -130px"/>
          
                </td></tr>  </table>
        </td></tr>  </table>
        </td>

        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 2px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -15px"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass20extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:155px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:150px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
             </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass21extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:155px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; margin-top:70px; float:right; margin-right:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
             </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass22extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 2px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -145px"/>
          
                </td></tr>  </table>
            </td></tr>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
             <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 2px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -145px"/>
          
                </td></tr>  </table>    
             </td></tr>
             </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass23extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 2px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -145px"/>
          
                </td></tr>  </table>
            </td></tr>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -90px"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
             <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -145px"/>
          
                </td></tr>  </table>    
             </td></tr>
             </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="windowglass24extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:155px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; margin-top:70px; float:left; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
             </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass25extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:33%;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 2px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
          
                </td></tr>  </table>
            </td></tr>
            </table>
        </td>
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:85%; height:55px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-left:-10px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -90px"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="width:33%;">
             <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
             <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px;"/>
          
                </td></tr>  </table>    
             </td></tr>
             </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass26extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass27extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-90px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass28extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="windowglass29extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass30extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-bottom:-90px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-90px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass31extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass32extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
                   </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 5px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    
                </td></tr>  </table>   
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
                   </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass33extra" >
    <table style="width:350px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
                   </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
                   </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-90px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" id="innerdiv" style="border: 4px solid #e6e6e6; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">                         <tr><td>        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
                        </td></tr>  </table>
                   </td></tr>  </table>
                </td>
            </tr>
            <tr>
            <td class="windowglassbk" style="height:190px;">
                <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                    <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px;"/>
          
                        </td></tr>  </table>
                </td></tr>  </table>   
            </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




   
<div id="windowglass34extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -130px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass35extra" >
    <table class="windowglassbk" style="width:280px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:40px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass36extra" >
    <table class="windowglassbk" style="width:280px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top:40px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass37extra" >
    <table class="windowglassbk" style="width:280px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:40px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass38extra" >
    <table class="windowglassbk" style="width:280px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top:40px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass39extra" >
    <table class="windowglassbk" style="width:200px; height:380px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:50px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9;"><tr><td>
        </td></tr>  </table>
        </td></tr>
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:130px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <table class="windowglassbk" id="outerdiv" style="width:100%; height:130px; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9;"><tr><td>
        </td></tr>  </table>
        </td></tr>
        
    <tr>
        <td><table class="windowglassbk" id="innerdiv" style="width:100%; height:130px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:130px; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9;"><tr><td>
        </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
    
<table class="windowglassbk" id="outerdiv" style="width:100%; height:130px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9; display:none;"><tr><td>
        </td></tr>  </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass40extra" >
    <table class="windowglassbk" style="width:200px; height:380px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td id="outerdiv" style="width:100%; height:50px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-40px;"/>
        </div>
        </td></tr>
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:130px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
    <tr>
        <td><table class="windowglassbk" class="windowglassbk" id="innerdiv" style="width:100%; height:130px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass41extra" >
    <table class="windowglassbk" style="width:200px; height:380px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:50px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        </td></tr>
    <tr><td class="windowglassbk" id="outerdiv" style="width:100%; height:130px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <div class="windowglassbk" id="innerdiv" style="width:93%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-120px;"/>
        </div>
        </td></tr>
    <tr>
        <td><table class="windowglassbk" id="innerdiv" style="width:100%; height:130px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass42extra" >
    <table class="windowglassbk" style="width:200px; height:380px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:50px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        </td></tr>
    <tr><td class="windowglassbk" id="outerdiv" style="width:100%; height:130px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <div class="windowglassbk" id="innerdiv" style="width:93%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top: 50px;"/>
        </div>
        </td></tr>
    <tr>
        <td><table class="windowglassbk" id="innerdiv" style="width:100%; height:130px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


    



<div id="windowglass43extra" >
    <table class="windowglassbk" style="width:200px; height:380px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:50px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        </td></tr>
    <tr><td class="windowglassbk" id="outerdiv" style="width:100%; height:130px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <div class="windowglassbk" id="innerdiv" style="width:93%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top: 50px;"/>
        </div>
        </td></tr>
    <tr>
        <td><table class="windowglassbk" id="innerdiv" style="width:100%; height:130px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass44extra" >
    <table class="windowglassbk" style="width:200px; height:380px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:50px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <div class="windowglassbk" id="innerdiv" style="width:93%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-45px;"/>
        </div>
        </td></tr>
    <tr><td class="windowglassbk" id="outerdiv" style="width:100%; height:160px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <div class="windowglassbk" id="innerdiv" style="width:93%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top: 50px;"/>
        </div>
        </td></tr>
    <tr>
        <td><table class="windowglassbk" id="innerdiv" style="width:100%; height:100px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass45extra" >
    <table class="windowglassbk" style="width:200px; height:380px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:50px; border: 10px solid #e5e5e5; background-color:#7b7b7b;">
        <div class="windowglassbk" id="innerdiv" style="width:93%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-45px;"/>
        </div>
        </td></tr>
    <tr><td class="windowglassbk" id="outerdiv" style="width:100%; height:160px; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
        <div class="windowglassbk" id="innerdiv" style="width:93%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top: 50px;"/>
        </div>
        </td></tr>
    <tr>
        <td><table class="windowglassbk" id="innerdiv" style="width:100%; height:100px; border: 10px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            
        </td></tr>  </table>
        </td>
    </tr>
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass46extra" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 10px solid #e5e5e5;"><tr><td>
              </td></tr>  </table>
            </td></tr></table>
        </td>
    
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 10px solid #e5e5e5;"><tr><td>
                </td></tr>  </table>
            </td></tr></table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass47extra" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -150px; margin-right:20px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
              </td></tr>  </table>
            </td></tr></table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass48extra" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
              </td></tr>  </table>
            </td></tr></table>
        </td>
    
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-bottom: -150px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass49extra" >  
    <table style="width:300px; height:350px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom: -150px; margin-right:20px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
    
        <td style="width:49%; border: 1px solid #727272;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-bottom: -150px;"/>
                </td></tr>  </table>
            </td></tr></table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>







<div id="windowglass50extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">   

    <tr>
        <td colspan="2" class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
        </td>
    </tr>   
        
    <tr>
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-right:30px; margin-bottom:-70px;"/>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:30px; margin-bottom:-70px;"/>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
    </tr> 

    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass51extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">   

    <tr>
        <td colspan="2" class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
        </td>
    </tr>   
        
    <tr>
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
    </tr> 

    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass52extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">   

    <tr>
        <td colspan="2" class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:30px; margin-bottom:-55px;"/>
                </td></tr>  </table>
        </td>
    </tr>   
        
    <tr>
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
           
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>  
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
    </tr> 

    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass53extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
        
    <tr>
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
           
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>  
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
    </tr> 
        
    <tr>
        <td colspan="2" class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:30px; margin-bottom:-55px;"/>
                </td></tr>  </table>
        </td>
    </tr> 

    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass54extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">   

    <tr>
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
    </tr> 
        
    <tr>
        <td colspan="2" class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
        </td>
    </tr>   

    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass55extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">   

    <tr>
        <td colspan="2" class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
        </td>
    </tr>   
        
    <tr>
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px;"/>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:50%; height:150px;">
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px;"/>
                </td></tr>  </table>
            </td></tr>  </table>
        </td>
    </tr> 

    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass56extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:93%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-left:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:35%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:283px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top:30px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass57extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:35%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:283px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:30px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:93%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                    
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass58extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:91%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:20px;"/>
            
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:91%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-left:20px; margin-top:50px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
          
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top:20px;"/>
                   
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>






<div id="windowglass59extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:93%; height:80px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:20px;"/>
             
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:93%; height:80px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
           
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top:20px;"/>
                     
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass60extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:93%; height:80px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
               
                  <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-90px;"/>
                 
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:93%; height:80px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
           
                  <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-bottom:-90px;"/>
                      
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>  
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass61extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:15%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:88%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:50px; margin-right:20px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:20px;"/>
            
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:63%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:285px;">
                    
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
       
                </td>
            </tr>
            </table>
        </td>
    </tr>  
        <tr>
    <td colspan="2">
    <table class="windowglassbk" id="innerdiv" style="width:100%; height:70px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>    
    </td>    
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass62extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:63%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:285px;">
                    
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
       
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:15%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:88%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-top:50px; margin-left:20px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                
                  <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left:-15px; margin-top:20px;"/>
            
                </td></tr>  </table>
        </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>  
        <tr>
    <td colspan="2">
    <table class="windowglassbk" id="innerdiv" style="width:100%; height:70px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>    
    </td>    
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass63extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:33%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:285px;">
          <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>           
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:20px;"/>
                </td></tr>  </table>
       </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
        
        <td class="windowglassbk" style="border: 0px solid #e6e6e6; border-right-color:#989898; width:63%;">
            <table style="width:100%;">
            <tr>
                <td class="windowglassbk" style="height:90px;">
                    <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <div class="windowglassbk" id="innerdiv" style="width:94%; height:50px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
                    <img src="windowglassimages/panelwindow3.png" style="width:50px; height:20px; margin-top:50px; margin-left:20px;"/>
                </div>
        </td></tr>  </table>
                </td>
            </tr>
            <tr>
                <td class="windowglassbk" style="height:190px;">    
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>    
                </td></tr>  </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>  
        <tr>
    <td colspan="2">
    <table class="windowglassbk" id="innerdiv" style="width:100%; height:80px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>    
    </td>    
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass64extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-130px; margin-right:20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass65extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-130px; margin-right:20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>


<div id="windowglass66extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-130px; margin-right:20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>

    
    

    

<div id="windowglass67extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-120px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:20px; height:10px; margin-bottom:-120px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>






<div id="windowglass68extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-120px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:20px; height:10px; margin-bottom:-120px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:20px; height:10px; margin-bottom:-120px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass69extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        
        <td class="windowglassbk" style="width:18%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:right; margin-right:-20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:18%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:18%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:18%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:18%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:left; margin-left:-20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass70extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
        
    <tr style="height:50px;">
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:10px; height:10px; margin-bottom:-20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-20px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr>   
        
    <tr>
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:right; margin-right:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-65px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:10px; height:10px; margin-bottom:-65px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-65px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:15%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px;float:left; margin-left:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>






<div id="windowglass71extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
        
    <tr style="height:50px;">
        
        <td class="windowglassbk" style="width:16%;"> 
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
    </tr>   
        
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-75px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:20px; height:10px; margin-bottom:-75px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:20px; height:10px; margin-bottom:-75px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:20px; height:10px; margin-bottom:-75px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



   
    

<div id="windowglass72extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">  
      
    <tr style="height:50px;">
        
        <td class="windowglassbk" style="width:16%;"> 
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-15px;"/>
                </td></tr>  </table>
                </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
           <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-15px;"/>
                </td></tr>  </table>
                </td></tr>  </table>
        </td>
        
    </tr> 
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:right; margin-right:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:left; margin-left:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr> 
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass73extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">  
      
    <tr style="height:50px;">
        
        <td class="windowglassbk" style="width:16%;"> 
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-15px;"/>
                </td></tr>  </table>
                </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
           <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
                <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                <img src="windowglassimages/panelwindow2.png" style="width:10px; height:10px; margin-bottom:-15px;"/>
                </td></tr>  </table>
                </td></tr>  </table>
        </td>
        
    </tr> 
        
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-65px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-65px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr> 
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>








<div id="windowglass74extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">  
      
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:right; margin-right:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:left; margin-left:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr> 
    <tr style="height:50px;">
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
    </tr> 
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>








<div id="windowglass75extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">  
        
    <tr style="height:50px;">
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
    </tr> 
        
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-70px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-70px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr> 
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>








<div id="windowglass76extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">  
        
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-95px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-95px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-95px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-95px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr> 
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>







<div id="windowglass77extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">  
        
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:right; margin-right:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:10px; height:20px; float:left; margin-left:-15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr> 
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>






<div id="windowglass78extra" >
    <table style="width:300px; height:250px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">  
        
    <tr>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-95px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:20%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 0px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:16%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow4.png" style="width:10px; height:5px; margin-bottom:-95px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
    </tr> 
        
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>






<div id="windowglass79extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right: -15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass80extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -15px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass81extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:40px; height:20px; margin-bottom:-130px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        
        <td class="windowglassbk" style="width:34%;">  
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
                </td></tr>  </table>
        </td>
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:40px; height:20px; margin-bottom:-130px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>





<div id="windowglass82extra" >
    <table style="width:320px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">
    <tr>
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:40px; height:20px; margin-bottom:-130px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow2.png" style="width:40px; height:20px; margin-bottom:-130px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
        
        <td class="windowglassbk" style="width:30%;">
            <table class="windowglassbk" id="outerdiv"style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
            <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow3.png" style="width:40px; height:20px; margin-bottom:-130px;"/>
                </td></tr>  </table>
        </td></tr>  </table>
        </td>
    </tr>   
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>

    








<div id="windowglass83extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
        
    <tr><td class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b;"></td></tr>
        
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:65px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-top:65px;"/>
              </div>
        </td></tr>  </table>
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>




<div id="windowglass84extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
        
    <tr><td>
        
        <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:65px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
        
        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-65px;"/>
              </div>
        </td></tr>  </table>   
        
    </td></tr>
        
    <tr>
        <td>       
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:140px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:right; margin-right:-15px; margin-top:50px;"/>
              </td></tr>  </table>
        </td></tr>  </table>   
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>



<div id="windowglass85extra" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;">    
             
    <tr><td>
    <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <div class="windowglassbk" id="innerdiv" style="width:95%; height:65px; border: 5px solid #e5e5e5; background-color:#7b7b7b;">
        
        
            <img src="windowglassimages/panelwindow2.png" style="width:50px; height:20px; margin-bottom:-65px;"/>
              </div>
        </td></tr>  </table>    
    </td></tr>
        
    <tr>
        <td>
            <table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:140px; border: 5px solid #e5e5e5; background-color:#7b7b7b;"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:65px; float:left; margin-left:-15px; margin-top:50px;"/>
              </td></tr>  </table>
        </td></tr>  </table>
            
            
        </td>
    </tr>
    </table>
<div style="display:none; background-color:#c9ce9b" id="menuvalidcolor"></div>
</div>
    
    


<!--<div id="window9" >
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
</div>-->

</div>







<!--Sash Window-->
    
<!--<div id="sashwindowglass" >
    <table class="windowglassbk" style="width:300px; height:300px; border: 10px solid #e6e6e6; margin:0px auto; background-color:#7b7b7b;"> 
    <tr>
        <td><table class="windowglassbk" id="outerdiv" style="width:100%; height:100%; border: 10px solid #f7f7f7; border-bottom-color: #f7f7f7; border-left-color: #d9d9d9; border-top-color: #f7f7f7; border-right-color: #d9d9d9"><tr><td>
        </td></tr>  </table>
        <table class="windowglassbk" id="innerdiv" style="width:100%; height:100%; border: 5px solid #e5e5e5; background-color:#7b7b7b; display:none"><tr><td>
            <img src="windowglassimages/panelwindow.png" style="width:20px; height:50px; float:left; margin-left: -20px;"/>
              </td></tr>  </table>
        </td>
    </tr>
    </table>
</div>-->







<style>
#parallelograml1 {
	width: 130px;
	height: 200px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglassn1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr1 {
	width: 130px;
	height: 200px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglassn2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop1 {
	width: 130px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop1 {
	width: 130px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
    
    
#parallelograml2 {
	width: 130px;
	height: 200px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass11.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr2 {
	width: 130px;
	height: 200px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass22.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop2 {
	width: 130px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglassn1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop2 {
	width: 130px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglassn2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
    
    
#parallelograml3{
	width: 60px;
	height: 200px;
    margin-top:-30px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr3{
	width: 60px;
	height: 200px;
    margin-top:-30px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop3{
	width: 60px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglassn1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop3{
	width: 60px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglassn2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#baywindowmiddle1{
    width: 130px;
	height: 95px;
    margin-top:23px;
    background-image: url('windowglassimages/baywindowglass33.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
#baywindowmiddle2{
    width: 130px;
	height: 200px;
    background-image: url('windowglassimages/baywindowglass3.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
    
    
#parallelograml4{
	width: 60px;
	height: 200px;
    margin-top:-30px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass1left.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr4{
	width: 60px;
	height: 200px;
    margin-top:-30px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass1right.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop4{
	width: 60px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglassn1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop4{
	width: 60px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglassn2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#baywindowmiddle14{
    width: 130px;
	height: 95px;
    margin-top:23px;
    background-image: url('windowglassimages/baywindowglass77.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
#baywindowmiddle24{
    width: 130px;
	height: 200px;
    background-image: url('windowglassimages/baywindowglass3.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
    
#baywindowmiddle15{
    width: 100px;
	height: 95px;
    margin-top: 73px;
    background-image: url('windowglassimages/baywindowglass33.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
#baywindowmiddle25{
    width: 100px;
	height: 200px;
    background-image: url('windowglassimages/baywindowglass3.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
#parallelograml35{
	width: 60px;
	height: 200px;
    margin-top:-25px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass1left.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr35{
	width: 60px;
	height: 200px;
    margin-top:-25px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass1right.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop35{
	width: 60px;
	height: 100px;
    margin-top: 50px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglassn1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop35{
	width: 60px;
	height: 100px;
    margin-top: 50px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglassn2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelograml35l{
	width: 40px;
	height: 200px;
    margin-top:-76px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr35r{
	width: 40px;
	height: 200px;
    margin-top:-76px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop35l{
	width: 40px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop35r{
	width: 40px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#baywhite {
    background-color:#fff;
}
    
    
#baywindowmiddle16{
    width: 80px;
	height: 95px;
    margin-top: 110px;
    background-image: url('windowglassimages/baywindowglass33.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
#baywindowmiddle26{
    width: 80px;
	height: 150px;
    background-image: url('windowglassimages/baywindowglass3.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
}
#parallelograml36{
	width: 40px;
	height: 150px;
    margin-top:-22px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglass1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr36{
	width: 40px;
	height: 150px;
    margin-top:-22px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglass2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop36{
	width: 40px;
	height: 100px;
    margin-top: 90px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
    -o-transform: skewY(20deg);
    transform: skewY(20deg);
	background-image: url('windowglassimages/baywindowglassn1.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop36{
	width: 40px;
	height: 100px;
    margin-top: 90px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-20deg);
    -moz-transform: skewY(-20deg);
    -ms-transform: skewY(-20deg);
    -o-transform: skewY(-20deg);
    transform: skewY(-20deg);
	background-image: url('windowglassimages/baywindowglassn2.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelograml36l{
	width: 30px;
	height: 150px;
    margin-top:-110px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(50deg);
    -moz-transform: skewY(50deg);
    -ms-transform: skewY(50deg);
    -o-transform: skewY(50deg);
    transform: skewY(50deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramr36r{
	width: 30px;
	height: 150px;
    margin-top:-110px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-50deg);
    -moz-transform: skewY(-50deg);
    -ms-transform: skewY(-50deg);
    -o-transform: skewY(-50deg);
    transform: skewY(-50deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramltop36l{
	width: 30px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(50deg);
    -moz-transform: skewY(50deg);
    -ms-transform: skewY(50deg);
    -o-transform: skewY(50deg);
    transform: skewY(50deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
#parallelogramrtop36r{
	width: 30px;
	height: 100px;
    border-left: 10px solid #e6e6e6;
    border-bottom: 10px solid #e6e6e6;
    border-top: 10px solid #e6e6e6;
    border-right: 10px solid #e6e6e6;
	-webkit-transform: skewY(-50deg);
    -moz-transform: skewY(-50deg);
    -ms-transform: skewY(-50deg);
    -o-transform: skewY(-50deg);
    transform: skewY(-50deg);
	background-image: url('windowglassimages/baywindowglass4.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
}
</style>











