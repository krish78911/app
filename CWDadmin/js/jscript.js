$(document).ready(function(){
$('.buttonscounty, .buttonscounty1').click(function(e){
    var buttonvalue = $(this).attr("value");
   // alert(buttonvalue);
    $("#labeltextlogo").val(buttonvalue);
    $("#labeltextlogo1").val(buttonvalue);
    $('#maincontent2').show();
      $('#maincontent1').hide();
  });
});