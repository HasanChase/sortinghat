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
        <div>
            <!-- voornaam en achternaam overzetten -->
            <h1 class="fullName">
            </h1>
            <!-- user image -->
            <div>
                <img src="assets/images/user_Web.png" alt="user" class="homepage-Add-People-image">
            </div>
              <div id="text-PeopleInHouse"> 
                <!-- gender overzetten -->
                <p class="gender">
                </p>
                <!-- leeftijd overzetten -->
                <p class="age">
                </p>
                <!-- descriptie overzetten -->
                <p class="description">
                </p>
            </div>
            <!-- buttons -->
            <input type="hidden" name="id" class="id">
            <button class="buttons Btn-smaller Gryffindor"> 
                <span class="house1">
                    This is a Gryffindor!
                </span>
            </button>
            <button class="buttons Btn-smaller Slytherin"> 
                <span class="house2">
                    This is a Slytherin!
                </span>
            </button>
            <br>
            <button class="buttons Btn-smaller Ravenclaw">
                <span class="house3">
                    This is a Ravenclaw!
                </span>
            </button>
            <button class="buttons Btn-smaller Hufflepuff">
                <span class="house4">
                    This is a Hufflepuff!
                </span>
            </button>
            <br>
            <input type="submit" value="Go To Next Person!" class="buttons hidden reveal volgende">
        </div>
        <script src="assets/JS/index.js">
        </script>
    </body>
</html>
