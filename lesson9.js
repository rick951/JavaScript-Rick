// 


var a = new Audio("audio/crab.mp3");
a.autoplay = true;
a.loop = true;
// a.onloadstart = function() {
//     alert("Starting to load video");
// };

// play song .play()
function playSong(){
    a.play();
}
// pause song .pause()
function pauseSong(){
    a.pause();
}
// reset song .load()
function resetSong(){
    a.load();
}
function setVolume(){
    a.volume = document.querySelector(".aa").value/100;
}

//creating object
var people1 = {
    //properties
    hair: 'blue',
    eyes: 'gold',


    //method 
    eat: function(){
        console.log("person1 eat");
    }

}