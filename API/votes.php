<?php
    include "../DB/index.php";

    $userId = $_GET["id"];
    $house = $_GET["house"];
    
    $connection = makeConnectionWithDatabase();

    $query = "UPDATE votings SET Vote = Vote + 1 
    WHERE AccountID = $userId and HouseID= $house;";
    
    insertQuery($connection, $query);
    $connection->close();