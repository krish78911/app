$('#doorcenter1').on('click', function () {
    isRedOrBlue = "#doorcenter1";
    
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
    var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D1');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter1').clone().appendTo($('div#displaydoor div div#beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter1 #handles').css({'margin': '0px auto', 'width':'138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
   /* $('#frame3 #oval').css({
        'background-color': 'red',
        'color': 'white',
        'font-size': '44px'
    });*/
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
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
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
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

$('#doorcenter2').on('click', function () {
     isRedOrBlue = "#doorcenter2";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D2');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter2').clone().appendTo($('div#displaydoor div div#beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter2 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter2 #tableglass').css({'margin': '0px auto', 'width':'138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
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
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D2l, #frame3 #frame3back #doorpanel3D2, #frame3 #frame3back #doorpanel1D2, #frame3 #frame3back #doorpanel1D2k" ).tooltip({
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


$('#doorcenter3').on('click', function () {
    isRedOrBlue = "#doorcenter3";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
    var exts = ['.jpg', '.gif', '.png'];
$('#frame3 .glass').each(function(){
    var $t = $(this);
    $.each(exts, function(i,v){
        $t.css('background-image').replace(v, '');
       
    });
});
    
    var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D3');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter3').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
     $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
     $('div#displaydoor div div#beforecenter div#doorcenter3 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter3 #tableglass').css({'margin': '0px auto', 'width':'138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
     /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #tdglassD3 div.glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
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



$('#doorcenter4').on('click', function () {
    isRedOrBlue = "#doorcenter4";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D4');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter4').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter4 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter4 #tableglass').css({'margin': '0px auto', 'width': '138px', 'height':'80px'});
    $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '46px auto', 'width': '28%', 'height':'64px', 'border-radius': '0px'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #tdglassD4 .glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D4l, #frame3 #frame3back #doorpanel3D4, #frame3 #frame3back #doorpanel1D4, #frame3 #frame3back #doorpanel1D4k" ).tooltip({
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


$('#doorcenter5').on('click', function () {
    isRedOrBlue = "#doorcenter5";   
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D5');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter5').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    
    $('div#displaydoor div div#beforecenter div#doorcenter5 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 #handles').css({'margin': '0px auto', 'width': '100%', 'background-color': 'rgba(255, 0, 0, 0)', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 #handles tr td').css({'width': '33%'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '80px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #tdglassD5 .glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
     $("#frame3 #doorpanel1D55k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-240px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
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



$('#doorcenter6').on('click', function () {
    isRedOrBlue = "#doorcenter6";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D6');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
    var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter6').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)'});
    $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
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



$('#doorcenter7').on('click', function () {
     isRedOrBlue = "#doorcenter7";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D7');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter7').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px'});
    $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px'});
   //$('div#displaydoor div div#beforecenter div#doorcenter7 div.glass71').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
  /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $('#frame3 #tdglass1, #frame3 #tdglass2').css({
   'background-image' : msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
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



$('#doorcenter8').on('click', function () {
    isRedOrBlue = "#doorcenter8";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D8');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
     $('div#displaydoor div div#beforecenter').empty();
     $('#doorcenter8').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter8 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter8 #tableglass').css({'margin': '40px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter8 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #doorglassd8").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    $("#frame3 #doorpanel1D88k").css({
   'background-image' : knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-230px auto',
   'height': '25px',
   'width': '25px'
                              });
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
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



$('#doorcenter9').on('click', function () {
    isRedOrBlue = "#doorcenter9";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D9');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
     $('#doorcenter9').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter9 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter9 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
     $("#frame3 #tdglassD9 div.glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    $("#frame3 #doorpanel1D99k").css({
   'background-image': knocker,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
   'margin': '-210px auto',
   'height': '25px',
   'width': '25px'
                              });
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
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

$('#doorcenter0').on('click', function () {
    isRedOrBlue = "#doorcenter0";
    var bag = $('#frame3 .glass').css('background-image');
    // For identification, I'm adding border
    $(this).css({
        "border": "1px solid #ccc"
    })
    //Vice versa I'm removing for other
    $('#frame1').css({
        "border": ""
    })
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter0').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
});



$('#doorcenter10').on('click', function () {
    isRedOrBlue = "#doorcenter10";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D10');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter10').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter10').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    
    $('div#displaydoor div div#beforecenter div#doorcenter10 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter10 div.glass').css({'margin': '15px auto', 'width': '35%', 'height':'65px', 'border-radius': '5px', 'visibility': 'hidden'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #tdglassD4 .glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D10l, #frame3 #frame3back #doorpanel3D10, #frame3 #frame3back #doorpanel1D10, #frame3 #frame3back #doorpanel1D10k" ).tooltip({
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




$('#doorcenter11').on('click', function () {
    isRedOrBlue = "#doorcenter11";   
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D11');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass5');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter11').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter11').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #handles').css({'margin': '0px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 #tableglass').css({'margin': '5px auto', 'width': '100%', 'background-color': 'rgba(167, 83, 83, 0)', 'width':'138px'});
    //$('div#displaydoor div div#beforecenter div#doorcenter5 div.tdglassD5').css({'margin': '0px auto', 'width': '70%', 'height':'140px', 'background-color': 'rgb(157, 65, 65)'});
    $('div#displaydoor div div#beforecenter div#doorcenter11 div.glass').css({'margin': '0px auto', 'width': '85px', 'height':'185px', 'background-color': 'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #tdglassD5 .glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D5l, #frame3 #frame3back #doorpanel3D5, #frame3 #frame3back #doorpanel1D5, #frame3 #frame3back #doorpanel1D5k" ).tooltip({
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




$('#doorcenter12').on('click', function () {
    isRedOrBlue = "#doorcenter12";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D12');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
    var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter12').clone().appendTo($('div#displaydoor div div#beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter12 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter12').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    
    //$('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '90%', 'height':'120px', 'border-spacing': '10px', 'margin': '-6px auto'});
  // $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '5px', 'width': '50%', 'height':'110px', 'border-top': '10px solid transparent', 'border-right': '30px solid red', 'border-bottom': '10px solid transparent'});
   // $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '5px', 'width': '50%', 'height':'110px', 'border-top': '10px solid rgba(255, 0, 0, 0)', 'border-left': '30px solid rgba(255, 0, 0, 0)', 'border-bottom': '10px solid rgba(255, 0, 0, 0)'});
    
    $('div#displaydoor div div#beforecenter div#doorcenter12 #tableglass').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass1tri').css({'margin-left': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter12 table tr td#tdglass2tri').css({'margin-right': '10px', 'width': '45%', 'height':'160px', 'background-color': 'rgba(255, 255, 255, 0)', 'visibility': 'hidden'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $('#frame3 #tdglass1tri, #frame3 #tdglass2tri').css({
   'background-image' : msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
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
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D6l, #frame3 #frame3back #doorpanel3D6, #frame3 #frame3back #doorpanel1D6, #frame3 #frame3back #doorpanel1D6k" ).tooltip({
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




$('#doorcenter13').on('click', function () {
     isRedOrBlue = "#doorcenter13";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D13');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('largeglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter13').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter13').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 #tableglass').css({'width': '90%', 'height':'170px', 'border-spacing': '15px', 'margin': '0px auto'});
   $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
    $('div#displaydoor div div#beforecenter div#doorcenter13 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'170px', 'visibility':'hidden'});
   //$('div#displaydoor div div#beforecenter div#doorcenter7 div.glass71').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
  /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $('#frame3 #tdglass1, #frame3 #tdglass2').css({
   'background-image' : msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
         });
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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D7l, #frame3 #frame3back #doorpanel3D7, #frame3 #frame3back #doorpanel1D7, #frame3 #frame3back #doorpanel1D7k" ).tooltip({
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




$('#doorcenter14').on('click', function () {
    isRedOrBlue = "#doorcenter9";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D14');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     $('div#displaydoor div div#beforecenter').empty();
     $('#doorcenter14').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter14').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter14 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter14 #tableglass').css({'margin': '-2px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter14 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px', 'visibility': 'hidden'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
     $("#frame3 #tdglassD9 div.glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D9l, #frame3 #frame3back #doorpanel3D9, #frame3 #frame3back #doorpanel1D9, #frame3 #frame3back #doorpanel1D9k" ).tooltip({
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



$('#doorcenter15').on('click', function () {
    isRedOrBlue = "#doorcenter15";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D15');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass8');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
     $('div#displaydoor div div#beforecenter').empty();
     $('#doorcenter15').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter15').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter15 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter15 #tableglass').css({'margin': '40px auto', 'width': '100%'});
    $('div#displaydoor div div#beforecenter div#doorcenter15 table tr td div#doorglassd8').css({'margin': '0px auto', 'width': '55px', 'height':'120px', 'background-color':'rgba(255, 0, 0, 0)', 'visibility': 'hidden'});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #doorglassd8").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D8l, #frame3 #frame3back #doorpanel3D8, #frame3 #frame3back #doorpanel1D8, #frame3 #frame3back #doorpanel1D8k" ).tooltip({
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




$('#doorcenter16').on('click', function () {
    isRedOrBlue = "#doorcenter16";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D16');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
     var smalldoorglass = $('#frame3 .glass').css('background-image');
     smalldoorglass = smalldoorglass.replace('.png','.jpg');
     smalldoorglass=smalldoorglass.split('/');     //images, services, image.jpg
     var lastelem = smalldoorglass.pop();
     var lastelem1 = smalldoorglass.pop();//images, services     // lastelem: image.jpg
     smalldoorglass.push('smalldoorglass');     //images, services, large   // lastelem: image.jpg 
     smalldoorglass.push(lastelem);    //images, services, large, image.jpg
     smalldoorglass=smalldoorglass.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', smalldoorglass);
    
     $('div#displaydoor div div#beforecenter').empty();
     $('#doorcenter16').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter16').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter16 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter16 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter16 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter16 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
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
    
    $("#frame3 #table1 .glass").css({
   'background-image': smalldoorglass,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat',
                              });
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D16l, #frame3 #frame3back #doorpanel3D16, #frame3 #frame3back #doorpanel1D16, #frame3 #frame3back #doorpanel1D16k" ).tooltip({
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




$('#doorcenter17').on('click', function () {
    isRedOrBlue = "#doorcenter17";
    var bag = $('#frame3 .glass').css('background-image');
    var handler = $('#frame3 .doorhandler').css('background-image');
    var handlel = $('#frame3 .doorhandlel').css('background-image');
    var letterbox = $('#frame3 .doorletterbox').css('background-image');
    var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D17');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.png','.jpg');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass9');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
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
    
     $('div#displaydoor div div#beforecenter').empty();
     $('#doorcenter17').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
    $('div#displaydoor div div#beforecenter div#doorcenter17').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #handles').css({'margin': '0px auto', 'width': '138px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '26px 18px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table1 tr td').css({'width': '18px', 'height': '35px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 10px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 #table3 tr td').css({'width': '8px', 'height': '100px'});
    $('div#displaydoor div div#beforecenter div#doorcenter17 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'168px', 'border-radius': '5px',});
   /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */

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
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D17l, #frame3 #frame3back #doorpanel3D17, #frame3 #frame3back #doorpanel1D17, #frame3 #frame3back #doorpanel1D17k" ).tooltip({
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




$('#doorcenter18').on('click', function () {
    isRedOrBlue = "#doorcenter18";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
    var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalroundtop');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
    var exts = ['.jpg', '.gif', '.png'];
$('#frame3 .glass').each(function(){
    var $t = $(this);
    $.each(exts, function(i,v){
        $t.css('background-image').replace(v, '');
       
    });
});
    
    var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D18');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
    
     $('div#displaydoor div div#beforecenter').empty();
     $('#doorcenter18').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
     $('div#displaydoor div div#beforecenter div#doorcenter18').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
     $('div#displaydoor div div#beforecenter div#doorcenter18 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter18 #tableglass').css({'margin': '0px auto', 'width': '100%'});
     $('div#displaydoor div div#beforecenter div#doorcenter18 div.glass').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
     /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
    $("#frame3 #tdglassD3 div.glass").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
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
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D3l, #frame3 #frame3back #doorpanel3D3, #frame3 #frame3back #doorpanel1D3, #frame3 #frame3back #doorpanel1D3k" ).tooltip({
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



$('#doorcenter19').on('click', function () {
    isRedOrBlue = "#doorcenter19";
     var bag = $('#frame3 .glass').css('background-image');
     var handler = $('#frame3 .doorhandler').css('background-image');
     var handlel = $('#frame3 .doorhandlel').css('background-image');
     var letterbox = $('#frame3 .doorletterbox').css('background-image');
     var knocker = $('#frame3 .knocker').css('background-image');
     var handlevisibilityr = $('#frame3 .doorhandler').css('visibility');
     var handlevisibilityl = $('#frame3 .doorhandlel').css('visibility');
    
     var msrc = $('#frame3 .glass').css('background-image');
     msrc = msrc.replace('.jpg','.png');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('doorglass3');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
    
    var exts = ['.jpg', '.gif', '.png'];
$('#frame3 .glass').each(function(){
    var $t = $(this);
    $.each(exts, function(i,v){
        $t.css('background-image').replace(v, '');
       
    });
});
    
    var doorback = $('#frame3 #beforecenter div.doorimage').css('background-image');
     doorback = doorback.replace('.png','.jpg');
     doorback=doorback.split('/');     //images, services, image.jpg
     var lastelem = doorback.pop();
     var lastelem1 = doorback.pop();//images, services     // lastelem: image.jpg
     doorback.push('D19');     //images, services, large   // lastelem: image.jpg 
     doorback.push(lastelem);    //images, services, large, image.jpg
     doorback=doorback.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorback);
     
     var doorcenter = $('#frame3 .glass').css('background-image');
     doorcenter = doorcenter.replace('.png','.jpg');
     doorcenter=doorcenter.split('/');     //images, services, image.jpg
     var lastelem = doorcenter.pop();
     var lastelem1 = doorcenter.pop();//images, services     // lastelem: image.jpg
     doorcenter.push('doorcenter');     //images, services, large   // lastelem: image.jpg 
     doorcenter.push(lastelem);    //images, services, large, image.jpg
     doorcenter=doorcenter.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', doorcenter);
    
     $('div#displaydoor div div#beforecenter').empty();
$('#doorcenter19').clone().appendTo($('div#displaydoor div div#beforecenter'));
    
     $('div#displaydoor div div#beforecenter div#doorcenter19').css({'border-color': '#acacac', 'height': '340px', 'width': '138px', 'background-image': doorback});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #handles').css({'margin': '0px auto', 'width': '138px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table1').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '20px 4px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table1 tr td').css({'width': '18px', 'height': '40px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 #table3').css({'margin': '0px auto', 'width': '100%', 'border-spacing': '22px 22px'});
    $('div#displaydoor div div#beforecenter div#doorcenter19 #table3 tr td').css({'width': '10px', 'height': '100px'});
     $('div#displaydoor div div#beforecenter div#doorcenter19 div.glass19').css({'margin': '0px auto', 'width': '75%', 'height':'40px', 'border-radius': '50% / 100%', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0', 'visibility': 'hidden'});
     /* $("#frame3 .glass").css({
   'background-image': bag,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              }); */
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
    $("#frame3 #doorglassdefault2").css({
   'background-image': msrc,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    $("#frame3 #doorglassdefault1").css({
   'background-image': doorcenter,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
    
    
          //tooltip code start
       $(function() {
            $( "#frame3 #center" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 .ovalglass, #frame3 .glass" ).tooltip({
               content: "<strong>Click to view Glass</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #beforecenter" ).tooltip({
               content: "<strong>Click to view Doors</strong>",
               track:true
            }),
            $( "#frame3 #frame3back #doorpanel3D19l, #frame3 #frame3back #doorpanel3D19, #frame3 #frame3back #doorpanel1D19, #frame3 #frame3back #doorpanel1D19k" ).tooltip({
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
