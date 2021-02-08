// // Function
// // Buttons


// // declare function

// function yoyo(){
//     document.write("Yo~Yo~Yo!!! ");
// }

// // calling function
// yoyo();

// // Button

// function sayyoyo(){
//     let username = prompt("What is your name?");
//     document.write(`Yo~Yo~Yo!!! ${username}`);
// }

// // writing in html
// function Hello (){
//     document.getElementById("d2").innerHTML = "Hello"; // need to be id
// }
// function Hellos (){
//     // document.getElementById("d2").innerHTML = "Hello"; // need to be id
//     document.querySelector(".d3").innerHTML = "Go to hell";
// }
// //querySelector is powerful because you can select class and id, but you need to declare it first

// function Hellos (){
//     document.getElementById("d2").innerHTML = "Hello"; // need to be id
//     document.querySelector(".d3").innerHTML = "Go to hell";
// }
let homescore = 0;
let guestscore = 0;
let homepenalty = "";
let guestpenalty = "";
let period = 1;
function reset(){
    homescore = 0;
    guestscore = 0;
    homepenalty = "";
    guestpenalty = "";
    period = 1;
    document.querySelector(".homescore").innerHTML = homescore;
    document.querySelector(".guestscore").innerHTML = guestscore;
    document.querySelector(".homepenalty").innerHTML = homepenalty;
    document.querySelector(".guestpenalty").innerHTML = guestpenalty;
    document.querySelector(".period_time").innerHTML = period;
}
function homeadd (){
    homescore++;
    document.querySelector(".homescore").innerHTML = homescore;

}
function homeminus (){
    if(homescore>0){
        homescore--;
        document.querySelector(".homescore").innerHTML = homescore;
    }
}   

function guestadd (){
    guestscore++;
    document.querySelector(".guestscore").innerHTML = guestscore;
}
function guestminus (){
    if(guestscore>0){
        guestscore--;
        document.querySelector(".guestscore").innerHTML = guestscore;
    }
}
function periodChange (){
    if (period == 3){
        period = 1;
    }else if (period < 3){
        period++;
    }
    document.querySelector(".period_time").innerHTML = period;
}
function homepenaltyadd(){
    homepenalty += prompt("Player's name (home team)");
    homepenalty += "<br>";
    document.querySelector(".homepenalty").innerHTML = homepenalty;
}
function homepenaltyremove(){
    homepenalty = "";
    document.querySelector(".homepenalty").innerHTML = homepenalty;
}
function guestpenaltyadd(){
    guestpenalty += prompt("Player's name (guest team)");
    guestpenalty += "<br>";
    document.querySelector(".guestpenalty").innerHTML = guestpenalty;
}
function guestpenaltyremove(){
    guestpenalty = "";
    document.querySelector(".guestpenalty").innerHTML = guestpenalty;
}