function capture() {
            

            var inp1 = $(".textboxtext1");
            var inp2 = $(".textboxtext2");
            var inp3 = $(".textboxtext3");
            var inp4 = $(".textboxtext4");
            var inp5 = $(".textboxtext5");
            var inp6 = $(".textboxtext6");
            var inp7 = $(".textboxtext7");
            var inp8 = $(".textboxtext8");
            var inp9 = $(".textboxtext9");
    
            var onp1 = inp1.val();
            var onp2 = inp2.val();
            var onp3 = inp3.val();
            var onp4 = inp4.val();
            var onp5 = inp5.val();
            var onp6 = inp6.val();
            var onp7 = inp7.val();
            var onp8 = inp8.val();
            var onp9 = inp9.val();

            if(inp1.val() == ""){
                
            $('.textboxtext1').css({'border-color': 'rgb(255, 59, 0)'});
            }
            else if (isNaN(onp1)){
            $('.textboxtext1').css({'border-color': 'rgb(255, 59, 0)'});
            alert("Enter Only Number");
            }
            else if(inp2.val() == ""){
               
            $('.textboxtext2').css({'border-color': 'rgb(255, 59, 0)'});
            }
            else if (isNaN(onp2)){
            $('.textboxtext1').css({'border-color': 'rgb(255, 59, 0)'});
            alert("Enter Only Number");
            }
            else if(inp3.val() == ""){
               
            $('.textboxtext3').css({'border-color': 'rgb(255, 59, 0)'});
            }
            else if (isNaN(onp3)){
            $('.textboxtext1').css({'border-color': 'rgb(255, 59, 0)'});
            alert("Enter Only Number");
            }
            else if(inp4.val() == ""){
               
            $('.textboxtext4').css({'border-color': 'rgb(255, 59, 0)'});
            }
            else if(inp5.val() == ""){
               
            $('.textboxtext5').css({'border-color': 'rgb(255, 59, 0)'});
            }
            else if(inp6.val() == ""){
                
            $('.textboxtext6').css({'border-color': 'rgb(255, 59, 0)'});
            } 
            else if(inp7.val() == ""){
                
            $('.textboxtext7').css({'border-color': 'rgb(255, 59, 0)'});
            } 
            else if(inp8.val() == ""){
                
            $('.textboxtext8').css({'border-color': 'rgb(255, 59, 0)'});
            }
            else if(inp9.val() == ""){
                
            $('.textboxtext9').css({'border-color': 'rgb(255, 59, 0)'});
            }
            
            
else{
    $('#container2').html2canvas({
        onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
            $('#img_val').val(canvas.toDataURL("image/png"));
            $("#img_val").attr('border', '5px solid #000');
            //Submit the form manually
            document.getElementById("myForm").submit(); 
            
        }
        
    });
    
    }
}
      
      function capture1() {
    $('#container2').html2canvas({
        onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
            $('#img_val').val(canvas.toDataURL("image/png"));
            $("#img_val").attr('border', '5px solid #000');
            //Submit the form manually
            document.getElementById("myForm").submit();
           
            
            
        }
        
    });
}