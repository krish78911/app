<?php
session_start();
//include('login.php');
$username = $_POST["loginame"];
$_SESSION["loginame"] = $_POST["loginame"];

echo $_SESSION["loginame"];

    if($_SESSION["loginame"] == "deen"){
        header("location: login.php");
    }
    else{
        header("location: first.php");
    }

// Store Session Data

//if($username == "deen"){
//$_SESSION['login_user']= $username;  // Initializing Session with value of PHP Variable
//echo $_SESSION['login_user'];

?>