var colorr;
//$('#frame3').css({'background-color': colorr});
$(function(){
    $("#submit1").click(function(){      
        window.colorr = $("#submit1").val();
        //window.colorr = "images/G1.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': colorr});
    });
}); 


$(function(){
    $("#submit2").click(function(){      
        window.colorr = $("#submit2").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': colorr});
    });
}); 

$(function(){
    $("#submit3").click(function(){      
        window.colorr = $("#submit3").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': colorr});
    });
}); 



$(function(){
    $("#submit4").click(function(){      
        window.colorr = $("#submit4").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': colorr});
    });
}); 

$(function(){
    $("#submit5").click(function(){      
        window.colorr = $("#submit5").val();
        //window.colorr = "images/G2.jpg";
        //$('#frame3').css('background-image', 'url(' + colorr + ')');
        $('#doorbox5 #frame3').css({'background-color': colorr});
    });
}); 


var isRedOrBluee = "myCanvas";
    var isRedOrBlue;
$('#frame1').on('click', function () {
    isRedOrBlue = "frame1";
    // For identification, I'm adding border
    
     $('#frame3').empty();
    
    //$('#frame3').find('#oval').remove();
    // $('#frame3').find('#left').remove();
    // $('#frame3').find('#right').remove();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame1').css({'height':'370px', 'width': '250px'});
    $('#doorbox5 #frame1 #center-f1').css({'height':'270px', 'width': '120px'});
    $('#doorbox5 #frame1 #left #glassleft1-f1').css({'height':'270px', 'width': '50px'});
    $('#doorbox5 #frame1 #right #glassright1-f1').css({'height':'270px', 'width': '50px'});
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    
});


$('#frame2').on('click', function () {
    isRedOrBlue = "frame2";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});


$('#defaultframe').on('click', function () {
    isRedOrBlue = "defaultframe";
    // For identification, I'm adding border  
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});

$('#frame4').on('click', function () {
    isRedOrBlue = "frame4";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});
 

$('#frame5').on('click', function () {
    isRedOrBlue = "frame5";
    // For identification, I'm adding border  
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '250px');
});

$('#frame6').on('click', function () {
    isRedOrBlue = "frame6";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});


$('#frame7').on('click', function () {
    isRedOrBlue = "frame7";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
});


$('#frame8').on('click', function () {
    isRedOrBlue = "frame8";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '130px');
});

$('#frame9').on('click', function () {
    isRedOrBlue = "frame9";
    // For identification, I'm adding border
     $('#frame3').empty();
$('#' + isRedOrBlue).clone().appendTo($('#frame3'));
    $('#doorbox5 #frame3').css('border-color', 'rgba(0, 0, 0, 0.15)');
    $('#doorbox5 #frame3').css('height', '100%');
    $('#doorbox5 #frame3').css('width', '200px');
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
        
 


 
$(document).ready(function() {
    $("#doorbox2").hide();
    $("#doorbox3").hide();
});
$(document).ready(function(){
  $("#frame11").click(function(){
      //  $('#frameid').empty();
      //  $('#doorbox2').appendTo($('#frameid'));
      //  $("#doorbox2").show();
  //$("#frameid2").show();     
    /*$("#doorbox1").replaceWith($("#doorbox2"));*/
      
      $("#doorbox1").hide('slow');
      $("#doorbox3").hide('slow');
      $("#doorbox2").show('slow');
        
  });
    
   $("#glass11").click(function(){
    $("#doorbox1").hide('fast');
      $("#doorbox3").show('5000');
      $("#doorbox2").hide('fast');
  });
    
  $("#panel11").click(function(){
    $("#doorid").hide();
      $("#glassid").hide();
       $("#panelid").show();
         $("#frameid").hide();
  });
    
  $("#door11").click(function(){
      
     $("#doorbox1").show('slow');
      $("#doorbox3").hide('slow');
      $("#doorbox2").hide('slow');
  });
});
