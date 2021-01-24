<?php
// Create connection

$countyname = $_POST["countyname"];

$name = '';
$email = '';
$phone = '';
$address = '';
	
	
$con=mysqli_connect("mysql9.mylogin.ie","comparisonw2","]c*_3W+r:T)}j?L","RG319531_cwdback");
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO backend(name, email, phone, address, county)
VALUES ( '".$name."', '".$email."', '".$phone."', '".$address."', '".$countyname."')";

if (mysqli_query($con, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}
?>