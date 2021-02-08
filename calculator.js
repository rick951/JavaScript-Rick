var result;
function calculateAdd (){
    var first = parseInt(document.querySelector('.first').value);
    var second = parseInt(document.querySelector('.second').value);
    result = first + second;
    document.querySelector(".result").innerHTML = result;
}
function calculateSubtract (){
    var first = parseInt(document.querySelector('.first').value);
    var second = parseInt(document.querySelector('.second').value);
    result = first - second;
    document.querySelector(".result").innerHTML = result;
}function calculateMultiply (){
    var first = parseInt(document.querySelector('.first').value);
    var second = parseInt(document.querySelector('.second').value);
    result = first * second;
    document.querySelector(".result").innerHTML = result;
}function calculateDivide (){
    var first = parseInt(document.querySelector('.first').value);
    var second = parseInt(document.querySelector('.second').value);
    result = first / second;
    document.querySelector(".result").innerHTML = result;
}