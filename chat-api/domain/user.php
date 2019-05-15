<?php
class User
{

    // database connection and table name
    private $conn;
    private $table_name = "user";

    // object properties
    public $id;
    public $name;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read products
    function read(){

        // select all query
        $query = "SELECT * FROM " . $this->table_name;

        return $this->conn->query($query);
    }
}