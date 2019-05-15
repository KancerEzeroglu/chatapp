<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../domain/message.php';

$database = new Database();
$db = $database->getConnection();

$message = new Message($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->sender) &&
    !empty($data->receiver) &&
    !empty($data->content)
){

    // set product property values
    $message->sender = $data->sender;
    $message->receiver = $data->receiver;
    $message->content = $data->content;
    $message->timestamp = time();

    // create the product
    if($message->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "Message was created."));
    }
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create message."));
    }
}

else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create message. Data is incomplete."));
}
