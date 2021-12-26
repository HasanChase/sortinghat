var lengte=0;
// get all data van api voor alle accounts
fetch("https://sortinghat.hasanozturk.be/API/index.php")
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        addInformatie(data);
        for (var index = 0; index < data.length; index++) {
            lengte++;
        }
    });

// get all data van api voor alle votes
fetch("https://sortinghat.hasanozturk.be/API/AllVotes.php")
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        vote(data);
    });

//informatie
var fullName = document.querySelector(".fullName");
var gender = document.querySelector(".gender");
var age = document.querySelector(".age");
var description = document.querySelector(".description");
var accountID = document.querySelector(".id");

//buttons
var BtnGryffindor = document.querySelector(".Gryffindor");
var BtnSlytherin = document.querySelector(".Slytherin");
var BtnRavenclaw = document.querySelector(".Ravenclaw");
var BtnHufflepuff = document.querySelector(".Hufflepuff");

//button next    
var button = document.querySelector(".volgende");

//votes
var voteGryffindor = document.querySelector(".house1");
var voteSlytherin = document.querySelector(".house2");
var voteRavenclaw = document.querySelector(".house3");
var voteHufflepuff = document.querySelector(".house4");

var count=1;
var teller = 0;
var text="";
var schoolnaam=0;

var buttons = document.querySelectorAll(".Btn-smaller");
var nextPerson = document.querySelector(".reveal");

//laat Go to next Person verschijnen en weer onzichtbaar maken
for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function(){
        nextPerson.classList.remove("hidden");
        
        nextPerson.addEventListener("click", function(){
            nextPerson.classList.add("hidden");
        });
    });
}

BtnGryffindor.addEventListener("click",function(){
    add_Vote(1);
    schoolnaam=1;
});
BtnSlytherin.addEventListener("click",function(){
    add_Vote(2);   
    schoolnaam=2;
});
BtnRavenclaw.addEventListener("click",function(){
    add_Vote(3);
    schoolnaam=3;
});
BtnHufflepuff.addEventListener("click",function(){
    add_Vote(4);
    schoolnaam=4;
});

function vote(votes) {
    var counter = 0;
    for (var index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", function(){

            if (schoolnaam==1) {
                //functies in variabele steken
                var voteGRFFY = parseInt(gegevens(teller, votes)[0]) + 1;
                var voteSLYT = parseInt(gegevens(teller, votes)[1]);
                var voteRAV = parseInt(gegevens(teller, votes)[2]);
                var voteHUFFLE = parseInt(gegevens(teller, votes)[3]);
            }
            else if (schoolnaam==2) {
                //functies in variabele steken
                var voteGRFFY = parseInt(gegevens(teller, votes)[0]);
                var voteSLYT = parseInt(gegevens(teller, votes)[1])+1;
                var voteRAV = parseInt(gegevens(teller, votes)[2]);
                var voteHUFFLE = parseInt(gegevens(teller, votes)[3]);
            }
            else if (schoolnaam==3) {
                //functies in variabele steken
                var voteGRFFY = parseInt(gegevens(teller, votes)[0]);
                var voteSLYT = parseInt(gegevens(teller, votes)[1]);
                var voteRAV = parseInt(gegevens(teller, votes)[2])+1;
                var voteHUFFLE = parseInt(gegevens(teller, votes)[3]);
            }
            else{
                //functies in variabele steken
                var voteGRFFY = parseInt(gegevens(teller, votes)[0]);
                var voteSLYT = parseInt(gegevens(teller, votes)[1]);
                var voteRAV = parseInt(gegevens(teller, votes)[2]);
                var voteHUFFLE = parseInt(gegevens(teller, votes)[3])+1;
            }
            
            //totaal vinden -> nodig voor procent te vinden
            var total = voteGRFFY + voteSLYT + voteRAV + voteHUFFLE;
            
            //procent vinden
            voteGRFFY = Math.round((voteGRFFY/total)*100) + "%";
            voteSLYT = Math.round((voteSLYT/total)*100) + "%";
            voteRAV = Math.round((voteRAV/total)*100) + "%";
            voteHUFFLE = Math.round((voteHUFFLE/total)*100) + "%";

            //de code uitvoeren in innerHTML
            voteGryffindor.innerHTML = "Gryffindor: " + voteGRFFY;
            voteSlytherin.innerHTML = "Slytherin: " + voteSLYT;
            voteRavenclaw.innerHTML = "Ravenclaw: " + voteRAV;
            voteHufflepuff.innerHTML = "Hufflepuff: " + voteHUFFLE;

            counter++;
        });
    }
    
    function gegevens(id, votes) {
        var array = [];
        for (var index = 0; index < votes.length; index++) {
            if (votes[index].AccountID == id) {
                array.push(votes[index].Vote);
            }
        }
        return array;
    }
}

function add_Vote(school) {
    for (var index = 0; index < buttons.length; index++) {
        buttons[index].disabled = true;
        buttons[index].classList.add("Btn-disable");
    }
    teller = teller+1;
    fetch("https://sortinghat.hasanozturk.be/API/votes.php?id=" + teller + "&house=" + school);
}

//informatie van de persoon toevoegen
function addInformatie(informatie) {
    accountID.value = informatie[0].ID;
    fullName.innerHTML = informatie[0].FirstName+ " " +informatie[0].LastName;
    gender.innerHTML = "Gender: " + informatie[0].Gender;
    age.innerHTML = "Age: "+ informatie[0].Age;
    description.innerHTML = "Description: <br>" + informatie[0].Description;

    button.addEventListener("click",function(){
        if(count==lengte){
            window.location.href = ("https://sortinghat.hasanozturk.be/end.php");
        }
        else{
            accountID.value = informatie[count].ID;
            fullName.innerHTML = informatie[count].FirstName+ " " +informatie[count].LastName;
            gender.innerHTML = "Gender: " + informatie[count].Gender;
            age.innerHTML = "Age: "+ informatie[count].Age;
            description.innerHTML = "Description: <br>" + informatie[count].Description;
            count++;
            
            for (var index = 0; index < buttons.length; index++) {
                buttons[index].disabled = false;
                buttons[index].classList.remove("Btn-disable");
            }

            for (var index = 0; index < buttons.length; index++) {
                    voteGryffindor.innerHTML ="This is a Gryffindor!";
                    voteSlytherin.innerHTML="This is a Slytherin!";
                    voteRavenclaw.innerHTML ="This is a Ravenclaw!";
                    voteHufflepuff.innerHTML ="This is a Hufflepuff!";
            }
        }
    })
}