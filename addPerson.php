<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="assets/CSS/index.css" type="text/css">
    </head>
    <body class="page-structuur">
        <div id="Create-Account-Form">
            <h1>
                Create Account
            </h1>
            <div>
                <form action="../API/AddAccount.php" method="GET">
                    <div>
                        <label for="firstName">
                            Firstname
                        </label>
                        <br>
                        <input type="text" name="firstName" id="firstName" placeholder="John" pattern="[a-zA-Z\S]+" required>
                    </div>
                    <div>
                        <label for="lastName">
                            Lastname
                        </label>
                        <br>
                        <input type="text" name="lastName" id="lastName" placeholder="Doe" pattern="[a-zA-Z\s]+" required>
                    </div>
                    <div>
                        <label for="gender">
                            Gender
                        </label>
                        <br>
                        <select name="Gender" id="gender">
                            <option value="Male">
                                Male
                            </option>
                            <option value="Female">
                                Female
                            </option>
                            <option value="X">
                                X
                            </option>
                        </select>
                    </div>
                    <div>
                        <label for="age">
                            Age
                        </label>
                        <br>
                        <input type="number" name="Age" id="age" placeholder="24" min="18" max="150" required>
                    </div>
                    <div>
                        <label for="description">
                            Description
                        </label>
                        <br>
                        <textarea id="description" name="Description" cols="50" rows="5" maxlength="500" placeholder="I love chocolate..." required></textarea>
                    </div>
                    <br>
                    <input type="submit" value="Create" class="buttons" id="Btn-Submit">
                </form>
            </div>
        </div>
    </body>
</html>
