<?php
    $firstname = $_GET["firstName"];
    $lastname = $_GET["lastName"];
    $gender = $_GET["Gender"];
    $age = $_GET["Age"];
    $description = $_GET["Description"];

    include "../DB/index.php";
    $connection = makeConnectionWithDatabase();

    //je voegt persoon toe
    $sql = "INSERT INTO accounts (FirstName, LastName, Gender, Age, Description) VALUES ('$firstname', '$lastname', '$gender', '$age', '$description');";
    insertQuery($connection, $sql);

    //je voegt ook de persoon toe aan votings om votes te geven
    $result = mysqli_query($connection, "SELECT * FROM accounts");
    $userId = mysqli_num_rows($result);
    for ($i=1; $i < 5; $i++) { 
        $query = "INSERT INTO votings (AccountID, HouseID) VALUES ('$userId','$i');";
        insertQuery($connection, $query);
    }
    
    header("Location: https://sortinghat.hasanozturk.be/success.php");
    $connection->close();