<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../domain/message.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$message = new Message($db);

$lastId = 0;
if(isset($_GET['lastId'])){
    $lastId = $_GET['lastId'];
}


if(
    !empty($_GET['sender']) ||
    !empty($_GET['receiver'])
){

    $stmt = $message->read($lastId, $_GET['sender'], $_GET['receiver']);


    $messages_arr = array();
    $messages_arr["records"] = array();

    while ($row = $stmt->fetchArray()) {

        //var_dump($row);

        $message_item = array(
            "id" => $row['ID'],
            "sender" => $row['SENDER'],
            "receiver" => $row['RECEIVER'],
            "content" => $row['CONTENT'],
            "timestamp" => $row['TIMESTAMP']
        );

        array_push($messages_arr["records"], $message_item);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($messages_arr);
}else {

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create message. Data is incomplete."));
}



