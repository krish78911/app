<?php
session_start();

session_unset(); 

// destroy the session 
//session_destroy(); 

if(session_destroy()) // Destroying All Sessions
{
header("Location: login.php"); // Redirecting To Home Page
}
?>