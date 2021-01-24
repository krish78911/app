<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/stylelogin.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

</head>
<body>

    <div id="loginpage">
            
    <form action="first.php" method="post" id="loginform">
        <label id="loginlogo">Login</label><br>
        <p id="incorrect"></p>
        <input type="text" name="login" id="logbt" placeholder="Login" class="loginname" required><br>
        <input type="password" name="password" id="logbt" placeholder="Password" class="loginpassword" required><br>
        <input type="submit" id="submitbt">
        
    </form>
            
    </div>
    
    <script>
$(document).ready(function(){
    $("#submitbt").click(function(){
        
        var log = $( ".loginname" ).val();
        
        var pass = $( ".loginpassword" ).val();
        if(log != 'CWDadmin'){
            $( "#incorrect" ).text( "Incorrect Username" );
            event.preventDefault();
        }
        else if(pass != 'CWD2015webbiz'){
        $( "#incorrect" ).text( "Incorrect Password" );
            event.preventDefault();
    }
        
    });
});
</script>
    
</body>
</html>
