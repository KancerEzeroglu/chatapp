<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../domain/user.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$user = new User($db);

$stmt = $user->getUserById($_GET['loginId']);


while ($row = $stmt->fetchArray()) {
    //var_dump($row);

    $user_item = array(
        "id" => $row['ID'],
        "name" => $row['NAME']
    );
}

if (isset($user_item)) {
    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($user_item);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No users found.")
    );
}
