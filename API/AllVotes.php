<?php
    include "../DB/index.php";

    $connection = makeConnectionWithDatabase();
    $query = "select * from votings;";
    $scholen = getQuery($connection, $query);

    echo json_encode($scholen);
    
    $connection->close();