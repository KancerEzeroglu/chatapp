<?php
class Message
{

    // database connection and table name
    private $conn;
    private $table_name = "message";

    // object properties
    public $id;
    public $sender;
    public $receiver;
    public $content;
    public $timestamp;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read products
    function read($lastId, $sender, $receiver){

        // select all query
        $query = "SELECT id, sender, receiver, content, timestamp FROM {$this->table_name} WHERE id > {$lastId} "
        ." and ((sender={$sender} and receiver={$receiver}) or (sender={$receiver} and receiver={$sender}))" ;

        return $this->conn->query($query);
    }

    function create(){

        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " (sender, receiver, content, timestamp) VALUES (".
            $this->sender. ",".$this->receiver. ",'".$this->content. "',".$this->timestamp .")";


        // prepare query
        $result = $this->conn->exec($query);

        // execute query
        if($result){
            return true;
        }

        return false;

    }

}