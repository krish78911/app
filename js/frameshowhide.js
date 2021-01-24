
$(document).ready(function() {
    $("#frame1").hide();
    $("#frame2").hide();
    $("#frame4").hide();
    $("#frame5").hide();
    $("#frame6").hide();
    $("#frame7").hide();
    $("#frame8").hide();
    $("#frame9").hide();
    $("#frame10").hide();
    $("#frame111").hide();
    $("#frame12").hide();
    $("#frame13").hide();
    $("#frame14").hide();
    $("#frame15").hide();
    $("#frame16").hide();
    $("#frame17").hide();
    $("#frame18").hide();
    $("#frame19").hide();
    $("#framehidden").hide();
    $("#defaultframe").hide(); 
    $("#doorcenter0").hide(); 
});


$(document).ready(function() {
    // document is loaded and DOM is ready
    $('div#displaydoor div div#beforecenter').empty();
    $('#doorcenter9').clone().appendTo($('div#displaydoor div div#beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
    //tooltip code start
       $(function() {
            $( "#frame3" ).tooltip({
               content: "<strong>Click to view Frame</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
});



$(document).ready(function(){
  $('#framef1').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
     var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
     var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalroundtop');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
     var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass); 
      
      
     var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
     var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
     
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame1').html());
      $('#doorbox5 #frame3').css({'height':'400px', 'width': '270px'});
      $('#doorbox5 #frame1').css({'height':'330px', 'width': '250px'});
      $('#doorbox5 #frame1 #center-f1').css({'height':'270px', 'width': '120px'});
      $('#doorbox5 #frame1 #left #glassleft1-f5').css({'height':'270px', 'width': '50px'});
      $('#doorbox5 #frame1 #right #glassright1-f5').css({'height':'270px', 'width': '50px'});
      $('#doorbox5 #frame3').css({'border-color': 'rgba(0, 0, 0, 0.76)'});
      $('#doorbox5 #frame1 .ovalglass').css({'margin': '5px'});
      $('#doorbox5 #frame3').css('height', '394px');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
       $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
        $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #oval-f1").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
      
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
        
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef2').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      
     var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
     var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
        
     var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      $("#frame3 .glass").empty();
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame2').html()); 
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '210px');
      $('#frame3').css('float', 'left');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
          
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
         $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'visible',
   'display' : 'block',
                              });

      
      //tooltip code start
      $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef4').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image'); 
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
     var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame4').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '270px');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '49px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
         $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'visible',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef5').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
     var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame5').html()); 
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '270px');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '49px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
    $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef6').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
     var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3  #frame3back').empty();
      $('#frame3  #frame3back').html($('#frame6').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '210px');
      $('#frame3').css('float', 'left');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '49px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
   $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'visible',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {

            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef7').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame7').html());
      //$('#frame10').clone().appendTo($('#frame3 #frame3back'));
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '210px');
      $('#frame3').css('float', 'right');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '49px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});


$(document).ready(function(){
  $('#framef8').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame8').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '148px');
      $('#frame3').css('float', 'right'); 
      $('#frame3').css('margin-right', '62px'); 
      $('#frame3').css('margin-top', '49px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
      
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef10').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame10').html());
      //$('#frame10').clone().appendTo($('#frame3 #frame3back'));
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '210px');
      $('#frame3').css('float', 'left');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '49px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef11').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame111').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '210px');
      $('#frame3').css('float', 'right'); 
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '49px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'visible',
   'display' : 'block',
                              });

      
    //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef12').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalroundtop');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame12').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '148px');
      $('#frame3').css('margin-right', '62px');
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 #oval-f1").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef13').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame13').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '148px');
      $('#frame3').css('margin-right', '62px'); 
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef14').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalroundtop');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame14').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '210px'); 
      $('#frame3').css('float', 'right');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 #oval-f1").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef15').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame15').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '210px');
      $('#frame3').css('float', 'right');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
           
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef16').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame16').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '210px');
      $('#frame3').css('float', 'left');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });

          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
      
    $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef17').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalroundtop');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame17').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '270px');
      $('#frame3').css('margin-right', '0px'); 
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 #oval-f1").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 .glass").css({
   'opacity': '1',
                              });
      
    $("#doorboxpanelll").css({
   'visibility': 'visible',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});

$(document).ready(function(){
  $('#framef18').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      $("#doorboxpanelll").css({
   'visibility': 'hidden',
   'display' : 'block',
                              });
      
      var door10 = $('#frame3 .doorimage').css('background-image'); 
      door10 = door10.replace('.png','.jpg');
     door10=door10.split('/');     //images, services, image.jpg
     var lastelem = door10.pop();
     var lastelem1 = door10.pop();//images, services     // lastelem: image.jpg
     door10.push('D10');     //images, services, large   // lastelem: image.jpg 
     door10.push(lastelem);    //images, services, large, image.jpg
     door10=door10.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door10);
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
      
      var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame18').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '270px');
      $('#frame3').css('margin-right', '0px');
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
       if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      
    $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
   $("#frame3 .glass").css({
   'opacity': '1',
                              });
      

  
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});







$(document).ready(function(){
  $('#framef19').on('click', function () {
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      var handler = $('#frame3 .doorhandler').css('background-image');
      var handlel = $('#frame3 .doorhandlel').css('background-image');
      var letterbox = $('#frame3 .doorletterbox').css('background-image');
      var knocker = $('#frame3 .knocker').css('background-image');
      var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
      
      $("#doorboxpanelll").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      
      var door9glass = $('#frame3 .glass').css('background-image');
     door9glass = door9glass.replace('.png','.jpg');
     door9glass=door9glass.split('/');     //images, services, image.jpg
     var lastelem = door9glass.pop();
     var lastelem1 = door9glass.pop();//images, services     // lastelem: image.jpg
     door9glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door9glass.push(lastelem);    //images, services, large, image.jpg
     door9glass=door9glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door9glass);

     var door4glass = $('#frame3 .glass').css('background-image');
     door4glass = door4glass.replace('.png','.jpg');
     door4glass=door4glass.split('/');     //images, services, image.jpg
     var lastelem = door4glass.pop();
     var lastelem1 = door4glass.pop();//images, services     // lastelem: image.jpg
     door4glass.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     door4glass.push(lastelem);    //images, services, large, image.jpg
     door4glass=door4glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door4glass);

     var door3glass = $('#frame3 .glass').css('background-image');
     door3glass = door3glass.replace('.jpg','.png');
     door3glass=door3glass.split('/');     //images, services, image.jpg
     var lastelem = door3glass.pop();
     var lastelem1 = door3glass.pop();//images, services     // lastelem: image.jpg
     door3glass.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     door3glass.push(lastelem);    //images, services, large, image.jpg
     door3glass=door3glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door3glass);
      
      var bag = $('#frame3 .glass').css('background-image');
     bag = bag.replace('.png','.jpg');
     bag=bag.split('/');     //images, services, image.jpg
     var lastelem = bag.pop();
     var lastelem1 = bag.pop();//images, services     // lastelem: image.jpg
     bag.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     bag.push(lastelem);    //images, services, large, image.jpg
     bag=bag.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', bag);
      
      var msrc = $('#frame3 .glass').css('background-image');
      msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      var door8glass = $('#frame3 .glass').css('background-image');
     door8glass = door8glass.replace('.jpg','.png');
     door8glass=door8glass.split('/');     //images, services, image.jpg
     var lastelem = door8glass.pop();
     var lastelem1 = door8glass.pop();//images, services     // lastelem: image.jpg
     door8glass.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     door8glass.push(lastelem);    //images, services, large, image.jpg
     door8glass=door8glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door8glass);
      
      var door5glass = $('#frame3 .glass').css('background-image');
     door5glass = door5glass.replace('.jpg','.png');
     door5glass=door5glass.split('/');     //images, services, image.jpg
     var lastelem = door5glass.pop();
     var lastelem1 = door5glass.pop();//images, services     // lastelem: image.jpg
     door5glass.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     door5glass.push(lastelem);    //images, services, large, image.jpg
     door5glass=door5glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door5glass);
      
      var door6glass = $('#frame3 .glass').css('background-image');
     door6glass = door6glass.replace('.jpg','.png');
     door6glass=door6glass.split('/');     //images, services, image.jpg
     var lastelem = door6glass.pop();
     var lastelem1 = door6glass.pop();//images, services     // lastelem: image.jpg
     door6glass.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     door6glass.push(lastelem);    //images, services, large, image.jpg
     door6glass=door6glass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', door6glass);
      
     var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame19').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '394px');
      $('#doorbox5 #frame3').css('width', '270px');
      $('#frame3').css('margin-right', '0px');
      $('#frame3').css('margin-top', '0px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
        $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D1").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D1").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'right',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D1l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'float': 'left',
   'margin-top':'149px',
   'height': '40px',
   'width': '30px'
                              });  
    $("#frame3 #doorpanel1D1k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
         $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $("#frame3 #doorpanel1D2").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D2").css({
   'background-image' : handler,
   'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D2l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '149px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D2k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'}); 
        $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
        $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
    $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
     $("#frame3 #doorpanel1D4").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D4").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D4l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-13px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
     $("#frame3 #doorpanel1D4k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-235px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
    $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
    $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '55px', 'height':'120px'});
    $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel, 
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter9").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter10'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter10').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 #tableglass').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visivility': 'hidden'});
        $("#frame3 #doorpanel1D10").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D10").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'right'
                              });
    $("#frame3 #doorpanel3D10l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '48px',
   'height': '40px',
   'width': '30px',
   'float': 'left'
                              });
    $("#frame3 #doorpanel1D10k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-250px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter10").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter11'){
          $('#frame3 #beforecenter').empty();
    $('#doorcenter11').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D5").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D5l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D5").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top':'-67px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
     $("#frame3 #doorpanel1D5k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
    $("#frame3 #doorcenter11").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter12'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter12').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D6").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '0px auto', 
   'height': '15px',
   'width': '50px'
                              }); 
   $("#frame3 #doorpanel3D6").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
   $("#frame3 #doorpanel3D6l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-42px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D6k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',  
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter12").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter13'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter13').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
       $("#frame3 #doorpanel1D7").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-15px auto',
   'height': '15px',
   'width': '50px'
                              });
    
     $("#frame3 #doorpanel3D7").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D7l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-51px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D7k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-140px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter13").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter14'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter14').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
       $("#frame3 #doorpanel3D9").css({
   'background-image': handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D9l").css({
   'background-image': handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-36px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D9").css({
   'background-image': letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-3px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel1D9k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-130px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter14").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter15'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter15').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
       $("#frame3 #doorpanel1D8").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-10px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D8").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D8l").css({
   'background-image' : handlel,  
   'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-72px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D8k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-160px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter15").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter16'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter16').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
          $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
       $("#frame3 #doorpanel1D16").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-5px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D16").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D16l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '78px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D16k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-150px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter16").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter17'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter17').clone().appendTo($('#frame3 #beforecenter'));
       $("#frame3 #doorpanel1D17").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-180px auto',
   'height': '15px',
   'width': '50px'
                              });
    
    $("#frame3 #doorpanel3D17").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D17l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '-216px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D17k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-320px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          $("#frame3 #doorcenter17").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
      }
      
      else if(idd == 'doorcenter18'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter18').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
        $("#frame3 #doorpanel1D3").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-2px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D3").css({
   'background-image' : handler,
    'visibility':handlevisibilityr,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D3l").css({
   'background-image' : handlel,
    'visibility':handlevisibilityl,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin-top': '88px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D3k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-147px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter18").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter19'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter19').clone().appendTo($('#frame3 #beforecenter'));
    $("#frame3 #doorpanel1D19").css({
   'background-image' : letterbox,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-20px auto',
   'height': '15px',
   'width': '50px'
                              });
    $("#frame3 #doorpanel3D19").css({
   'background-image' : handler,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityr,
   'margin-top': '-58px',
   'float': 'right',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel3D19l").css({
   'background-image' : handlel,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'visibility':handlevisibilityl,
   'margin-top': '-58px',
   'float': 'left',
   'height': '40px',
   'width': '30px'
                              });
    $("#frame3 #doorpanel1D19k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-155px auto',
   'height': '25px',
   'width': '25px'
                              });
          $("#frame3 #doorcenter19").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
          $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
      }
       
      
      $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD8 .glass").css({
   'background-image': door8glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 #tdglassD5 .glass").css({
   'background-image': door5glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
       $("#frame3 .ovalglass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $("#frame3 .bottompanel").css({
   'background-image': botm,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : door6glass,
   'height':'160px',
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
   $("#frame3 #tdglassD3 div.glass").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
   $("#frame3 td#doorglassdefault2").css({
   'background-image': door3glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
   $("#frame3 #tdglassD4 .glass").css({
   'background-image': door4glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });

   $("#frame3 #tdglassD9 div.glass").css({
   'background-image': door9glass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    $("#frame3 #table3 .glass").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
   $("#frame3 .glass").css({
   'opacity': '1',
                              });
      
    
   $("#doorboxpanelll").css({
   'visibility': 'visible',
   'display' : 'block',
                              });

      
      //tooltip code start
       $(function() {
            
            $( "#frame3 .ovalglass, #frame3 .glass, #frame3 .glass19" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
                        $( "#frame3 #frame3back #doorpanel3D1l, #frame3 #frame3back #doorpanel3D1, #frame3 #frame3back #doorpanel1D1, #frame3 #frame3back #doorpanel1D1k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),    
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D18l, #frame3 #frame3back #doorpanel3D18, #frame3 #frame3back #doorpanel1D18, #frame3 #frame3back #doorpanel1D18k" ).tooltip({
               content: "<strong>Click to view Fixtures</strong>",
               track:true
            }),
            $( ".doorimage" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#tooltip-4" ).tooltip({
               disabled: true
            });
         });
    //tooltip code ends
  });
});



/*$(document).ready(function()
{
    $("#frame3 .glass").on('mouseover', 
      function () {
        $('#frame3 .glass').css({'opacity': '0.3', 'background-color': '#bcbcbc'});
      });
});

$(document).ready(function()
{
    $("#frame3 .glass").on('mouseout',
      function () {
        $('#frame3 .glass').css({'opacity': '1', 'background-color': '#fff'});
      }
    );
});

$(document).ready(function()
{
    $("#frame3").mouseenter(
      function () {
        $('#frame3').css('opacity', '0.3');
      });
    $("#frame3").mouseleave(
      function () {
        $('#frame3').css('opacity', '1');
        
      });
});
*/
$(document).ready(function(){
 $(document).on('mouseover mouseout', '#frame3 .glass, #frame3 .glass2, #frame3 .ovalglass, #frame3 .glass19', function(event) {
     if (event.type == 'mouseover')
     {
       //$('#frame3 .glass').css({'opacity': '0.3', 'background-color': '#bcbcbc'});
      // $('#frame3 .ovalglass').css({'opacity': '0.3', 'background-color': 'rgba(188, 188, 188, 0)'});
         
         $('#frame3 #usedforhoverglass').css({'opacity': '0.9', 'background-color': '#000', 'transition': 'background 0.2s linear'});
          event.stopImmediatePropagation();
     }
     else
     {
      $('#frame3 #usedforhoverglass').css({'opacity': '1', 'background-color': 'rgba(0, 0, 0, 0)', 'transition': 'background 0.2s linear'});
      //$('#frame3 .glass').css({'opacity': '1', 'background-color': 'rgba(255, 255, 255, 0)'});
     // $('#frame3 .ovalglass').css({'opacity': '1', 'background-color': 'rgba(255, 255, 255, 0)'});
     }
});
});


$(document).ready(function(){
 $(document).on('mouseover mouseout', '#frame3 #hiddenletter, #frame3 #hiddenhandle, #frame3 #hiddenhandlel', function(event) {
     if (event.type == 'mouseover')
     {   
         $('#frame3 #hiddenletter').css({'opacity': '0.3'});
         $('#frame3 #hiddenhandle').css({'opacity': '0.3'});
         $('#frame3 #doorcenter5 #hiddenhandler').css({'display': 'block', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat',
   'margin-right': '0px', 'float': 'right', 'height': '40px', 'width': '30px'});
         $('#frame3 #doorcenter5 #hiddenhandlel').css({'display': 'block', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat', 'margin-left': '0px', 'float': 'left', 'height': '40px', 'width': '30px'});
         //$('#doorbox3').show();
         
          event.stopImmediatePropagation();
     }
     else
     {
      $('#frame3 #hiddenletter').css({'opacity': '1'});
      $('#frame3 #hiddenhandle').css({'opacity': '1'});
      $('#frame3 #doorcenter5 #hiddenhandler').css({'display': 'none'});
      $('#frame3 #doorcenter5 #hiddenhandlel').css({'display': 'none'});
      //$('#frame3 .glass').css({'opacity': '1', 'background-color': 'rgba(255, 255, 255, 0)'});
     // $('#frame3 .ovalglass').css({'opacity': '1', 'background-color': 'rgba(255, 255, 255, 0)'});
     }
});
});


/*$(document).ready(function(){
 $(document).on('mouseover mouseout', '#frame3 #center-f1', function(event) {
     if (event.type == 'mouseover')
     {
       $('#frame3 #center-f1').css({'opacity': '0.5', 'background-color': '#9a3c3c'});
          event.stopImmediatePropagation();
     }
     else
     {
      $('#frame3 #center-f1').css({'opacity': '1', 'background-color': '#fff'});
     }
});
});*/

$(document).ready(function(){
  
        

 /*$(document).on('mouseover mouseout', '#frame3', function(event) {
     if (event.type == 'mouseover')
     {
        
       $('#frame3').css({'background-color': 'red'});
         
          
     }
     else
     {
      $('#frame3').css({'background-color': gb});
     }
});
    
    
    $("#frame3").mouseenter(
      function () {
        $('#frame3').css('background-color', '#711c1c');
      });
    $("#frame3").mouseleave(
      function () {
        $('#frame3').css('background-color', gb);
        
      });*/
    $(document).on('mouseover mouseout', '#frame3 #frame3back', function(event) {
     if (event.type == 'mouseover')
     {
       $('#frame3 #frame3back').css({'background-color': '#1d1d1d', 'transition': 'background 0.2s linear'});
         $('#frame3 #usedforhoverpanel').css({'opacity': '0.9', 'background-color': '#242424'});
         //$('#frame3 #usedforhoverglass').css({'background-image': 'url("images/doorglass8/G36.png")',});
          event.stopImmediatePropagation();
     }
     else
     {
      $('#frame3 #frame3back').css({'background-color': 'rgba(0, 0, 0, 0.13)', 'transition': 'background 0.2s linear'});
         $('#frame3 #usedforhoverpanel').css({'opacity': '1', 'background-color': 'rgba(0, 0, 0, 0)'});
         //$('#frame3 #usedforhoverglass').css({'background-image': 'none',});
     }
   });
    
   


       
       
     
       
    /*$( "document" ).on('mouseenter', '#frame3',(function() {
      $('#frame3').css({'opacity': '0.5', 'background-color': '#fff'});   
    });*/
    /* $('#frame3').hover(function (e) {
              if (e.target === this)
                  $('#frame3').css({'opacity': '0.3', 'background-color': '#b70909'});
          }, function () { });*/
});