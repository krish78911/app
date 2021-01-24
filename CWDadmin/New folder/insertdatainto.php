<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "CWD";


$k1 = $_POST['name'];
$k2 = $_POST['email'];
$k3 = $_POST['phone'];
$k4 = $_POST['address'];
$k5 = $_POST['county'];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO backend (name, email, phone, address, county)
VALUES ('".$k1."', '".$k2."', '".$k3."', '".$k4."', '".$k5."')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>