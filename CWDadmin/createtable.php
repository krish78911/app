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

// sql to create table
$sql = "CREATE TABLE backend (
name varchar(200),
email varchar(200),
phone varchar(200),
address varchar(200),
county varchar(200)
)";

if (mysqli_query($conn, $sql)) {
    echo "Table backend created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>