<?php
$servername = "localhost";
$username = "s2rs3_cwd_back";
$password = "H(Dmc*@R[kI,";
$dbname = "s2rs3_cwd_back";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT name, county FROM backend";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "name " . $row["name"]. "<br>";
        echo "name " . $row["county"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>