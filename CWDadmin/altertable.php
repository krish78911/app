<?php
$servername = "mysql9.mylogin.ie";
$username = "comparisonw2";
$password = "EXZ90Wm&B(IyZii";
$dbname = "RG319531_cwdback";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "ALTER TABLE backend ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>