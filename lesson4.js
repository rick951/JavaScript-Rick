// 1.  html text input
// 2. get input value
// 3. converting String data type to Int data type

//you can get html element using querySelector
//.value allow you to grab what is inside the element

function disPlay (){
    let drink = document.querySelector('#drink').value;
    document.querySelector(".hey").innerHTML = drink;
}

// parseInt(data) is a built in function in js

parseInt(x); // change X in to int