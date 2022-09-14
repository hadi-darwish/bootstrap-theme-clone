<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");
$fname = $_POST["fname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$queryText = "INSERT INTO contact(name , email , phone_number,message) VALUE (?,?,?,?)";
$query = $mysqli->prepare($queryText);
$query->bind_param(
    "ssss",
    $fname,
    $email,
    $phone,
    $message
);
$query->execute();
$response["success"] = true;
echo json_encode($response);
