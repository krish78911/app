<?php
//$vbb1;
// Create connection
$conn = new mysqli("mysql14.000webhost.com","a7637952_krish1","newzealand1","a7637952_doors1");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT image FROM doorproject";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       // echo "id: " . $row["number"]. "<br>";
        echo '<img src="data:image/jpg;base64,'.base64_encode( $row['image'] ).'"/>';
       $photo1 = $row['image'] ;
        echo $photo1;
      //  global $vbb1 = $row['image'] ;
      //  echo $vbb1;
        header("Content-type: image/jpeg");
        
    }
} else {
    echo "0 results";
}

 //echo $vbb1;


$name        = "Name goes here";
$email       = "krishnarathod791@gmail.com";
$to          = "krishnarathod791@gmail.com";
$from        = "John-Smith ";
$subject     = "Here is your attachment";
$mainMessage = "Hi, here's the file.";

$fileatt     = '';
$fileatttype = "image/jpg";
$fileattname = "image.jpg";
$headers = "From: $from";
// File
$file = fopen($fileatt, 'rb');
$data = fread($file, filesize($fileatt));
fclose($file);
// This attaches the file
$semi_rand     = md5(time());
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
$headers      .= "\nMIME-Version: 1.0\n" .
"Content-Type: multipart/mixed;\n" .
" boundary=\"{$mime_boundary}\"";
$message = "This is a multi-part message in MIME format.\n\n" .
"-{$mime_boundary}\n" .
"Content-Type: text/plain; charset=\"iso-8859-1\n" .
"Content-Transfer-Encoding: 7bit\n\n" .
$mainMessage  . "\n\n";
$data = chunk_split(base64_encode($data));
$message .= "--{$mime_boundary}\n" .
"Content-Type: {$fileatttype};\n" .
" name=\"{$fileattname}\"\n" .
"Content-Disposition: attachment;\n" .
" filename=\"{$fileattname}\"\n" .
"Content-Transfer-Encoding: base64\n\n" .
$data . "\n\n" .
"-{$mime_boundary}-\n";
// Send the email
if(mail($to, $subject, $message, $headers)) {
    echo "The email was sent.";
}
else {
    echo "There was an error sending the mail.";
}



$conn->close();
?>