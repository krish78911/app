$(document).ready(function(){
 $(document).on('mouseover mouseout', '#frame3 #beforecenter', function(event) {
     
     var apple = $('.doorhandler').css('visibility')
    // alert(apple)
     
if(apple == "visible")
    {
     
     if (event.type == 'mouseover')
     {
         //alert (gate);
       //$('#frame3 #beforecenter').css({'opacity': '0.3', 'background-color': '#9a3c3c'});
         $('#frame3 #usedforhover').css({'opacity': '0.9', 'background-color': '#000', 'transition': 'background 0.2s linear'});
         
         // $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
             $("#frame3 .tablehandle9 .doorletterbox9").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
         $("#frame3 .tablehandle9 .doorletterbox").css({
                 'display': 'none',
                              });
    
     $("#frame3 .tablehandle9 .doorhandler9").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandlel9").css({
        'display': 'block',
        'visibility':'visible',
   'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandler").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle9 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle9 .knocker9").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle9 .knocker").css({
        'display': 'none',
                              });
         
         
   

         
         
     $("#frame3 .tablehandle4 .doorletterbox4").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
        $("#frame3 .tablehandle4 .doorletterbox").css({
   'display': 'none',
         }); 
    
    $("#frame3 .tablehandle4 .doorhandler4").css({
    'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle4 .doorhandlel4").css({
    'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 .tablehandle4 .doorhandler").css({
    'display': 'none',
                              });
    $("#frame3 .tablehandle4 .doorhandlel").css({
    'display': 'none',
                              });
     $("#frame3 .tablehandle4 .knocker4").css({
    'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle4 .knocker").css({
    'display': 'none',
                              });
         
         
    
   $("#frame3 .tablehandle1 .doorletterbox1").css({
       'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandler1").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel1").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .knocker1").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox2").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 .tablehandle2 .doorhandler2").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .doorhandlel2").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .knocker2").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorpanel1D21k").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-440px',
   'margin-left': '10px',
   'height': '15px',
   'width': '50px'
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox16").css({
       'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle16 .doorhandler16").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .doorhandlel16").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .knocker16").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox17").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle17 .doorhandler17").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .doorhandlel17").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .knocker17").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox3").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle3 .doorhandler3").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .doorhandlel3").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .knocker3").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox5").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel5").css({
         'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle5 .doorhandler5").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 .tablehandle5 .knocker5").css({
         'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle55 .knocker5").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker5").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker5").css({
         'display': 'none',
                              });

    $("#frame3 .tablehandle6 .doorletterbox6").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              });
    
   $("#frame3 .tablehandle6 .doorhandler6").css({
       'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 .tablehandle6 .doorhandlel6").css({
       'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle6 .knocker6").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });

    $("#frame3 .tablehandle7 .doorletterbox7").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle7 .doorhandler7").css({
         'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .doorhandlel7").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .knocker7").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox8").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle8 .doorhandler8").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .doorhandlel8").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .knocker8").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox19").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle19 .doorhandler19").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .doorhandlel19").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .knocker19").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle10 .doorletterbox10").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle10 .doorhandler10").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle10 .doorhandlel10").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 .tablehandle10 .knocker10").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
         
         
/*----------------------------------------------------
--------------------------------------------------------------------------------*/
   $("#frame3 .tablehandle1 .doorletterbox").css({
      'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandler").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .knocker").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .knocker").css({
        'display': 'none',
                              });
    $("#frame3 #doorpanel1D21k").css({
       'display': 'none',
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox").css({
       'display': 'none',
                              });
    
    $("#frame3 .tablehandle16 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .knocker").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .knocker").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .knocker").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle5 .doorhandler").css({
        'display': 'none',
                              });
     $("#frame3 .tablehandle5 .knocker").css({
         'display': 'none',
                              });
         $("#frame3 .tablehandle55 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker").css({
         'display': 'none',
                              });

    $("#frame3 .tablehandle6 .doorletterbox").css({
       'display': 'none',
                              });
    
   $("#frame3 .tablehandle6 .doorhandler").css({
       'display': 'none',
                              });
   $("#frame3 .tablehandle6 .doorhandlel").css({
       'display': 'none',
                              });
    $("#frame3 .tablehandle6 .knocker").css({
        'display': 'none',
                              });

    $("#frame3 .tablehandle7 .doorletterbox").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle7 .doorhandler").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle7 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle7 .knocker").css({
        'display': 'none',
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle8 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .knocker").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle19 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .knocker").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle10 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .knocker").css({
        'display': 'none',
                              });
         
        /* $("#frame3 #doorcenter9").css({
            'background-image': 'url("images/doorglass5/G36.png")',
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });*/
          event.stopImmediatePropagation();
     }
     else
     {
          //alert (gate);
      //$('#frame3 #beforecenter').css({'opacity': '1', 'background-color': '#fff'});
         $('#frame3 #usedforhover').css({'opacity': '1', 'background-color': 'rgba(255, 0, 0, 0)', 'transition': 'background 0.2s linear'});
         
         $("#frame3 .tablehandle9 .doorletterbox").css({
   'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
         $("#frame3 .tablehandle9 .doorletterbox9").css({
                 'display': 'none',
                              });
    
     $("#frame3 .tablehandle9 .doorhandler").css({
   'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandlel").css({
        'display': 'block',
        'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandler9").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle9 .doorhandlel9").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle9 .knocker").css({
   'display': 'block',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle9 .knocker9").css({
        'display': 'none',
                              });
         
         
         
         
         
         
           
     $("#frame3 .tablehandle4 .doorletterbox4").css({
   'display': 'none',
                              });
        $("#frame3 .tablehandle4 .doorletterbox").css({
   'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
         }); 
    
    $("#frame3 .tablehandle4 .doorhandler4").css({
    'display': 'none',
                              });
    $("#frame3 .tablehandle4 .doorhandlel4").css({
    'display': 'none',
                              });
    $("#frame3 .tablehandle4 .doorhandler").css({
    'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle4 .doorhandlel").css({
    'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 .tablehandle4 .knocker4").css({
    'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle4 .knocker").css({
    'display': 'none',
                              });
         
         
    
   $("#frame3 .tablehandle1 .doorletterbox").css({
       'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 .tablehandle2 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorpanel1D21k").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-440px',
   'margin-left': '10px',
   'height': '15px',
   'width': '50px'
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox").css({
       'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle16 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle17 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle3 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel").css({
         'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle5 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 .tablehandle5 .knocker").css({
         'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle55 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker").css({
         'display': 'none',
                              });

    $("#frame3 .tablehandle6 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              });
    
   $("#frame3 .tablehandle6 .doorhandler").css({
       'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 .tablehandle6 .doorhandlel").css({
       'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle6 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });

    $("#frame3 .tablehandle7 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle7 .doorhandler").css({
         'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle8 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .knocker").css({
        'display': 'block',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle19 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle10 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle10 .doorhandler").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle10 .doorhandlel").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 .tablehandle10 .knocker").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
         
         
/*----------------------------------------------------
--------------------------------------------------------------------------------*/
   $("#frame3 .tablehandle1 .doorletterbox1").css({
      'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandler1").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel1").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .knocker1").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox2").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandler2").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandlel2").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .knocker2").css({
        'display': 'none',
                              });
    $("#frame3 #doorpanel1D21k").css({
       'display': 'none',
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox16").css({
       'display': 'none',
                              });
    
    $("#frame3 .tablehandle16 .doorhandler16").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .doorhandlel16").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .knocker16").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox17").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorhandler17").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .doorhandlel17").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .knocker17").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox3").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorhandler3").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .doorhandlel3").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .knocker3").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox5").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel5").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle5 .doorhandler5").css({
        'display': 'none',
                              });
     $("#frame3 .tablehandle55 .knocker5").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker5").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker5").css({
         'display': 'none',
                              });
         

    $("#frame3 .tablehandle6 .doorletterbox6").css({
       'display': 'none',
                              });
    
   $("#frame3 .tablehandle6 .doorhandler6").css({
       'display': 'none',
                              });
   $("#frame3 .tablehandle6 .doorhandlel6").css({
       'display': 'none',
                              });
    $("#frame3 .tablehandle6 .knocker6").css({
        'display': 'none',
                              });

    $("#frame3 .tablehandle7 .doorletterbox7").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle7 .doorhandler7").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle7 .doorhandlel7").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle7 .knocker7").css({
        'display': 'none',
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox8").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle8 .doorhandler8").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .doorhandlel8").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .knocker8").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox19").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle19 .doorhandler19").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .doorhandlel19").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .knocker19").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorletterbox10").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle10 .doorhandler10").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorhandlel10").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .knocker10").css({
        'display': 'none',
                              });
         /*$("#frame3 #doorcenter9").css({
            'background-image': 'url("images/doorglass5/G30.png")',
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });*/ 
     }
   }
  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
else{
  
    if (event.type == 'mouseover')
     {
         //alert (gate);
       //$('#frame3 #beforecenter').css({'opacity': '0.3', 'background-color': '#9a3c3c'});
         $('#frame3 #usedforhover').css({'opacity': '0.9', 'background-color': '#000', 'transition': 'background 0.2s linear'});
         
         // $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
             $("#frame3 .tablehandle9 .doorletterbox9").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
         $("#frame3 .tablehandle9 .doorletterbox").css({
                 'display': 'none',
                              });
    
     $("#frame3 .tablehandle9 .doorhandler9").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandlel9").css({
        'display': 'block',
        'visibility':'visible',
   'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandler").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle9 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle9 .knocker9").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle9 .knocker").css({
        'display': 'none',
                              });
         
    $("#frame3 .tablehandle4 .doorletterbox4").css({
   'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
        $("#frame3 .tablehandle4 .doorletterbox").css({
   'display': 'none',
         }); 
    
    $("#frame3 .tablehandle4 .doorhandler4").css({
    'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle4 .doorhandlel4").css({
    'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 .tablehandle4 .doorhandler").css({
    'display': 'none',
                              });
    $("#frame3 .tablehandle4 .doorhandlel").css({
    'display': 'none',
                              });
     $("#frame3 .tablehandle4 .knocker4").css({
    'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle4 .knocker").css({
    'display': 'none',
                              });
         
         
    
   $("#frame3 .tablehandle1 .doorletterbox1").css({
       'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandler1").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel1").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .knocker1").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox2").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 .tablehandle2 .doorhandler2").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .doorhandlel2").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .knocker2").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorpanel1D21k").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-440px',
   'margin-left': '10px',
   'height': '15px',
   'width': '50px'
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox16").css({
       'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle16 .doorhandler16").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .doorhandlel16").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .knocker16").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox17").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle17 .doorhandler17").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .doorhandlel17").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .knocker17").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox3").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle3 .doorhandler3").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .doorhandlel3").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .knocker3").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox5").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel5").css({
         'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle5 .doorhandler5").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
         
     $("#frame3 .tablehandle5 .knocker5").css({
         'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle55 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker").css({
         'display': 'none',
                              });

    $("#frame3 .tablehandle6 .doorletterbox6").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              });
    
   $("#frame3 .tablehandle6 .doorhandler6").css({
       'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 .tablehandle6 .doorhandlel6").css({
       'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle6 .knocker6").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });

    $("#frame3 .tablehandle7 .doorletterbox7").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle7 .doorhandler7").css({
         'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .doorhandlel7").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .knocker7").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox8").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle8 .doorhandler8").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .doorhandlel8").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .knocker8").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox19").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle19 .doorhandler19").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .doorhandlel19").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .knocker19").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle10 .doorletterbox10").css({
        'display': 'block',
   'visibility':'visible',
   'background-image' : 'url("images/panel/PLblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle10 .doorhandler10").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle10 .doorhandlel10").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Hblackl.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 .tablehandle10 .knocker10").css({
        'display': 'block',
   'visibility':'visible',
    'background-image' : 'url("images/panel/Kblack.png")',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
         
         
/*----------------------------------------------------
--------------------------------------------------------------------------------*/
   $("#frame3 .tablehandle1 .doorletterbox").css({
      'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandler").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .knocker").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .knocker").css({
        'display': 'none',
                              });
    $("#frame3 #doorpanel1D21k").css({
       'display': 'none',
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox").css({
       'display': 'none',
                              });
    
    $("#frame3 .tablehandle16 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .knocker").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .knocker").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .knocker").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle5 .doorhandler").css({
        'display': 'none',
                              });
     $("#frame3 .tablehandle5 .knocker").css({
         'display': 'none',
                              });
         $("#frame3 .tablehandle55 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker").css({
         'display': 'none',
                              });

    $("#frame3 .tablehandle6 .doorletterbox").css({
       'display': 'none',
                              });
    
   $("#frame3 .tablehandle6 .doorhandler").css({
       'display': 'none',
                              });
   $("#frame3 .tablehandle6 .doorhandlel").css({
       'display': 'none',
                              });
    $("#frame3 .tablehandle6 .knocker").css({
        'display': 'none',
                              });

    $("#frame3 .tablehandle7 .doorletterbox").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle7 .doorhandler").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle7 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle7 .knocker").css({
        'display': 'none',
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle8 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .knocker").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle19 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .knocker").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorletterbox").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle10 .doorhandler").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorhandlel").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .knocker").css({
        'display': 'none',
                              });
        /* $("#frame3 #doorcenter9").css({
            'background-image': 'url("images/doorglass5/G36.png")',
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });*/
          event.stopImmediatePropagation();
     }
     else
     {
          //alert (gate);
      //$('#frame3 #beforecenter').css({'opacity': '1', 'background-color': '#fff'});
         $('#frame3 #usedforhover').css({'opacity': '1', 'background-color': 'rgba(255, 0, 0, 0)', 'transition': 'background 0.2s linear'});
         
         $("#frame3 .tablehandle9 .doorletterbox").css({
   'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
         $("#frame3 .tablehandle9 .doorletterbox9").css({
                 'display': 'none',
                              });
    
     $("#frame3 .tablehandle9 .doorhandler").css({
   'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandlel").css({
        'display': 'block',
        'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle9 .doorhandler9").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle9 .doorhandlel9").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle9 .knocker").css({
   'display': 'block',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle9 .knocker9").css({
        'display': 'none',
                              });
         
   $("#frame3 .tablehandle4 .doorletterbox").css({
   'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
        $("#frame3 .tablehandle4 .doorletterbox4").css({
   'display': 'none',
         }); 
    
    $("#frame3 .tablehandle4 .doorhandler").css({
    'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle4 .doorhandlel").css({
    'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 .tablehandle4 .doorhandler4").css({
    'display': 'none',
                              });
    $("#frame3 .tablehandle4 .doorhandlel4").css({
    'display': 'none',
                              });
     $("#frame3 .tablehandle4 .knocker").css({
    'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle4 .knocker4").css({
    'display': 'none',
                              });
         
         
    
   $("#frame3 .tablehandle1 .doorletterbox").css({
       'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    
    $("#frame3 .tablehandle1 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 .tablehandle2 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle2 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorpanel1D21k").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-440px',
   'margin-left': '10px',
   'height': '15px',
   'width': '50px'
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox").css({
       'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle16 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle16 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle17 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle17 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle3 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle3 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel").css({
         'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle5 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-68px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 .tablehandle5 .knocker").css({
         'display': 'block',
         'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
         $("#frame3 .tablehandle55 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker").css({
         'display': 'none',
                              });

    $("#frame3 .tablehandle6 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              });
    
   $("#frame3 .tablehandle6 .doorhandler").css({
       'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 .tablehandle6 .doorhandlel").css({
       'display': 'block',
   'visibility':'visibility',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle6 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });

    $("#frame3 .tablehandle7 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 .tablehandle7 .doorhandler").css({
         'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle7 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle8 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .doorhandlel").css({
        'display': 'block',
   'visibility':'visibility',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle8 .knocker").css({
        'display': 'block',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle19 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 .tablehandle19 .knocker").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 .tablehandle10 .doorletterbox").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 .tablehandle10 .doorhandler").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 .tablehandle10 .doorhandlel").css({
        'display': 'block',
   'visibility':'visible',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '47px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 .tablehandle10 .knocker").css({
        'display': 'block',
   'visibility':'hidden',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
         
         
/*----------------------------------------------------
--------------------------------------------------------------------------------*/
   $("#frame3 .tablehandle1 .doorletterbox1").css({
      'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandler1").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .doorhandlel1").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle1 .knocker1").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle2 .doorletterbox2").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandler2").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .doorhandlel2").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle2 .knocker2").css({
        'display': 'none',
                              });
    $("#frame3 #doorpanel1D21k").css({
       'display': 'none',
                              });
    
    
   $("#frame3 .tablehandle16 .doorletterbox16").css({
       'display': 'none',
                              });
    
    $("#frame3 .tablehandle16 .doorhandler16").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .doorhandlel16").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle16 .knocker16").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorletterbox17").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle17 .doorhandler17").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .doorhandlel17").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle17 .knocker17").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorletterbox3").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle3 .doorhandler3").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .doorhandlel3").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle3 .knocker3").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle5 .doorletterbox5").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle5 .doorhandlel5").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle5 .doorhandler5").css({
        'display': 'none',
                              });
     $("#frame3 .tablehandle5 .knocker5").css({
         'display': 'none',
                              });
         
         $("#frame3 .tablehandle55 .knocker5").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle88 .knocker5").css({
         'display': 'none',
                              });
     $("#frame3 .tablehandle99 .knocker5").css({
         'display': 'none',
                              });

    $("#frame3 .tablehandle6 .doorletterbox6").css({
       'display': 'none',
                              });
    
   $("#frame3 .tablehandle6 .doorhandler6").css({
       'display': 'none',
                              });
   $("#frame3 .tablehandle6 .doorhandlel6").css({
       'display': 'none',
                              });
    $("#frame3 .tablehandle6 .knocker6").css({
        'display': 'none',
                              });

    $("#frame3 .tablehandle7 .doorletterbox7").css({
        'display': 'none',
                              });
    
     $("#frame3 .tablehandle7 .doorhandler7").css({
         'display': 'none',
                              });
    $("#frame3 .tablehandle7 .doorhandlel7").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle7 .knocker7").css({
        'display': 'none',
                              });
        
    $("#frame3 .tablehandle8 .doorletterbox8").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle8 .doorhandler8").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .doorhandlel8").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle8 .knocker8").css({
        'display': 'none',
                              });
    
    
    $("#frame3 .tablehandle19 .doorletterbox19").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle19 .doorhandler19").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .doorhandlel19").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle19 .knocker19").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorletterbox10").css({
        'display': 'none',
                              });
    
    $("#frame3 .tablehandle10 .doorhandler10").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .doorhandlel10").css({
        'display': 'none',
                              });
    $("#frame3 .tablehandle10 .knocker10").css({
        'display': 'none',
                              });
         /*$("#frame3 #doorcenter9").css({
            'background-image': 'url("images/doorglass5/G30.png")',
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });*/ 
     }
    
}
});
});