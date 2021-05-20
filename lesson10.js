// 1. javascript event
// 2. how do we see these event?
// 3. how can we use the event?

// addEventListener( event , function ) 


// document.querySelector("body").addEventListener("keydown", showKeycode);
// document.querySelector("body").addEventListener("keydown", shutDown);
document.querySelector("body").addEventListener("keydown", changeColor);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function showEvent(event){
    console.log(event);
}
function showKeycode(event){
    console.log(event.keyCode);
}
function shutDown(event){
    if(event.keyCode == 40 ){
        alert("fdsafdsafdsaf");
    }
}
function changeColor(event){
    if(event.keyCode == 32 ){

        document.querySelector("body").style.background = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
    }
}
function sauHi(){
    console.log("Hi~~");
}