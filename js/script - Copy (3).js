var colorr;
//$('#frame3').css({'background-color': colorr});
$(function(){
    $("#submit1").click(function(){      
        window.colorr = $("#submit1").val();
        //var bag = $('#frame3 .bottompanel').css('background-image');
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': '#000'});
        
        $('#framehidden').css({'background-color': '#000'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBblack.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 


$(function(){
    $("#submit2").click(function(){      
        window.colorr = $("#submit2").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': '#4d84ff'});
        $('#framehidden').css({'background-color': 'rgb(0, 88, 138)'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBblue.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 

$(function(){
    $("#submit3").click(function(){      
        window.colorr = $("#submit3").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': '#620707'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBburgundy.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 



$(function(){
    $("#submit4").click(function(){      
        window.colorr = $("#submit4").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': 'rgb(18, 80, 57)'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBgreen.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 

$(function(){
    $("#submit5").click(function(){      
        window.colorr = $("#submit5").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': 'rgb(197, 122, 65)'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBbrown.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 

$(function(){
    $("#submit6").click(function(){      
        window.colorr = $("#submit6").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': '#f72121'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBred.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 

$(function(){
    $("#submit7").click(function(){      
        window.colorr = $("#submit7").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': '#501f00'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBrosewood.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 

$(function(){
    $("#submit8").click(function(){      
        window.colorr = $("#submit8").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': '#fddbbd'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBcream.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 

$(function(){
    $("#submit9").click(function(){      
        window.colorr = $("#submit9").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': '#ebebeb'});
        $('#doorbox5 #frame3 .bottompanel').css({'background-image': 'url(images/bottompanel/DBwhite.jpg)', 'background-size': '100% 100%', 'background-repeat': 'no-repeat'});
    });
}); 

/*Change color of door*/

$(function(){
    $("#submit11").click(function(){      
        //window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D1.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D1.jpg)'});
    });
}); 

$(function(){
    $("#submit21").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D2.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D2.jpg)'});
    });
}); 

$(function(){
    $("#submit51").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D3.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D3.jpg)'});
    });
}); 

$(function(){
    $("#submit31").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D4.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D4.jpg)'});
    });
}); 

$(function(){
    $("#submit81").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D5.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D5.jpg)'});
    });
}); 

$(function(){
    $("#submit41").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D6.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D6.jpg)'});
    });
}); 

$(function(){
    $("#submit61").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D7.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D7.jpg)'});
    });
}); 

$(function(){
    $("#submit71").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D8.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D8.jpg)'});
    });
}); 


$(function(){
    $("#submit91").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
         $('div#displaydoor div div#beforecenter div#doorcenter1').css({'background-image': 'url(images/doors/D1/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter2').css({'background-image': 'url(images/doors/D2/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter3').css({'background-image': 'url(images/doors/D3/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter4').css({'background-image': 'url(images/doors/D4/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter5').css({'background-image': 'url(images/doors/D5/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter6').css({'background-image': 'url(images/doors/D6/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter7').css({'background-image': 'url(images/doors/D7/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter8').css({'background-image': 'url(images/doors/D8/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter9').css({'background-image': 'url(images/doors/D9/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter10').css({'background-image': 'url(images/doors/D10/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter11').css({'background-image': 'url(images/doors/D11/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter12').css({'background-image': 'url(images/doors/D12/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter13').css({'background-image': 'url(images/doors/D13/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter14').css({'background-image': 'url(images/doors/D14/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter15').css({'background-image': 'url(images/doors/D15/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter16').css({'background-image': 'url(images/doors/D16/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter17').css({'background-image': 'url(images/doors/D17/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter18').css({'background-image': 'url(images/doors/D18/D9.jpg)'});
         $('div#displaydoor div div#beforecenter div#doorcenter19').css({'background-image': 'url(images/doors/D19/D9.jpg)'});
    });
}); 

/*end of change color of doors*/
var isRedOrBluee = "myCanvas";
    var isRedOrBlue;
$('#frame1').on('click', function () {
    isRedOrBlue = "a1";
    // For identification, I'm adding border
    
     $('#frame3').empty();
    
    //$('#frame3').find('#oval').remove();
    // $('#frame3').find('#left').remove();
    // $('#frame3').find('#right').remove();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css({'height':'370px', 'width': '270px'});
    $('#doorbox5 #frame1').css({'height':'370px', 'width': '270px'});
    $('#doorbox5 #frame1 #center-f1').css({'height':'270px', 'width': '120px'});
    $('#doorbox5 #frame1 #left #glassleft1-f5').css({'height':'270px', 'width': '50px'});
    $('#doorbox5 #frame1 #right #glassright1-f5').css({'height':'270px', 'width': '50px'});
    $('#doorbox5 #frame3').css({'border-color': '#000', 'margin': ''});
    
});


$('#frame2').on('click', function () {
    isRedOrBlue = "frame2";
    alert (bag);
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});


$('#defaultframe').on('click', function () {
    isRedOrBlue = "defaultframe";
    // For identification, I'm adding border  
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});

$('#frame4').on('click', function () {
    isRedOrBlue = "frame4";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '50px');
    
    $('#frame3 #beforecenter').empty();
    $('#doorcenter1').clone().appendTo($('#frame3 #beforecenter'));
    $('div#displaydoor div div#beforecenter div#doorcenter1').css({'border-color': '#acacac', 'height': '270px', 'width': '120px'});
});
 

$('#frame5').on('click', function () {
    isRedOrBlue = "frame5";
    // For identification, I'm adding border  
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});

$('#frame6').on('click', function () {
    isRedOrBlue = "frame6";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});


$('#frame7').on('click', function () {
    isRedOrBlue = "frame7";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});


$('#frame8').on('click', function () {
    isRedOrBlue = "frame8";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '130px');
});

$('#frame9').on('click', function () {
    isRedOrBlue = "frame9";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});

$('#frame10').on('click', function () {
    isRedOrBlue = "frame10";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});

$('#frame111').on('click', function () {
    isRedOrBlue = "frame111";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});

$('#frame12').on('click', function () {
    isRedOrBlue = "frame12";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '130px');
});

$('#frame13').on('click', function () {
    isRedOrBlue = "frame13";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '130px');
});

$('#frame14').on('click', function () {
    isRedOrBlue = "frame14";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});

$('#frame15').on('click', function () {
    isRedOrBlue = "frame15";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});

$('#frame16').on('click', function () {
    isRedOrBlue = "frame16";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});

$('#frame17').on('click', function () {
    isRedOrBlue = "frame17";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});

$('#frame18').on('click', function () {
    isRedOrBlue = "frame18";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});

$('#frame19').on('click', function () {
    isRedOrBlue = "frame19";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.76)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});


$('#blues').on('click', function () {
    isRedOrBlue = "blues";
    // For identification, I'm adding border
    $(this).css({
        "border": "1px solid #ccc"
    })
    //Vice versa I'm removing for other
    $('#red').css({
        "border": ""
    })
    $('div#panel').attr('class', 'fillerr');
     $('div.fillerr').empty();
$('#' + isRedOrBlue).clone().appendTo($('div#green div div div div#panel'));
   // $("div#green div div div div#panel").empty();
});

 
        
        $('#door3').on('click', function () {
    if (isRedOrBlue) { // When none selected
        console.log(isRedOrBlue)
        $('#door3').empty();
        $('#' + isRedOrBlue).clone().appendTo($(this));
        
    }
            else
            {
            console.log(isRedOrBluee)
        $('#' + isRedOrBluee).clone().appendTo($(this));
            }
});
        
 

/*$('div.framescript').on('click', function () {
    isRedOrBlue = $(this).attr('id');
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});*/


 
$(document).ready(function() {
    $("#doorboxfront").fadeIn(2000);
    $("#doorbox1").hide();
    $("#doorbox2").hide();
    $("#doorbox3").hide();
    $("#doorbox4").hide();
    //$("#doorboxpanelll").hide();
    $('#myForm').css({'display':'none'});
});
$(document).ready(function(){
  $("#frame11").click(function(){
      //  $('#frameid').empty();
      //  $('#doorbox2').appendTo($('#frameid'));
      //  $("#doorbox2").show();
  //$("#frameid2").show();     
    /*$("#doorbox1").replaceWith($("#doorbox2"));*/
      $("#doorboxfront").fadeOut();
      $("#doorbox1").fadeOut();
      $("#doorbox3").fadeOut();
      $("#doorbox4").fadeOut();
      $("#doorbox2").fadeIn(2000);
      $("#frame11").css({'background-color':'#171717'}); 
  });
    
   $("#glass11").click(function(){
      $("#doorboxfront").fadeOut();
      $("#doorbox1").fadeOut();
      $("#doorbox3").fadeIn(2000);
      $("#doorbox2").fadeOut();
      $("#doorbox4").fadeOut();
       $("#glass11").css({'background-color':'#171717'}); 
  });
    
  $("#panel11").click(function(){
      $("#doorboxfront").fadeOut();
      $("#doorbox1").fadeOut();
      $("#doorbox4").fadeIn(2000);
      $("#doorbox3").fadeOut();
      $("#doorbox2").fadeOut();
      $("#panel11").css({'background-color':'#171717'}); 
  });
    
  $("#door11").click(function(){ 
      $("#doorboxfront").fadeOut();
      $("#doorbox1").fadeIn(2000);
      $("#doorbox4").fadeOut(); 
      $("#doorbox3").fadeOut();
      $("#doorbox2").fadeOut();
      $("#door11").css({'background-color':'#171717'}); 
  });
    
});




$(function(){
    
      $("#frame3").on("click", function(){
         
      $("#doorbox1").fadeIn(2000);
      $("#doorbox3").fadeOut();
      $("#doorbox2").fadeOut();
      $("#doorbox4").fadeOut();
      $("#doorboxfront").fadeOut();
  });
    
    
    $("#frame3 #doorpanel1D9").on("click", function(){
      $("#doorboxfront").fadeOut();
      $("#doorbox1").fadeOut();
      $("#doorbox3").fadeOut();
      $("#doorbox2").fadeOut();
      $("#doorbox4").fadeIn(2000);
     event.stopImmediatePropagation();
  });
    
    
   $("#frame3").on("click", "#beforecenter", function () {
       $("#doorboxfront").fadeOut();
       $("#doorbox1").fadeOut();
      $("#doorbox4").fadeOut();
      $("#doorbox3").fadeOut();
      $("#doorbox2").fadeIn(2000);
       var evt = e ? e:window.event;
 if (evt.stopPropagation)    evt.stopPropagation();
 if (evt.cancelBubble!=null) evt.cancelBubble = true;
   
}); 
    
    $("#frame3").on("click", "#handles tr td, #table2", function () {
       $("#doorbox1").fadeOut();
        $("#doorboxfront").fadeOut();
      $("#doorbox4").fadeIn(2000);
      $("#doorbox3").fadeOut();
      $("#doorbox2").fadeOut();
       var evt = e ? e:window.event;
 if (evt.stopPropagation)    evt.stopPropagation();
 if (evt.cancelBubble!=null) evt.cancelBubble = true;
   
});
    
       $("#frame3").on("click", ".glass, .ovalglass", function () {
       $("#doorboxfront").fadeOut();
       $("#doorbox1").fadeOut();
      $("#doorbox4").fadeOut();
      $("#doorbox3").fadeIn(2000);
      $("#doorbox2").fadeOut();
      //$("#doorboxpanelll").fadeOut();
     var evt = e ? e:window.event;
 if (evt.stopPropagation)    evt.stopPropagation();
 if (evt.cancelBubble!=null) evt.cancelBubble = true;
}); 
    
   $("div#displaydoor div div#beforecenter div#doorcenter9").click(function(){ 
      $('div#displaydoor div div#beforecenter div#doorcenter9').css('border', '10px solid #106c9d');
  });
}); 