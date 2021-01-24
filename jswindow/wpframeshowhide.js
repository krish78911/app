
$(document).ready(function() {
    $("#wframecontainer").hide();
    $("#page").hide();
    $("#doorboxpanelllww").hide();
    $("#wframe").css({'background-color':'#171717'}); 
});

$(document).ready(function() {
    // document is loaded and DOM is ready
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window6').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

});

$(document).ready(function(){
  $('#wfinalizebtn').on('click', function () {
    var fcolor = $('#windowframe3 #menuvalidcolor').css('background-color');
    if (fcolor == 'rgb(201, 206, 155)')
    {
      loadPopupBoxf();
    }
    else if (fcolor == 'rgb(208, 208, 208)')
    {
      loadPopupBoxf();
    }
    else if (fcolor == 'transparent' /*&& bag == 'rgba(247, 33, 33)'*/)
    {
      loadPopupBoxf();
    }
    else
    {
     $('#frame3outer').empty();
     $('#windowframe3').clone().appendTo($('#frame3outer'));  
     $('#frame3outer').css({'padding':'20px 0px', 'width':'350px'});
     $('#topmenu').css({'display':'none'});
     $("#container").hide(); 
     $("#container2").show(); 
    }
  });
    
    $('#wfinalizebtnbelow').on('click', function () {
    var fcolor = $('#windowframe3 #menuvalidcolor').css('background-color');
    if (fcolor == 'rgb(201, 206, 155)')
    {
      loadPopupBoxf();
    }
    else if (fcolor == 'rgb(208, 208, 208)')
    {
      loadPopupBoxf();
    }
    else if (fcolor == 'transparent' /*&& bag == 'rgba(247, 33, 33)'*/)
    {
      loadPopupBoxf();
    }
    else
    {
     $('#frame3outer').empty();
     $('#windowframe3').clone().appendTo($('#frame3outer'));  
     $('#frame3outer').css({'padding':'20px 0px', 'width':'350px'});
     $('#topmenu').css({'display':'none'});
     $("#container").hide(); 
     $("#container2").show(); 
    }
  });
    
    $('#weditdoorbtn').on('click', function () {
    $('#container2').css({'display':'none'});
    $('#container').css({'display':'block'});
    $('#topmenu').css({'display':'block'});
    $('#container3 #gobackdoor').css({'display':'none'});
    $('#footer').css({'display':'block'});
    $('#myForm').css({'display':'none'});   
  });
    
    
    $('#finalizebtn').on('click', function () {
    $('#frame3outer').empty();
    $('#frame3').clone().appendTo($('#frame3outer'));  
    $('#frame3outer').css({'padding':'50px 0px', 'width':'350px'});
    $('#wcontainer2').css({'display':'block'});
    $('#container').css({'display':'none'});
    $('#topmenu').css({'display':'none'});
    $('#footer').css({'display':'none'});
    $('#myForm').css({'display':'block'});
    $('#container3 #gobackdoor').css({'display':'none'});
    //$('#outerframe').css({'background-image':'url("/images/D6.jpg")');
  });
    

    $('#viewcart1').on('click', function () {
    $('#container2').css({'display':'none'});
    $('#container').css({'display':'none'});
    $('#container3').css({'display':'block'});
    $('#topmenu').css({'display':'none'});
    $('#footer').css({'display':'block'});
    $('#myForm').css({'display':'none'}); 
    //$('#container3 #gobackdoor').css({'display':'block'});
  });
    
    $('#gobackdoor').on('click', function () {
    $('#container2').css({'display':'none'});
    $('#container').css({'display':'block'});
    $('#topmenu').css({'display':'block'});
    $('#container3').css({'display':'none'});
    $('#footer').css({'display':'block'});
    $('#myForm').css({'display':'none'});   
  });
    
          $('#popup_boxf').click( function() {            
            unloadPopupBoxf();
        });
        
        $('#containerf').click( function() {
            unloadPopupBoxf();
        });
        $('#popup_boxd').click( function() {            
            unloadPopupBoxd();
        });
        
        $('#containerd').click( function() {
            unloadPopupBoxd();
        });
        $('#popup_boxg').click( function() {            
            unloadPopupBoxg();
        });
        
        $('#containerg').click( function() {
            unloadPopupBoxg();
        });
        $('#popup_boxh').click( function() {            
            unloadPopupBoxh();
        });
        
        $('#containerh').click( function() {
            unloadPopupBoxh();
        });

        function unloadPopupBoxf() {    // TO Unload the Popupbox
            $('#popup_boxf').fadeOut("slow");     
            $("#containerf").css({ // this is just for style        
                "opacity": "1"  
            }); 
            $("#page").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }
        function unloadPopupBoxd() {    // TO Unload the Popupbox
            $('#popup_boxd').fadeOut("slow");     
            $("#containerd").css({ // this is just for style        
                "opacity": "1"  
            }); 
            $("#page").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }
        function unloadPopupBoxg() {    // TO Unload the Popupbox
            $('#popup_boxg').fadeOut("slow");     
            $("#containerg").css({ // this is just for style        
                "opacity": "1"  
            }); 
            $("#page").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }
        function unloadPopupBoxh() {    // TO Unload the Popupbox
            $('#popup_boxh').fadeOut("slow");     
            $("#containerh").css({ // this is just for style        
                "opacity": "1"  
            }); 
            $("#page").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }
        
        function loadPopupBoxf() {    // To Load the Popupbox
            $('#popup_boxf').fadeIn("slow");
            $("#containerf").css({ // this is just for style
                "opacity": "0.3"  
            }); 
            $("#page").css({ // this is just for style        
                "opacity": "0.3"  
            }); 
        }   
        function loadPopupBoxd() {    // To Load the Popupbox
            $('#popup_boxd').fadeIn("slow");
            $("#containerd").css({ // this is just for style
                "opacity": "0.3"  
            });   
            $("#page").css({ // this is just for style        
                "opacity": "0.3"  
            }); 
        }
        function loadPopupBoxg() {    // To Load the Popupbox
            $('#popup_boxg').fadeIn("slow");
            $("#containerg").css({ // this is just for style
                "opacity": "0.3"  
            });   
            $("#page").css({ // this is just for style        
                "opacity": "0.3"  
            }); 
        }
        function loadPopupBoxh() {    // To Load the Popupbox
            $('#popup_boxh').fadeIn("slow");
            $("#containerh").css({ // this is just for style
                "opacity": "0.3"  
            }); 
            $("#page").css({ // this is just for style        
                "opacity": "0.3"  
            }); 
        }
    
});

$(document).ready(function(){
  $('#wframef1').on('click', function () {
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window1').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});

$(document).ready(function(){
  $('#wframef2').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window2').html());
     // $('#windowframe3 #window2').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});

$(document).ready(function(){
  $('#wframef3').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window3').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});

$(document).ready(function(){
  $('#wframef4').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
     $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      //alert(backdoordisp2);
      
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window4').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});

$(document).ready(function(){
  $('#wframef5').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window5').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});


$(document).ready(function(){
  $('#wframef555').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window555').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});



$(document).ready(function(){
  $('#wframef6').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window6').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});

$(document).ready(function(){
  $('#wframef7').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window7').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});

$(document).ready(function(){
  $('#wframef8').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window8').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});

$(document).ready(function(){
  $('#wframef9').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
     $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window9').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});


$(document).ready(function(){
  $('#wframef10').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window10').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});


$(document).ready(function(){
  $('#wframef11').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window11').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});


$(document).ready(function(){
  $('#wframef12').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window12').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});


$(document).ready(function(){
  $('#wframef13').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
     var bagback = $('#windowframe3 table').css('background-color'); 
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window13').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});


$(document).ready(function(){
  $('#wframef14').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td #divintable14').css({'border-color'});
      var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window14').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});

  });
});


$(document).ready(function(){
  $('#wframef15').on('click', function () { 
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window15').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});


$(document).ready(function(){
  $('#wframef16').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window16').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef17').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window17').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef18').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window18').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef19').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window19').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef20').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window20').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef21').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window21').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});


$(document).ready(function(){
  $('#wframef22').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window22').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef23').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window23').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef24').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window24').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});


$(document).ready(function(){
  $('#wframef25').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window25').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef26').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window26').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef27').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window27').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef28').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window28').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef29').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window29').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef30').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window30').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef31').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window31').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef32').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window32').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef33').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window33').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef34').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window34').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef35').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window35').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef36').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window36').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});


$(document).ready(function(){
  $('#wframef355').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window355').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef366').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window366').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef37').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window37').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef38').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window38').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef39').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window39').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});


$(document).ready(function(){
  $('#wframef40').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'visible',
   'display' : 'block',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window40').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef41').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window41').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});


$(document).ready(function(){
  $('#wframef42').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window42').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});


$(document).ready(function(){
  $('#wframef43').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window41').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef44').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window41').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef45').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window41').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef46').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window41').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});

$(document).ready(function(){
  $('#wframef47').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-top-color');
      var door = $('#windowframe3 #door2').css('border-top-color');
      var middle1 = $('#windowframe3 #middle').css('border-right-color');
      var middle2 = $('#windowframe3 #middle').css('border-left-color');
      var middle3 = $('#windowframe3 #middle').css('border-top-color');
      var middle4 = $('#windowframe3 #middle').css('border-bottom-color');
      var gate = $('#windowframe3 #door1').css('border-top-color'); 
      var idd = $('#windowframe3 #door1').css('border-right-color');
      var botm = $('#windowframe3 #door1').css('border-bottom-color');
      var backdoordisp1 = $('#windowframe3 .rightw2').css('display');
      var backdoordisp2 = $('#winglass .rightw2').css('display');
      $("#doorboxpanelllww").css({
   'visibility': 'hidden',
   'display' : 'none',
                              });
      //var inn = $('#windowframe3 table td div').css({'border-color'});
     var bagback = $('#windowframe3 table').css('background-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#window41').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag, 'background-color': bagback});
      $('#windowframe3 #door2').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #door1').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #middle').css({'border-right-color':idd, 'border-bottom-color':botm, 'border-left-color':idd, 'border-top-color':botm});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag});
  });
});
<!--window frame color change start-->
    
$(document).ready(function(){
  $('#wsubmit1').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'black', 'background-color': '#533e3e'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#533e3e'});
      $('#windowframe3 #door1').css({'border-right-color':'#333', 'border-bottom-color':'#888', 'border-top-color':'#888', 'border-left-color':'#333'});
      $('#windowframe3 #door2').css({'border-right-color':'#333', 'border-bottom-color':'#888', 'border-top-color':'#888', 'border-left-color':'#333'});
      $('#windowframe3 #middle').css({'border-right-color':'#333', 'border-bottom-color':'#888', 'border-top-color':'#888', 'border-left-color':'#333'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D1.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Black" );
      $( "#outsideviewtext11" ).text( "Black" );

  });
});

$(document).ready(function(){
  $('#wsubmit2').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'#f72121', 'background-color': '#ffa5a5'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#ffa5a5'});
      $('#windowframe3 #door1').css({'border-right-color':'#ff4141', 'border-bottom-color':'#f0a3a3', 'border-top-color':'#f0a3a3', 'border-left-color':'#ff4141'});
      $('#windowframe3 #door2').css({'border-right-color':'#ff4141', 'border-bottom-color':'#f0a3a3', 'border-top-color':'#f0a3a3', 'border-left-color':'#ff4141'});
      $('#windowframe3 #middle').css({'border-right-color':'#ff4141', 'border-bottom-color':'#f0a3a3', 'border-top-color':'#f0a3a3', 'border-left-color':'#ff4141'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D7.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Red" );
      $( "#outsideviewtext11" ).text( "Red" );
  });
});

$(document).ready(function(){
  $('#wsubmit3').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'#d0d0d0', 'background-color': '#b1a3a3'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#b1a3a3'});
      $('#windowframe3 #door1').css({'border-right-color':'#dedede', 'border-bottom-color':'#ededed', 'border-top-color':'#ededed', 'border-left-color':'#dedede'});
      $('#windowframe3 #door2').css({'border-right-color':'#dedede', 'border-bottom-color':'#ededed', 'border-top-color':'#ededed', 'border-left-color':'#dedede'});
      $('#windowframe3 #middle').css({'border-right-color':'#dedede', 'border-bottom-color':'#ededed', 'border-top-color':'#ededed', 'border-left-color':'#dedede'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D9.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "White" );
      $( "#outsideviewtext11" ).text( "White" );

  });
});

$(document).ready(function(){
  $('#wsubmit4').on('click', function () {     
      $('#windowframe3 table').css({'border-color':'rgb(197, 122, 65)', 'background-color': 'rgb(216, 144, 92)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': 'rgb(216, 144, 92)'});
      $('#windowframe3 #door1').css({'border-right-color':'rgb(208, 134, 79)', 'border-bottom-color':'rgb(214, 142, 89)', 'border-top-color':'rgb(214, 142, 89)', 'border-left-color':'rgb(208, 134, 79)'});
      $('#windowframe3 #door2').css({'border-right-color':'rgb(208, 134, 79)', 'border-bottom-color':'rgb(214, 142, 89)', 'border-top-color':'rgb(214, 142, 89)', 'border-left-color':'rgb(208, 134, 79)'});
      $('#windowframe3 #middle').css({'border-right-color':'rgb(208, 134, 79)', 'border-bottom-color':'rgb(214, 142, 89)', 'border-top-color':'rgb(214, 142, 89)', 'border-left-color':'rgb(208, 134, 79)'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D3.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Oak" );
      $( "#outsideviewtext11" ).text( "Oak" );

  });
});

$(document).ready(function(){
$('#wsubmit5').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'#4475d9', 'background-color': '#81a3e5'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#81a3e5'});
      $('#windowframe3 #door1').css({'border-right-color':'#5884d4', 'border-bottom-color':'#92b3f5', 'border-top-color':'#92b3f5', 'border-left-color':'#5884d4'});
      $('#windowframe3 #door2').css({'border-right-color':'#5884d4', 'border-bottom-color':'#92b3f5', 'border-top-color':'#92b3f5', 'border-left-color':'#5884d4'});
      $('#windowframe3 #middle').css({'border-right-color':'#5884d4', 'border-bottom-color':'#92b3f5', 'border-top-color':'#92b3f5', 'border-left-color':'#5884d4'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D2.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Blue" );
      $( "#outsideviewtext11" ).text( "Blue" );

  });
});

$(document).ready(function(){
$('#wsubmit6').on('click', function () {     
     var backdoorcolor = $('#windowframe3 table').css('border-color');
   // alert(backdoorcolor);
      $('#windowframe3 table').css({'border-color':'rgb(18, 80, 57)', 'background-color': 'rgb(28, 114, 80)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': 'rgb(28, 114, 80)'});
      $('#windowframe3 #door1').css({'border-right-color':'rgb(21, 96, 67)', 'border-bottom-color':'rgb(32, 124, 90)', 'border-top-color':'rgb(32, 124, 90)', 'border-left-color':'rgb(21, 96, 67)'});
      $('#windowframe3 #door2').css({'border-right-color':'rgb(21, 96, 67)', 'border-bottom-color':'rgb(32, 124, 90)', 'border-top-color':'rgb(32, 124, 90)', 'border-left-color':'rgb(21, 96, 67)'});
      $('#windowframe3 #middle').css({'border-right-color':'rgb(21, 96, 67)', 'border-bottom-color':'rgb(32, 124, 90)', 'border-top-color':'rgb(32, 124, 90)', 'border-left-color':'rgb(21, 96, 67)'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D6.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Green" );
      $( "#outsideviewtext11" ).text( "Green" );

  });
});

$(document).ready(function(){
$('#wsubmit7').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'#800020', 'background-color': '#ac183d'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#ac183d'});
      $('#windowframe3 #door1').css({'border-right-color':'#98032a', 'border-bottom-color':'#bc1c37', 'border-top-color':'#bc1c37', 'border-left-color':'#98032a'});
      $('#windowframe3 #door2').css({'border-right-color':'#98032a', 'border-bottom-color':'#bc1c37', 'border-top-color':'#bc1c37', 'border-left-color':'#98032a'});
      $('#windowframe3 #middle').css({'border-right-color':'#98032a', 'border-bottom-color':'#bc1c37', 'border-top-color':'#bc1c37', 'border-left-color':'#98032a'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D4.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Burgundy" );
      $( "#outsideviewtext11" ).text( "Burgundy" );

  });
});

$(document).ready(function(){
$('#wsubmit8').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'#5A0000', 'background-color': '#7e1111'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#7e1111'});
      $('#windowframe3 #door1').css({'border-right-color':'#760707', 'border-bottom-color':'#8e0707', 'border-top-color':'#8e0707', 'border-left-color':'#760707'});
      $('#windowframe3 #door2').css({'border-right-color':'#760707', 'border-bottom-color':'#8e0707', 'border-top-color':'#8e0707', 'border-left-color':'#760707'});
      $('#windowframe3 #middle').css({'border-right-color':'#760707', 'border-bottom-color':'#8e0707', 'border-top-color':'#8e0707', 'border-left-color':'#760707'});
    $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D8.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
    $( "#outsideviewtext1" ).text( "Rosewood" );
    $( "#outsideviewtext11" ).text( "Rosewood" );

  });
});

$(document).ready(function(){
$('#wsubmit9').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'#e6c3a7', 'background-color': '#cebbad'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#cebbad'});
      $('#windowframe3 #door1').css({'border-right-color':'#f0c19e', 'border-bottom-color':'#f7e0cd', 'border-top-color':'#f7e0cd', 'border-left-color':'#f0c19e'});
      $('#windowframe3 #door2').css({'border-right-color':'#f0c19e', 'border-bottom-color':'#f7e0cd', 'border-top-color':'#f7e0cd', 'border-left-color':'#f0c19e'});
      $('#windowframe3 #middle').css({'border-right-color':'#f0c19e', 'border-bottom-color':'#f7e0cd', 'border-top-color':'#f7e0cd', 'border-left-color':'#f0c19e'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D5.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
    
      $( "#outsideviewtext1" ).text( "Cream" );
      $( "#outsideviewtext11" ).text( "Cream" );
  });
});


$(document).ready(function(){
  $('#wsubmit10').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'black', 'background-color': '#533e3e'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#533e3e'});
      $('#windowframe3 #door1').css({'border-right-color':'#333', 'border-bottom-color':'#888', 'border-top-color':'#888', 'border-left-color':'#333'});
      $('#windowframe3 #door2').css({'border-right-color':'#333', 'border-bottom-color':'#888', 'border-top-color':'#888', 'border-left-color':'#333'});
      $('#windowframe3 #middle').css({'border-right-color':'#333', 'border-bottom-color':'#888', 'border-top-color':'#888', 'border-left-color':'#333'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D1.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Black/White" );
      $( "#outsideviewtext11" ).text( "Black/White" );

  });
});


$(document).ready(function(){
  $('#wsubmit11').on('click', function () {     
      $('#windowframe3 table').css({'border-color':'rgb(197, 122, 65)', 'background-color': 'rgb(216, 144, 92)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': 'rgb(216, 144, 92)'});
      $('#windowframe3 #door1').css({'border-right-color':'rgb(208, 134, 79)', 'border-bottom-color':'rgb(214, 142, 89)', 'border-top-color':'rgb(214, 142, 89)', 'border-left-color':'rgb(208, 134, 79)'});
      $('#windowframe3 #door2').css({'border-right-color':'rgb(208, 134, 79)', 'border-bottom-color':'rgb(214, 142, 89)', 'border-top-color':'rgb(214, 142, 89)', 'border-left-color':'rgb(208, 134, 79)'});
      $('#windowframe3 #middle').css({'border-right-color':'rgb(208, 134, 79)', 'border-bottom-color':'rgb(214, 142, 89)', 'border-top-color':'rgb(214, 142, 89)', 'border-left-color':'rgb(208, 134, 79)'});
      $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D3.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
      $( "#outsideviewtext1" ).text( "Oak/White" );
      $( "#outsideviewtext11" ).text( "Oak/White" );

  });
});


$(document).ready(function(){
$('#wsubmit12').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color':'#5A0000', 'background-color': '#7e1111'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#7e1111'});
      $('#windowframe3 #door1').css({'border-right-color':'#760707', 'border-bottom-color':'#8e0707', 'border-top-color':'#8e0707', 'border-left-color':'#760707'});
      $('#windowframe3 #door2').css({'border-right-color':'#760707', 'border-bottom-color':'#8e0707', 'border-top-color':'#8e0707', 'border-left-color':'#760707'});
      $('#windowframe3 #middle').css({'border-right-color':'#760707', 'border-bottom-color':'#8e0707', 'border-top-color':'#8e0707', 'border-left-color':'#760707'});
    $('#winglass .rightw2').css({'background-image' : 'url("windowimages/bottompanel/D8.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
    $( "#outsideviewtext1" ).text( "Rosewood/White" );
    $( "#outsideviewtext11" ).text( "Rosewood/White" );

  });
});


<!--window frame color change end-->
    
    
    
    
    
$(document).ready(function() {
    $("#doorbox10").hide();
    $('#myForm').css({'display':'none'});
});
$(document).ready(function(){
  $("#wframe").click(function(){
      //  $('#frameid').empty();
      //  $('#doorbox2').appendTo($('#frameid'));
      //  $("#doorbox2").show();
  //$("#frameid2").show();     
    /*$("#doorbox1").replaceWith($("#doorbox2"));*/
      $("#doorbox10").fadeOut();
      $("#doorbox4").fadeIn(2000);
      $("#doorbox10").css({'float':'left'}); 
  });
    
    
  $("#wpanel11").click(function(){
      $("#doorbox4").fadeOut();
      $("#doorbox10").fadeIn(2000);
      $("#doorbox10").css({'float':'left', 'margin-left': '20px'}); 
  });
    
    
});