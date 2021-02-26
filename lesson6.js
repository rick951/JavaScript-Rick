//arrya method fore+Each()
// storing html in variable
// dynamic html (writing html with javascript)

// forEach():
// fo throught each element and run a function for each one
// it also has access to each element 4

const hey = ['tom','billy','wanda','vision','tony'];

hey.forEach(sayHi);
hey.forEach(callName);

hey.forEach(function (element){console.log(element)})// this is as same as function callName


function sayHi(){
    console.log('hi');
}
function callName(element){
    console.log(element);
}

// useful skill
const display = document.querySelector(".dis")

// display.innerHTML = "hi"
display.innerHTML = '<img src="https://ichef.bbci.co.uk/news/1024/branded_zhongwen/5074/production/_96969502_78b75efc-37fe-449f-944e-0fa30805a597.jpg">'
