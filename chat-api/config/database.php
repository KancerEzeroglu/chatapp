<?php
class Database{

    public $conn;

    // get the database connection
    public function getConnection(){

        $this->conn = null;

        $this->conn = new SQLite3("../bunqDB.db");

        return $this->conn;
    }
}
?>