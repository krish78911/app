$(document).ready(function() {
$('#frame11').on('click', function () {
    var bag = $('#frame3 #frame3back').css('background-color');
    if (bag == 'rgba(0, 0, 0, 0)')
    {alert('yes');}
    else
    {
        alert('Select Frame Color');
        
    }
});
});

