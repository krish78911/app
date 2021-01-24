$(document).ready(function() {
       $('#right #glassright22').show();
       $('#left #glassleft22').show();
       $('#right #glassright2').hide();
       $('#left #glassleft2').hide();
    
});

$(document).ready(function(){
  $('#removepanel').on('click', function () {
      var bag = $('#frame3 .glass').css('background-image');
      
    

       $('#right #glassright22').css({'display':'block', 'background-image': bag, 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
       $('#left #glassleft22').css({'display':'block', 'background-image': bag, 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
       $('#right #glassright2').css({'display':'none'});
       $('#left #glassleft2').css({'display':'none'});
      
  });
});

$(document).ready(function(){
  $('#showpanel').on('click', function () {
       var bagp = $('#frame3 #glassright2').css('background-image');
      
       $('#right #glassright2').css({'display':'block', 'background-image': bagp});
       $('#left #glassleft2').css({'display':'block', 'background-image': bagp});
       $('#right #glassright22').css({'display':'none'});
       $('#left #glassleft22').css({'display':'none'});
      
  });
});
$(document).ready(function(){
  $('#right #glassright2, #left #glassleft2').on('click', function () {
       $('#right #glassright2').css({'display':'block'});
       $('#left #glassleft2').css({'display':'block'});
       $('#right #glassright22').css({'display':'none'});
       $('#left #glassleft22').css({'display':'none'});
      
  });
});




/*
$(document).ready(function(){
  $('#rightt').on('click', function () {
       $('#frame3 #handles .doorhandler').show();
       $('#frame3 #handles .doorhandlel').hide();
  });
});

$(document).ready(function(){
  $('#leftt').on('click', function () {
       $('#frame3 #handles .doorhandler').hide();
       $('#frame3 #handles .doorhandlel').show();
  });
});
*/

$(document).ready(function(){
  $('#rightt').on('click', function () {
       $('#frame3 #handles .doorhandler').css({'visibility': 'visible'});
       $('#frame3 #handles .doorhandlel').css({'visibility': 'hidden'});
  });
});

$(document).ready(function(){
  $('#leftt').on('click', function () {
       $('#frame3 #handles .doorhandler').css({'visibility': 'hidden'});
       $('#frame3 #handles .doorhandlel').css({'visibility': 'visible'});
  });
});