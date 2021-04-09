function stop() {
    setTimeout(() => { console.log("start"); }, 1000);
  }
var slap = new Audio('audio/slap.mp3');

var TheLastofUs2 = new Audio('audio/TheLastofUs2.mp3');
var Darksoul3 = new Audio('audio/DarkSoul3.mp3');
var morning = new Audio('audio/morning.mp3');
var correct = new Audio('audio/corect.mp3');
var score = 70;
var count = 0; 
var p1 = 0; 
var p2 = 0;
var game = false;
var study = false;
$(document).ready(function(){$("#right").hover(
  function(){if(game && count == 1){TheLastofUs2.play();}}, 
  function(){TheLastofUs2.pause();}
  );});
  $(document).ready(function(){$("#left").hover(
    function(){if(game && count == 1){Darksoul3.play();}}, 
    function(){Darksoul3.pause();}
    );});
function startGame(){
  startdiv.remove();
  document.querySelector("#top").innerHTML = "It is 6:00 now it is time to decide that if you are going to do your test preperation or just relax and play some game. ";
  document.getElementById('mid').style.backgroundImage="url(images/HWvsGameN.jpg)";
  document.querySelector("#button1").innerHTML = "Review your test";
  document.querySelector("#button2").innerHTML = "Play some fun game";
  
}
function button1(){
  if(count == 0){
    score += 10;
    study = true;
    document.getElementById('mid').style.backgroundImage="url(images/HWwin.jpg)";
    document.querySelector("#top").innerHTML = "Test is my only intrest!!! ";
    document.querySelector("#button1").innerHTML = "";
    document.querySelector("#button2").innerHTML = "";
    setTimeout(() => {   slap.play() }, 500);
    setTimeout(() => { 
      document.querySelector("#top").innerHTML = "Here is your first review question: ";
      document.querySelector("#button1").innerHTML = "A";
      document.querySelector("#button2").innerHTML = "B";
      document.getElementById('mid').style.backgroundImage="url(images/question1.jpg)";//b is answer
     }, 3000);
    setTimeout(() => {document.getElementById('time').innerHTML="20:00"; }, 4000);

    count++;
  }else if(count == 1 && game){
    score -= 8+Math.random() * 3;
    document.querySelector("#top").innerHTML = "here is how you play the game.";
    document.getElementById('mid').innerHTML = "<object width=\"70%\" height=\"100%\"><param name=\"movie\"  value=\"http://www.youtube.com/v/JYcz5AlOVRA?autoplay=1&mute=1version=3&hl=en_US\"></param><param    name=\"allowFullScreen\" value=\"true\"></param><param     name=\"allowscriptaccess\" value=\"always\"></param><embed     src=\"http://www.youtube.com/v/JYcz5AlOVRA?version=3&hl=en_US\"     type=\"application/x-shockwave-flash\" width=\"560\" height=\"315\"     allowscriptaccess=\"always\"     allowfullscreen=\"true\"></embed></object>";
    document.querySelector("#button1").innerHTML = "keep playing";
    document.querySelector("#button2").innerHTML = "Go to sleep";
    document.querySelector("#bottem").innerHTML = "you play until 9:00 what do you do?";
    document.getElementById('time').innerHTML="21:00";
    count++;
  } else if(count == 1 && study){
    score -= 8 + Math.random() * 3;
    alert("This is the wrong answer! ");
  }else if(count == 2 && study){
    correct.play();
    document.querySelector("#button1").innerHTML = "score";
    document.querySelector("#button2").innerHTML = "score";
    document.querySelector("#bottem").innerHTML = "it is the week after the exam now, let us look at your score!";
    count++;
  }else if(count == 2 && game){
    document.getElementById('time').innerHTML="21:00";
    score -= 20;
    setTimeout(() => {document.getElementById('time').innerHTML="22:00"; }, 1000);
    setTimeout(() => {document.getElementById('time').innerHTML="23:00"; }, 1500);
    setTimeout(() => {document.getElementById('time').innerHTML="00:00"; }, 2000);
    setTimeout(() => {document.getElementById('time').innerHTML="01:00"; }, 2500);
    setTimeout(() => {document.getElementById('time').innerHTML="02:00"; }, 3000);
    setTimeout(() => {document.getElementById('time').innerHTML="03:00";
    document.getElementById('mid').innerHTML = "";
    document.querySelector("#button1").innerHTML = "score";
    document.querySelector("#button2").innerHTML = "score";
    document.querySelector("#bottem").innerHTML = "it is the week after the exam now, let us look at your score!";
  }, 3500);
    count++;
  }else if(count == 3){
    document.getElementById('mid').style.backgroundImage="none";
    choice.remove();
    score +=  Math.random() * 30;
    score -=  Math.random() * 30;
    score = parseInt(score);
    document.getElementById('mid').innerHTML = score;
    document.querySelector("#top").innerHTML = "This is the score you get in the AP calculus exam";
    if(score >= 70 && study){
      document.querySelector("#bottem").innerHTML =  "<br>Nice you get high score for your hard work";
    }else if(score < 70 && study){
      document.querySelector("#bottem").innerHTML =  "<br>you know sometimes hard work mean nothing...";
    }else if(score >= 70 && game){
      document.querySelector("#bottem").innerHTML =  "<br>you got lucky this time";
    }else if(score < 70 && game){
      document.querySelector("#bottem").innerHTML =  "<br>this is the cost of the game...";
    }
  }

}

function button2(){
if(count == 0){
    game = true;
    setTimeout(() => {   }, 500);
    score -= 10;
    document.querySelector("#top").innerHTML = "What game do you like to play?";
    document.querySelector("#button1").innerHTML = "Darksoul 3";
    document.querySelector("#button2").innerHTML = "The Last of Us 2";
    document.querySelector("#bottem").innerHTML = "hover your mouse over the poster to listen to the theme song.";
    document.getElementById('mid').style.backgroundImage="none";
    document.getElementById('left').style.backgroundImage="url(images/darksoul3.jpg)";
    document.getElementById('right').style.backgroundImage="url(images/TheLastofUs2.jpg)";
    count++;
  } else if(count == 1 && game){
    alert("This game does not exist. ");
    score -= Math.random() * 3;
  } else if(count == 1 && study){
    correct.play();
    score += 18 + Math.random() * 3;
    setTimeout(() => { 
      document.querySelector("#top").innerHTML = "Here is your last review question: ";
      document.querySelector("#button1").innerHTML = "A";
      document.querySelector("#button2").innerHTML = "B";
      document.getElementById('mid').style.backgroundImage="url(images/question2.jpg)";//a is answer
    }, 2000);
    setTimeout(() => {document.getElementById('time').innerHTML="22:00"; }, 3000);
    count++;
  }else if(count == 2 && study){
    score -= 8 + Math.random() * 3;
    alert("This is the wrong answer! ")
  }else if(count == 2 && game){
    score += 5;
    setTimeout(() => {document.getElementById('time').innerHTML="22:00"; }, 1000);
    setTimeout(() => {document.getElementById('time').innerHTML="23:00"; }, 1500);
    setTimeout(() => {document.getElementById('time').innerHTML="00:00"; }, 2000);
    setTimeout(() => {document.getElementById('time').innerHTML="01:00"; }, 2500);
    setTimeout(() => {document.getElementById('time').innerHTML="02:00"; }, 3000);
    setTimeout(() => {document.getElementById('time').innerHTML="03:00"; morning.play(); }, 3500);
    setTimeout(() => {document.getElementById('time').innerHTML="05:00"; }, 4000);
    setTimeout(() => {document.getElementById('time').innerHTML="07:00";  
    document.getElementById('mid').innerHTML = "";
    document.querySelector("#bottem").innerHTML = "it is the week after the exam now, let us look at your score!";

    document.querySelector("#button1").innerHTML = "the score you get";
    document.querySelector("#button2").innerHTML = "the score you get";
    }, 4500);
    count++;
  }else if(count == 3){
    document.getElementById('mid').style.backgroundImage="none";
    choice.remove();
    score +=  Math.random() * 30;
    score -=  Math.random() * 30;
    score = parseInt(score);
    document.getElementById('mid').innerHTML = score;
    document.querySelector("#top").innerHTML = "This is the score you get in the AP calculus exam";
    if(score >= 70 && study){
      document.querySelector("#bottem").innerHTML =  "<br>Nice you get high score for your hard work";
    }else if(score < 70 && study){
      document.querySelector("#bottem").innerHTML =  "<br>you know sometimes hard work mean nothing...";
    }else if(score >= 70 && game){
      document.querySelector("#bottem").innerHTML =  "<br>you got lucky this time";
    }else if(score < 70 && game){
      document.querySelector("#bottem").innerHTML =  "<br>this is the cost of the game...";
    }
  }
}


//document.getElementById('a').style.backgroundImage="url(images/img.jpg)";

//remove
// function myFunction() {
//   var myobj = document.getElementById("demo");
//   myobj.remove();
// }