let result;
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
    var temp = first / second;
    result = parseInt(temp);
    if(first%second == 0){
        document.querySelector(".result").innerHTML = result;
    }else{
        var modulus = first%second;
        result = `${result} modulus: ${modulus}`;
        document.querySelector(".result").innerHTML = result;
    }
}