$(document).ready(function(){
$('#showwpanel').on('click', function () {     
    
    
      $('#winglass .windowglassbk').css({'display':'none'});
    
     var backdoorcolor = $('#windowframe3 table').css('border-top-color');
    //alert('');
    //backdoorcolor1 = "kk";
    //alert(backdoorcolor);
    
    if (backdoorcolor == 'rgb(177, 163, 163)' ){ 
        
        $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D9.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    else if (backdoorcolor == 'rgb(206, 187, 173)' ){ 
        
        $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D5.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else if (backdoorcolor == 'rgb(126, 17, 17)' ){ 
        
       $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D8.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else if (backdoorcolor == 'rgb(172, 24, 61)' ){ 
        
       $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D4.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else if (backdoorcolor == 'rgb(28, 114, 80)' ){ 
        
       $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D6.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else if (backdoorcolor == 'rgb(129, 163, 229)' ){ 
        
       $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D2.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else if (backdoorcolor == 'rgb(216, 144, 92)' ){ 
        
       $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D3.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else if (backdoorcolor == 'rgb(255, 165, 165)' ){ 
        
       $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D7.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else if (backdoorcolor == 'rgb(83, 62, 62)' ){ 
        
        $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D1.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});

    
    }
    
    else{
        $('#winglass .rightw2').css({'display':'block', 'background-image' : 'url("windowimages/bottompanel/D0grey.jpg")', 'background-size' : '100% 100%', 'background-repeat' : 'no-repeat'});
    }
    
  });
    
$('#removewpanel').on('click', function () {     
    
      $('#winglass .windowglassbk').css({'display':'block'});
      $('#winglass .rightw2').css({'display':'none'});
    
  });
    
    
    
    
    
    
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