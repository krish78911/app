
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
    $("#framehidden").hide();
    $("#defaultframe").hide(); 
    $("#doorcenter0").hide(); 
});

$(document).ready(function(){
  $('#framef1').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
     var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame1').html());
      $('#doorbox5 #frame3').css({'height':'330px', 'width': '253px'});
      $('#doorbox5 #frame1').css({'height':'330px', 'width': '250px'});
      $('#doorbox5 #frame1 #center-f1').css({'height':'270px', 'width': '120px'});
      $('#doorbox5 #frame1 #left #glassleft1-f5').css({'height':'260px', 'width': '50px'});
      $('#doorbox5 #frame1 #right #glassright1-f5').css({'height':'260px', 'width': '50px'});
      $('#doorbox5 #frame3').css({'border-color': 'rgba(0, 0, 0, 0.76)'});
      $('#doorbox5 #frame1 .ovalglass').css({'margin': '5px'});
      
      $('#frame3 #beforecenter').empty();
       $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      if(idd == 'doorcenter6')
      {
      $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef2').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
     var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
        
      
      $("#frame3 .glass").empty();
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame2').html()); 
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '350px');
      $('#doorbox5 #frame3').css('width', '200px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef4').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image'); 
      
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame4').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '290px');
      $('#doorbox5 #frame3').css('width', '250px');
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef5').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame5').html()); 
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '100%');
      $('#doorbox5 #frame3').css('width', '250px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef6').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3  #frame3back').empty();
      $('#frame3  #frame3back').html($('#frame6').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '290px');
      $('#doorbox5 #frame3').css('width', '200px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef7').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame7').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '100%');
      $('#doorbox5 #frame3').css('width', '200px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef8').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame8').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '100%');
      $('#doorbox5 #frame3').css('width', '130px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef10').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame10').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '100%');
      $('#doorbox5 #frame3').css('width', '200px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef11').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame111').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '290px');
      $('#doorbox5 #frame3').css('width', '200px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef12').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame12').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '130px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef13').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame13').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '130px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef14').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame14').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '193px'); 
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef15').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame15').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '193px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef16').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame16').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '345px');
      $('#doorbox5 #frame3').css('width', '193px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef17').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame17').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '350px');
      $('#doorbox5 #frame3').css('width', '250px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
  });
});

$(document).ready(function(){
  $('#framef18').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      var gate = $('#frame3 .doorimage').css('background-image'); 
      var idd = $('#frame3 .doorimage').attr('id');
      var botm = $('#frame3 .bottompanel').css('background-image');
      
      var msrc = $('#frame3 .glass').css('background-image');
     msrc=msrc.split('/');     //images, services, image.jpg
     var lastelem = msrc.pop();
     var lastelem1 = msrc.pop();//images, services     // lastelem: image.jpg
     msrc.push('ovalglass');     //images, services, large   // lastelem: image.jpg 
     msrc.push(lastelem);    //images, services, large, image.jpg
     msrc=msrc.join('/');  //"images/services/large/image.jpg"
     $(this).attr('src', msrc);
      
      $('#frame3 #frame3back').empty();
      $('#frame3 #frame3back').html($('#frame18').html());
      $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
      $('#doorbox5 #frame3').css('height', '330px');
      $('#doorbox5 #frame3').css('width', '250px');
      
      $('#frame3 #beforecenter').empty();
      $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
            });
      
      
      if(idd == 'doorcenter6')
      {
          $('#frame3 #beforecenter').empty();
      $('#doorcenter6').clone().appendTo($('#frame3 #beforecenter'));
      $('div#displaydoor div div#beforecenter div#doorcenter6').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table').css({'width': '95%', 'height':'120px', 'border-spacing': '20px', 'margin': '-12px auto'}); 
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass1').css({'margin-left': '10px', 'width': '45%', 'height':'120px', 'border-top-left-radius': '35px', 'border-bottom-left-radius': '35px'});
      $('div#displaydoor div div#beforecenter div#doorcenter6 table tr td#tdglass2').css({'margin-right': '10px', 'width': '45%', 'height':'120px', 'border-top-right-radius': '35px', 'border-bottom-right-radius': '35px'});
      
      $("#frame3 #doorcenter6").css({
   'background-image': gate,
   'background-size' : '100% 100%',
   'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter0'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter0').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter0').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          
          $("#frame3 #doorcenter0").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter1'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
          
          $("#frame3 #doorcenter1").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter2'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter2').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          
          $("#frame3 #doorcenter2").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter3'){
          $('#frame3 #beforecenter').empty();
         $('#doorcenter3').clone().appendTo($('#frame3 #beforecenter'));
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'}); 
         $('div#displaydoor div div#beforecenter div#doorcenter3 table').css({'margin': '0px auto', 'width': '100%'});
         $('div#displaydoor div div#beforecenter div#doorcenter3 div.glass').css({'margin': '0px auto', 'width': '62%', 'height':'24px', 'border-radius': '50% / 100%', 'border': '1px solid #b1b1b1', 'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'}); 
          $("#frame3 #doorcenter3").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter4'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter4').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter4').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 table').css({'margin': '16px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter4 div.glass').css({'margin': '0px auto', 'width': '35%', 'height':'60px', 'border-radius': '5px'});
          $("#frame3 #doorcenter4").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter5'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter5').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter5').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 table').css({'margin': '5px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter5 div.glass').css({'margin': '0px auto', 'width': '61%', 'height':'140px', 'border-radius': '22px'});
          $("#frame3 #doorcenter5").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      
      else if(idd == 'doorcenter7'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter7').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter7').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table').css({'width': '90%', 'height':'120px', 'border-spacing': '15px', 'margin': '0px auto'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass1').css({'border': '1px solid #b7b6b6', 'margin-left': '5px', 'width': '50%', 'height':'130px'});
          $('div#displaydoor div div#beforecenter div#doorcenter7 table tr td#tdglass2').css({'border': '1px solid #b7b6b6', 'margin-right': '10px', 'width': '50%', 'height':'130px'});
          $("#frame3 #doorcenter7").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter8'){
          $('#frame3 #beforecenter').empty();
          $('#doorcenter8').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter8').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 table').css({'margin': '30px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter8 div.glass').css({'margin': '0px auto', 'width': '50px', 'height':'90px', 'background-color':'rgba(255, 0, 0, 0.26)', 'border-radius': '100px/180px', 'border': '1px solid #a2a2a2'});
          $("#frame3 #doorcenter8").css({
            'background-image': gate,
            'background-size' : '100% 100%',
            'background-repeat' : 'no-repeat'
                              });
      }
      else if(idd == 'doorcenter9'){
          $('#doorcenter9').clone().appendTo($('#frame3 #beforecenter'));
          $('div#displaydoor div div#beforecenter div#doorcenter9').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 table').css({'margin': '-2px auto', 'width': '100%'});
          $('div#displaydoor div div#beforecenter div#doorcenter9 div.glass').css({'margin': '0px auto', 'width': '65%', 'height':'128px', 'border-radius': '5px',});
          $("#frame3 #doorcenter9").css({
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
 $(document).on('mouseover mouseout', '#frame3 .glass, #frame3 .ovalglass', function(event) {
     if (event.type == 'mouseover')
     {
       $('#frame3 .glass, #frame3 .ovalglass').css({'opacity': '0.3', 'background-color': '#bcbcbc'});
          event.stopImmediatePropagation();
     }
     else
     {
      $('#frame3 .glass, #frame3 .ovalglass').css({'opacity': '1', 'background-color': '#fff'});
     }
});
});

$(document).ready(function(){
 $(document).on('mouseover mouseout', '#frame3 #beforecenter', function(event) {
     if (event.type == 'mouseover')
     {
       $('#frame3 #beforecenter').css({'opacity': '0.5', 'background-color': '#9a3c3c'});
          event.stopImmediatePropagation();
     }
     else
     {
      $('#frame3 #beforecenter').css({'opacity': '1', 'background-color': '#fff'});
        
     }
});
});

$(document).ready(function(){
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
});

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
       $('#frame3 #frame3back').css({'background-color': '#9d9d9d'});
          event.stopImmediatePropagation();
     }
     else
     {
      $('#frame3 #frame3back').css({'background-color': 'rgba(0, 0, 0, 0.15)'});
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