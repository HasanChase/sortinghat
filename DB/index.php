<?php
    function makeConnectionWithDatabase() {
        $hostname = "ID362548_sortinghat.db.webhosting.be";
        $dbUser = "ID362548_sortinghat";
        $dbPassword = "HASAN123";
        $dbName = "ID362548_sortinghat";
        $port = 3306;

        $connection = mysqli_connect($hostname, $dbUser, $dbPassword, $dbName, $port);

        if ($connection == false) {
            echo "De database kan niet bereikt worden!";
            die();
        }
        return $connection;
    }

    function getQuery($connection, $query) {
        return mysqli_query($connection, $query)->fetch_all(MYSQLI_ASSOC);
    }

    function insertQuery($connection, $query) {
        mysqli_query($connection, $query);
    }