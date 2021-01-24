$(document).ready(function(){
  /*$('#finalizebtn').on('click', function () {
    $('#frame3outer').empty();
    $('#frame3').clone().appendTo($('#frame3outer'));  
    $('#frame3outer').css({'padding':'50px 0px', 'width':'350px'});
    $('#container2').css({'display':'block'});
    $('#container').css({'display':'none'});
    $('#topmenu').css({'display':'none'});
    $('#footer').css({'display':'none'});
    $('#myForm').css({'display':'block'});
    $('#container3 #gobackdoor').css({'display':'none'});
    //$('#outerframe').css({'background-image':'url("/images/D6.jpg")');
  });*/
    
    $('#editdoorbtn').on('click', function () {
    $('#container2').css({'display':'none'});
    $('#container').css({'display':'block'});
    $('#topmenu').css({'display':'block'});
    $('#container3 #gobackdoor').css({'display':'none'});
    $('#footer').css({'display':'block'});
    $('#myForm').css({'display':'none'});   
  });
    
    $('#gobackdoor').on('click', function () {
    $('#container2').css({'display':'none'});
    $('#container').css({'display':'block'});
    $('#topmenu').css({'display':'block'});
    $('#gobackdoor').css({'display':'none'});
    //$('#container3').css({'display':'none'});
    $('#footer').css({'display':'block'});
    $('#myForm').css({'display':'none'});   
  });
    
    $('#viewcart1').on('click', function () {
    $('#container2').css({'display':'none'});
    $('#container').css({'display':'none'});
    $('#container3').css({'display':'block'});
    $('#gobackdoor').css({'display':'block'});
    $('#topmenu').css({'display':'none'});
    $('#footer').css({'display':'block'});
    $('#myForm').css({'display':'none'}); 
    $('#container3 #gobackdoor').css({'display':'block'});
  });
    
    $('#frame3 #glassright2').on('click', function () {
    $('#doorboxpanelll').fadeIn();
  });
    
    $('#frame3 #glassright22').on('click', function () {
    $('#doorboxpanelll').fadeIn();
  });
    
    $('#frame3 #glassleft2').on('click', function () {
    $('#doorboxpanelll').fadeIn();
  });
    
    $('#frame3 #glassleft22').on('click', function () {
    $('#doorboxpanelll').fadeIn();
  });

});