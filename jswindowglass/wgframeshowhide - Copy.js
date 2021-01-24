
$(document).ready(function() {
    $("#wframecontainer").hide();
    $("#page").hide();
    $("#wframe").css({'background-color':'#171717'}); 
    
    $("#logo2").on("click", function () {
       $("#topmenunav1").fadeToggle(200);
       $("#topmenunav2").fadeToggle(400);
      $("#topmenunav3").fadeToggle(600);
      $("#topmenunav4").fadeToggle(800);
      $("#topmenunav5").fadeToggle(1000);
      //$("#doorboxpanelll").fadeOut();
     var evt = e ? e:window.event;
 if (evt.stopPropagation)    evt.stopPropagation();
 if (evt.cancelBubble!=null) evt.cancelBubble = true;
}); 
});

$(document).ready(function() {
    // document is loaded and DOM is ready
    var bag = $('#windowframe3 table').css('border-color');
      var gate = $('#windowframe3 table td').css('border-color'); 
      var idd = $('#windowframe3 table td').attr('border-right-color');
      var botm = $('#windowframe3 table td').css('border-bottom-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass4').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag, 'background-color': '#d3d3d3'});
      $('#windowframe3 table td').css({'border-color': gate, 'border-right-color':idd, 'border-bottom-color':botm});
      $('#windowframe3 table td table').css({'border-color': gate, 'border-right-color':idd, 'border-bottom-color':botm});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
    
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
});

$(document).ready(function(){
  $('#wfinalizebtn').on('click', function () {
    var fcolor = $('#windowframe3 #menuvalidcolor').css('background-color');
     //alert(bag); 
    if (fcolor == 'rgb(201, 206, 155)')
    {
      loadPopupBoxf();
    }
    else if (fcolor == 'rgb(230, 230, 230)')
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
     //alert(bag); 
    if (fcolor == 'rgb(201, 206, 155)')
    {
      loadPopupBoxf();
    }
    else if (fcolor == 'rgb(230, 230, 230)')
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
    
    
    /*Frame Button Click Ends*/
        
        
    
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
  $('#wgframef1').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass1').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef46extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass46extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef47extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass47extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef48extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass48extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef49extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass49extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef1extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass1extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef7extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass7extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef8extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass8extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef9extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass9extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef10extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass10extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef11extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass11extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef12extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass12extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef13extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass13extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef14extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass14extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef15extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass15extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef35extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass35extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef36extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass36extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef37extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass37extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef38extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass38extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef39extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass39extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef40extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass40extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef41extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass41extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef42extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass42extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef43extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass43extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef44extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass44extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef45extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass45extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});





$(document).ready(function(){
  $('#wgframef16extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass16extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef17extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass17extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef61extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass61extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef62extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass62extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef63extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass63extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef64extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass64extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef65extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass65extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef66extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass66extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef67extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass67extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef68extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass68extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef69extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass69extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef70extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass70extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef71extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass71extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef72extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass72extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef73extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass73extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef74extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass74extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef75extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass75extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef76extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass76extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef77extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass77extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});




$(document).ready(function(){
  $('#wgframef78extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass78extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef79extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass79extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef80extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass80extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef81extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass81extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef82extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass82extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});




$(document).ready(function(){
  $('#wgframef56extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass56extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef57extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass57extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});




$(document).ready(function(){
  $('#wgframef58extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass58extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef59extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass59extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});




$(document).ready(function(){
  $('#wgframef60extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass60extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});




$(document).ready(function(){
  $('#wgframef57extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass57extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});




$(document).ready(function(){
  $('#wgframef18extra').on('click', function () {
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass18extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef2extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass2extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef4extra').on('click', function () {
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass4extra').html());
      //$('#windowframe3 #window1').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef2').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass2').html());
     // $('#windowframe3 #window2').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
     $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});

      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});

$(document).ready(function(){
  $('#wgframef22').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass22').html());
     // $('#windowframe3 #window2').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
     $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});

      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});

$(document).ready(function(){
  $('#wgframef5extra').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass5extra').html());
     // $('#windowframe3 #window2').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
     $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});

      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef6extra').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass6extra').html());
     // $('#windowframe3 #window2').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
     $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});

      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef3').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass3').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef33').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass33').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef4').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass4').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});

$(document).ready(function(){
  $('#wgframef44').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass44').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef5').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass5').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef50extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass50extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef51extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass51extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef52extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass52extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef53extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass53extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef54extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass54extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef55extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass55extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef6').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass6').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef6e').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass6e').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef19extra').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass19extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef66').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass66').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef66e').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass66e').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef7').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass7').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef7e').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass7e').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef77').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass77').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef8').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass8').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef88').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass88').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef9').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass9').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef99').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass99').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef10').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass10').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef10e').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass10e').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef101, #wgframef101e').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass101').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef11').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass11').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef11e').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass11e').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef111, #wgframef111e').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass111').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef12').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass12').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef12e').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass12e').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef121').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass121').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef13').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass13').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef14').on('click', function () {    
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass14').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable14').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef15').on('click', function () { 
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass15').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable15').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef16').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass16').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});

$(document).ready(function(){
  $('#wgframef3extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass3extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef20extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass20extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef21extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass21extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef22extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass22extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef23extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass23extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef24extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass24extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef25extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass25extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef26extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass26extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});



$(document).ready(function(){
  $('#wgframef27extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass27extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef28extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass28extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef29extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass29extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef30extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass30extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef31extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass31extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef32extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass32extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef33extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass33extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});



$(document).ready(function(){
  $('#wgframef17').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass17').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});



$(document).ready(function(){
  $('#wgframef83extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass83extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});


$(document).ready(function(){
  $('#wgframef84extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass84extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});



$(document).ready(function(){
  $('#wgframef85extra').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass85extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});




$(document).ready(function(){
  $('#wgframef18').on('click', function () {     
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass18').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table td #divintable16').css({'border-color':bag});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});

$(document).ready(function(){
  $('#wgframef19').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass19').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgframef34extra').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass34extra').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef20').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass20').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef21').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass21').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});


$(document).ready(function(){
  $('#wgframef222').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass222').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});



$(document).ready(function(){
  $('#wgframef232').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#windowglass232').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );

  });
});

$(document).ready(function(){
  $('#wgsashframef1').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#sashwindowglass1').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag1});
      $('#windowframe3 table #tabe2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv1').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag1, 'border-right-color': bag1});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});



$(document).ready(function(){
  $('#wgsashframef2').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#sashwindowglass2').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv1').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv5').css({'border-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag1});
      $('#windowframe3 table #tabe2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerdiv6').css({'background-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag1, 'border-right-color': bag1});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});



$(document).ready(function(){
  $('#wgsashframef3').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#sashwindowglass3').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #innerdiv4').css({'border-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag1});
      $('#windowframe3 table #tabe2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv1').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag1, 'border-right-color': bag1});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});



$(document).ready(function(){
  $('#wgsashframef4').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#sashwindowglass4').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table #innerdiv44').css({'border-color': bag1});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag1});
      $('#windowframe3 table #tabe2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv14').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag1, 'border-right-color': bag1});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Inside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Inside View" );
  });
});




$(document).ready(function(){
  $('#baywindowframef1').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#baywindowglass1').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table #innerdiv44').css({'border-color': bag});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag});
      $('#windowframe3 table #tabe2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #baywindowglass11').css({'margin-top': '20px', 'background-image':'url("windowglassimages/baywindowback.jpg")'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv14').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': idd, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag, 'border-right-color': bag});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Outside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Outside View" );
  });
});

$(document).ready(function(){
  $('#baywindowframef2').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#baywindowglass2').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table #innerdiv44').css({'border-color': bag});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag});
      $('#windowframe3 table #tabe2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #baywindowglass22').css({'margin-top': '20px', 'background-image':'url("windowglassimages/baywindowback.jpg")'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv14').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': idd, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag, 'border-right-color': bag});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Outside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Outside View" );
  });
});


$(document).ready(function(){
  $('#baywindowframef3').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#baywindowglass3').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table #innerdiv44').css({'border-color': bag});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag});
      $('#windowframe3 table #tabe2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #baywindowglass33').css({'margin-top': '20px', 'background-image':'url("windowglassimages/baywindowback.jpg")'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv14').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': idd, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag, 'border-right-color': bag});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Outside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Outside View" );
  });
});

$(document).ready(function(){
  $('#baywindowframef4').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#baywindowglass4').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table #innerdiv44').css({'border-color': bag});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag});
      $('#windowframe3 table #tabe2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #baywindowglass44').css({'margin-top': '20px', 'background-image':'url("windowglassimages/baywindowback.jpg")'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv14').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': idd, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag, 'border-right-color': bag});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Outside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Outside View" );
  });
});

$(document).ready(function(){
  $('#baywindowframef5').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#baywindowglass5').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table #innerdiv44').css({'border-color': bag});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag});
      $('#windowframe3 table #tabe2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #baywindowglass55').css({'margin-top': '20px', 'background-image':'url("windowglassimages/baywindowback.jpg")'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv14').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': idd, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag, 'border-right-color': bag});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Outside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Outside View" );
  });
});

$(document).ready(function(){
  $('#baywindowframef6').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
      $('#windowframe3').empty();
      $('#windowframe3').html($('#baywindowglass6').html());
      $('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      $('#windowframe3 table #innerdiv44').css({'border-color': bag});
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag});
      $('#windowframe3 table #tabe2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #baywindowglass66').css({'margin-top': '20px', 'background-image':'url("windowglassimages/baywindowback.jpg")'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv14').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': idd, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag, 'border-right-color': bag});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
      $('#windowframe3 #menuvalidcolor').css({'background-color': bag1});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': bag1});
      
      $( "#outsideviewtext" ).text( "This is Outside View" );
      $( "#outsideviewtextexpwg" ).text( "This is Outside View" );
  });
});


/*$(document).ready(function(){
  $('#wgsashframef5').on('click', function () {   
      
      var bag = $('#windowframe3 table').css('border-color');
      var bag1 = $('#windowframe3 table').css('background-color');
      var gate1 = $('#windowframe3 table #outerdiv').css('border-top-color'); 
      var gate2 = $('#windowframe3 table #outerdiv').css('border-bottom-color'); 
      var gate3 = $('#windowframe3 table #outerdiv').css('border-right-color'); 
      var gate4 = $('#windowframe3 table #outerdiv').css('border-left-color'); 
      var idd = $('#windowframe3 table #innerdiv').css('border-color');
     
      $('#windowframe3').empty();
      $('#windowframe3').html($('#sashwindowglass5').html());
      //$('#windowframe3 #window3').css({'height':'330px', 'width': '253px'});
      $('#windowframe3').css({'background-image':'none', 'border': '0px solid #fff'});
      
      $('#windowframe3 table').css({'border-color': bag1, 'background-color': bag1});
      $('#windowframe3 table #tabe1').css({'border-color': bag});
      $('#windowframe3 table #tabe2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':gate3, 'border-top-color':gate1, 'border-left-color':gate4, 'border-bottom-color':gate2});
      $('#windowframe3 table #innerdiv').css({'border-color': bag1});
      $('#windowframe3 table #innerdiv1').css({'border-color': bag});
      $('#windowframe3 table #innerdiv2').css({'border-color': bag, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline').css({'border-color': bag1, 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #innerline2').css({'border-color': idd, 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': bag, 'border-right-color': bag});
      $('#windowframe3 table #innerline3').css({'border-color': bag1, 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 table #trbefore').css({'background-color': bag1});
  });
});*/

<!--window frame color change start-->
    
$(document).ready(function(){
  $('#wsubmit1').on('click', function () {     
      
      $('#windowframe3 table').css({'border-color': '#7e7e7e', 'background-color': '#4b4646'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#585858', 'border-top-color':'#a5a5a5', 'border-left-color':'#585858', 'border-bottom-color':'#a5a5a5'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#6a6a6a'});

      $('#windowframe3 #innerdiv14').css({'border-color': '#4b4646'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#7e7e7e'});
      $('#windowframe3 #innerline2').css({'border-color': '#726c6c', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#4b4646', 'border-right-color': '#4b4646'});
      $('#windowframe3 #innerline3').css({'border-color': '#7e7e7e', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#7e7e7e'});
      $('#windowframe3 #innerline').css({'border-color': '#4b4646', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#7e7e7e'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#4b4646'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#4b4646'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#4b4646'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#4b4646'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#4b4646'});
      
      $( "#outsideviewtext1" ).text( "Black" );
      $( "#outsideviewtext11" ).text( "Black" );


  });
});

$(document).ready(function(){
  $('#wsubmit2').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color': '#f72121', 'background-color': '#d01c1c'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#e65151', 'border-top-color':'#eb8a8a', 'border-left-color':'#e65151', 'border-bottom-color':'#eb8a8a'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#e56464'});
      
      $('#windowframe3 #innerdiv14').css({'border-color': '#890000'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#f72121'});
      $('#windowframe3 #innerline2').css({'border-color': '#b22f2f', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#890000', 'border-right-color': '#890000'});
      $('#windowframe3 #innerline3').css({'border-color': '#f72121', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#f72121'});
      $('#windowframe3 #innerline').css({'border-color': '#890000', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#f72121'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#890000'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#890000'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#890000'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#d01c1c'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#d01c1c'});
      
      $( "#outsideviewtext1" ).text( "Red" );
      $( "#outsideviewtext11" ).text( "Red" );

  });
});

$(document).ready(function(){
  $('#wsubmit3').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color': '#d3d3d3', 'background-color': '#ccc'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#d9d9d9', 'border-top-color':'#f7f7f7', 'border-left-color':'#d9d9d9', 'border-bottom-color':'#f7f7f7'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#e5e5e5'});
      
      $('#windowframe3 #innerdiv14').css({'border-color': '#ccc'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#d3d3d3'});
      $('#windowframe3 #innerline2').css({'border-color': '#d8d8d8', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#ccc', 'border-right-color': '#ccc'});
      $('#windowframe3 #innerline3').css({'border-color': '#d3d3d3', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#d3d3d3'});
      $('#windowframe3 #innerline').css({'border-color': '#ccc', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#d3d3d3'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#ccc'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#ccc'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#ccc'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#ccc'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#ccc'});
      
      $( "#outsideviewtext1" ).text( "White" );
      $( "#outsideviewtext11" ).text( "White" );

  });
});

$(document).ready(function(){
  $('#wsubmit4').on('click', function () {     
      
      $('#windowframe3 table').css({'border-color': 'rgb(197, 122, 65)', 'background-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'rgb(116, 60, 22)', 'border-top-color':'rgb(167, 106, 64)', 'border-left-color':'rgb(142, 79, 33)', 'border-bottom-color':'rgb(167, 106, 64)'});
      $('#windowframe3 table #innerdiv').css({'border-color': 'rgb(197, 122, 65)'});
      
      $('#windowframe3 #innerdiv14').css({'border-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #innerdiv44').css({'border-color': 'rgb(197, 122, 65)'});
      $('#windowframe3 #innerline2').css({'border-color': '#955534', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': 'rgb(142, 79, 33)', 'border-right-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #innerline3').css({'border-color': 'rgb(197, 122, 65)', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': 'rgb(197, 122, 65)'});
      $('#windowframe3 #innerline').css({'border-color': 'rgb(142, 79, 33)', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': 'rgb(197, 122, 65)'});
      $('#windowframe3 #innerdiv4').css({'border-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #innerdiv5').css({'border-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 table #innerdiv6').css({'background-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': 'rgb(142, 79, 33)'});
      
      $( "#outsideviewtext1" ).text( "Oak" );
      $( "#outsideviewtext11" ).text( "Oak" );

  });
});

$(document).ready(function(){
$('#wsubmit5').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color': '#3f84e3', 'background-color': '#0171b7'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#649ae2', 'border-top-color':'#92b7e8', 'border-left-color':'#649ae2', 'border-bottom-color':'#92b7e8'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#82a5d8'});
    
      $('#windowframe3 #innerdiv14').css({'border-color': '#0171b7'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#3f84e3'});
      $('#windowframe3 #innerline2').css({'border-color': '#51ade6', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#0171b7', 'border-right-color': '#0171b7'});
      $('#windowframe3 #innerline3').css({'border-color': '#3f84e3', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#3f84e3'});
      $('#windowframe3 #innerline').css({'border-color': '#0171b7', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#3f84e3'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#0171b7'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#0171b7'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#0171b7'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#0171b7'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
    
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#0171b7'});
    
      $( "#outsideviewtext1" ).text( "Blue" );
      $( "#outsideviewtext11" ).text( "Blue" );

  });
});

$(document).ready(function(){
$('#wsubmit6').on('click', function () {     
     
      $('#windowframe3 table').css({'border-color': 'rgb(18, 80, 57)', 'background-color': 'rgb(12, 60, 44)'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'rgb(28, 95, 68)', 'border-top-color':'rgb(28, 111, 82)', 'border-left-color':'rgb(28, 111, 82)', 'border-bottom-color':'rgb(28, 95, 68)'});
      $('#windowframe3 table #innerdiv').css({'border-color': 'rgb(50, 105, 79)'});
    
      $('#windowframe3 #innerdiv14').css({'border-color': 'rgb(12, 60, 44)'});
      $('#windowframe3 #innerdiv44').css({'border-color': 'rgb(18, 80, 57)'});
      $('#windowframe3 #innerline2').css({'border-color': '#0daa00', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': 'rgb(12, 60, 44)', 'border-right-color': 'rgb(12, 60, 44)'});
      $('#windowframe3 #innerline3').css({'border-color': 'rgb(18, 80, 57)', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': 'rgb(18, 80, 57)'});
      $('#windowframe3 #innerline').css({'border-color': 'rgb(12, 60, 44)', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': 'rgb(18, 80, 57)'});
      $('#windowframe3 #innerdiv4').css({'border-color': 'rgb(12, 60, 44)'});
      $('#windowframe3 #innerdiv5').css({'border-color': 'rgb(12, 60, 44)'});
      $('#windowframe3 table #innerdiv6').css({'background-color': 'rgb(12, 60, 44)'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': 'rgb(12, 60, 44)'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
    
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': 'rgb(12, 60, 44)'});
    
     $( "#outsideviewtext1" ).text( "Green" );
     $( "#outsideviewtext11" ).text( "Green" );
    
  });
});

$(document).ready(function(){
$('#wsubmit7').on('click', function () {     
    
      $('#windowframe3 table').css({'border-color': '#8C001A', 'background-color': '#5f0015'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#a3001f', 'border-top-color':'#b91131', 'border-left-color':'#a3001f', 'border-bottom-color':'#b91131'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#a3001f'});
   
      $('#windowframe3 #innerdiv14').css({'border-color': '#5f0015'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#8C001A'});
      $('#windowframe3 #innerline2').css({'border-color': '#93132e', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#5f0015', 'border-right-color': '#5f0015'});
      $('#windowframe3 #innerline3').css({'border-color': '#8C001A', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#8C001A'});
      $('#windowframe3 #innerline').css({'border-color': '#5f0015', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#8C001A'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#5f0015'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#5f0015'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#5f0015'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#5f0015'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
    
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#5f0015'});
    
    $( "#outsideviewtext1" ).text( "Burgundy" );
    $( "#outsideviewtext11" ).text( "Burgundy" );

  });
});

$(document).ready(function(){
$('#wsubmit8').on('click', function () {     
    
      $('#windowframe3 table').css({'border-color': '#5A0000', 'background-color': '#400000'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#5c2121', 'border-top-color':'#643d3d', 'border-left-color':'#5c2121', 'border-bottom-color':'#643d3d'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#6d2929'});
    
      $('#windowframe3 #innerdiv14').css({'border-color': '#400000'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#5A0000'});
      $('#windowframe3 #innerline2').css({'border-color': '#843030', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#400000', 'border-right-color': '#400000'});
      $('#windowframe3 #innerline3').css({'border-color': '#5A0000', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#5A0000'});
      $('#windowframe3 #innerline').css({'border-color': '#400000', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#5A0000'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#400000'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#400000'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#400000'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#400000'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
    
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#400000'});
    
    $( "#outsideviewtext1" ).text( "Rosewood" );
    $( "#outsideviewtext11" ).text( "Rosewood" );
    
  });
});

$(document).ready(function(){
$('#wsubmit9').on('click', function () {     
    
    $('#windowframe3 table').css({'border-color': '#f4d6be', 'background-color': '#deb28e'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#f5d0b6', 'border-top-color':'#f4dcce', 'border-left-color':'#f5d0b6', 'border-bottom-color':'#f4dcce'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#f4dcc7'});
    
      $('#windowframe3 #innerdiv14').css({'border-color': '#deb28e'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#f4d6be'});
      $('#windowframe3 #innerline2').css({'border-color': '#efc5a5', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#deb28e', 'border-right-color': '#deb28e'});
      $('#windowframe3 #innerline3').css({'border-color': '#deb28e', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#deb28e'});
      $('#windowframe3 #innerline').css({'border-color': '#deb28e', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#f4d6be'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#deb28e'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#deb28e'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#deb28e'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#deb28e'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
    
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#deb28e'});
    
    $( "#outsideviewtext1" ).text( "Cream" );
    $( "#outsideviewtext11" ).text( "Cream" );

  });
});


$(document).ready(function(){
  $('#wsubmit10').on('click', function () {     
      
      $('#windowframe3 table').css({'border-color': '#7e7e7e', 'background-color': '#4b4646'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#585858', 'border-top-color':'#a5a5a5', 'border-left-color':'#585858', 'border-bottom-color':'#a5a5a5'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#6a6a6a'});

      $('#windowframe3 #innerdiv14').css({'border-color': '#4b4646'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#7e7e7e'});
      $('#windowframe3 #innerline2').css({'border-color': '#726c6c', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#4b4646', 'border-right-color': '#4b4646'});
      $('#windowframe3 #innerline3').css({'border-color': '#7e7e7e', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#7e7e7e'});
      $('#windowframe3 #innerline').css({'border-color': '#4b4646', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#7e7e7e'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#4b4646'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#4b4646'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#4b4646'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#4b4646'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#4b4646'});
      
      $( "#outsideviewtext1" ).text( "Black/White" );
      $( "#outsideviewtext11" ).text( "Black/White" );


  });
});


$(document).ready(function(){
  $('#wsubmit11').on('click', function () {     
      
      $('#windowframe3 table').css({'border-color': 'rgb(197, 122, 65)', 'background-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'rgb(116, 60, 22)', 'border-top-color':'rgb(167, 106, 64)', 'border-left-color':'rgb(142, 79, 33)', 'border-bottom-color':'rgb(167, 106, 64)'});
      $('#windowframe3 table #innerdiv').css({'border-color': 'rgb(197, 122, 65)'});
      
      $('#windowframe3 #innerdiv14').css({'border-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #innerdiv44').css({'border-color': 'rgb(197, 122, 65)'});
      $('#windowframe3 #innerline2').css({'border-color': '#955534', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': 'rgb(142, 79, 33)', 'border-right-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #innerline3').css({'border-color': 'rgb(197, 122, 65)', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': 'rgb(197, 122, 65)'});
      $('#windowframe3 #innerline').css({'border-color': 'rgb(142, 79, 33)', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': 'rgb(197, 122, 65)'});
      $('#windowframe3 #innerdiv4').css({'border-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #innerdiv5').css({'border-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 table #innerdiv6').css({'background-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': 'rgb(142, 79, 33)'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
      
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': 'rgb(142, 79, 33)'});
      
      $( "#outsideviewtext1" ).text( "Oak/White" );
      $( "#outsideviewtext11" ).text( "Oak/White" );

  });
});



$(document).ready(function(){
$('#wsubmit12').on('click', function () {     
    
      $('#windowframe3 table').css({'border-color': '#5A0000', 'background-color': '#400000'});
      $('#windowframe3 table #outerdiv').css({'border-right-color':'#5c2121', 'border-top-color':'#643d3d', 'border-left-color':'#5c2121', 'border-bottom-color':'#643d3d'});
      $('#windowframe3 table #innerdiv').css({'border-color': '#6d2929'});
    
      $('#windowframe3 #innerdiv14').css({'border-color': '#400000'});
      $('#windowframe3 #innerdiv44').css({'border-color': '#5A0000'});
      $('#windowframe3 #innerline2').css({'border-color': '#843030', 'border-bottom-color': 'rgba(255, 0, 0, 0)', 'border-bottom-width': '0px', 'border-left-color': '#400000', 'border-right-color': '#400000'});
      $('#windowframe3 #innerline3').css({'border-color': '#5A0000', 'border-top-color': 'rgba(255, 0, 0, 0)'});
      $('#windowframe3 #trbefore').css({'background-color': '#5A0000'});
      $('#windowframe3 #innerline').css({'border-color': '#400000', 'border-bottom-color': 'rgba(255, 0, 0, 0)'});
      
      $('#windowframe3 #innerdiv1').css({'border-color': '#5A0000'});
      $('#windowframe3 #innerdiv4').css({'border-color': '#400000'});
      $('#windowframe3 #innerdiv5').css({'border-color': '#400000'});
      $('#windowframe3 table #innerdiv6').css({'background-color': '#400000'});
      $('#windowframe3 #baywindow1').css({'background-color': 'rgba(255, 255, 255, 0)', 'border-color': 'rgba(255, 255, 255, 0)'});
      $('#windowframe3 #menuvalidcolor').css({'background-color': '#400000'});
      $('#windowframe3 #triangletable').css({'background-color': '#fff'});
    
      $('#windowframe3 #parallelograml1, #windowframe3 #parallelogramr1, #windowframe3 #parallelogramltop1, #windowframe3 #parallelogramrtop1, #windowframe3 #parallelograml2, #windowframe3 #parallelogramr2, #windowframe3 #parallelogramltop2, #windowframe3 #parallelogramrtop2, #windowframe3 #parallelograml3, #windowframe3 #parallelogramr3, #windowframe3 #parallelogramltop3, #windowframe3 #parallelogramrtop3, #windowframe3 #baywindowmiddle1, #windowframe3 #baywindowmiddle2, #windowframe3 #parallelograml4, #windowframe3 #parallelogramr4, #windowframe3 #parallelogramltop4, #windowframe3 #parallelogramrtop4, #windowframe3 #baywindowmiddle14, #windowframe3 #baywindowmiddle24, #windowframe3 #parallelograml35, #windowframe3 #parallelogramr35, #windowframe3 #parallelogramltop35, #windowframe3 #parallelogramrtop35, #windowframe3 #baywindowmiddle15, #windowframe3 #baywindowmiddle25, #windowframe3 #parallelograml35l, #windowframe3 #parallelogramr35r, #windowframe3 #parallelogramltop35l, #windowframe3 #parallelogramrtop35r, #windowframe3 #parallelograml36, #windowframe3 #parallelogramr36, #windowframe3 #parallelogramltop36, #windowframe3 #parallelogramrtop36, #windowframe3 #baywindowmiddle16, #windowframe3 #baywindowmiddle26, #windowframe3 #parallelograml36l, #windowframe3 #parallelogramr36r, #windowframe3 #parallelogramltop36l, #windowframe3 #parallelogramrtop36r').css({'border-color': '#400000'});
    
    $( "#outsideviewtext1" ).text( "Rosewood/White" );
    $( "#outsideviewtext11" ).text( "Rosewood/White" );
    
  });
});


<!--window frame color change end-->