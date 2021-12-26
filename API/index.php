<?php
    include "../DB/index.php";

    $connection = makeConnectionWithDatabase();
    $query = "select * from accounts;";
    $accounts = getQuery($connection, $query);

    echo json_encode($accounts);

    $connection->close();