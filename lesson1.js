// // writing to document

// document.write("Hello World!");

// // Variable
// // Number - don't need "" to write number
// // boolean - true or false

// var name1 = "Rick Ning";
// document.write(name1);

// var x = 7;
// document.write(" "+x+" ");

// //concatination 
// //allow you to join together different elements

// var myName = "Rick Ning"
// var age = 18;


// document.write(myName+" is "+age);

// //ES6 combination
// document.write(`${myName} is ${age} years old`);

// //Es6 Variable


// const student = "tiger"; //const is a constant that will not change
// let teacher = "Mr.AAAAA"; // let is variable that will change

// //prompt() allow us to get value from user

// let userName = prompt("What is your user name?");

// document.write(`<br>username: ${userName}`);
let name1 = prompt("Make up a boy's name");
let spell = prompt("A spell");
let devil_name = prompt("A name of devil");
let devil_spell = prompt("Devil's spell");
let devil_spell2 = prompt("Another Devil's spell");

document.write(
    `once upon a time there was a little boy. His name is ${name1}. His father is almost dead and he has money to go to the doctor. One day he found an ancient spell that could summon an angel. He thinks by using this spell he could let the angel cure his father. He read out the spell "${spell}" . <br> Suddenly the sky is full of dark clouds, thunder strike in front of ${name1}. There is no angel, a devil shown itself in front of the little boy. <br>
    Devil: My name is ${devil_name}. I am here to give you a deal. <br>
    ${name1}: what deal? <br>
    Devil: I will give your father health, for the price I will take your soul.<br>
    ${name1}: Will I die?<br>
    Devil: No! I will only take your soul after you die. <br>
    ${name1}: Why do you want my soul? <br>
    Devil: Hum~~ This is a very complicated problem. Simply If I get many souls the power that we can use in this world will be stronger. I know it is very complicated, but it is none of your business. <br>
    ${name1}: I only wish for my father's health. <br>
    Devil: Great! ${devil_spell}<br>
    ${name1}: Is my father cure now?<br>
    Devil: Not yet, tomorrow morning when your dad wakes up his sickness will be gone, but here's another piece of paper that you need to sign. 
    ${name1}: You want to go back on your word?<br>
    Devil: No. This paper is to promise that God won't take your soul after you die. They often use excuses like "Saving the Lost Lamb" and blew up our deal. 
    ${name1}: why don't they help us when we are alive? <br>
    Devil: Good point! I feel like you are a special child. Here I will give you another deal. You can get all the power and wealth in the continent, but in trade, you can no longer love anyone from now on. <br>
    ${name1}: can I still love my father? <br>
    Devil: Yes, of course. <br>
    ${name1}: What is the point of not loving others? <br>
    Devil: If you don't love others then your soul will not be polluted by others.<br>
    ${name1}: I will take the deal. <br>
    Devil: Becareful love is one thing that people will give up everything they have, are you sure?
    ${name1}: Yes<br>
    Devil: You need to be sure if you look back into history you will see great person that couldn't take the price of love. <br>
    ${name1}: I can still love my family right?<br>
    Devil: Yes, but you are still young and full of future, one of the futures that are most dangerous and beautiful is love. Even the calmest and realistic people will fall their knees to love. <br>
    ${name1}: My mother told me to be great and responsible.<br>
    Devil: believe me you already are. 
    ${name1}: but that's not enough.<br>
    Devil: then be careful do not to use the power that I gave you too much. know what you want. <br>
    Devil: Your family will be healthy and you will grow up one day. Then you will meet a girl that change your life. You will lose a lot, but remember those things are never yours.<br>
    Devil: "${devil_spell2}"<br>
    <br><br>
    (story from Tales of Tarsylia)`
)