// // 1. Arthemetic Operators

// // document.write(`5 + 2`);
// // document.write(`5 * 2`);
// // document.write(`5 - 2`);
// // document.write(`5 % 2 = `);
// // document.write(`<br>`);


// // 2. If else. 


// // ==    is equal to (compare value)
// // ===   is equal to (compare value and type)

// let small = prompt("type a random number");
// let big = prompt("type another random number that is bigger then the last one");
// if (big>small){
//     document.write(`You've done it correctly`)
// } else if (big == small){
//     document.write(`it is the same number you dum ass`)
// }else{
//     document.write(`No, you are wrong you stupid`)
// }

let height = prompt(" Your height? (meter)")
let weight = prompt(" Your weight? (kg)")
let f_height = prompt(" Friend height? (meter)")
let f_weight = prompt(" Friend weight? (kg)")
let bmi = weight/(height*height)
let f_bmi = f_weight/(f_height*f_height)

document.write(`Your: <br>height: ${height}<br>weight: ${weight}<br>BMI: ${bmi}<br><br>`)
document.write(`Friend: <br>friend height: ${f_height}<br>friend weight: ${f_weight}<br>friend BMI: ${f_bmi}<br><br>`)

if (bmi > f_bmi){
    document.write(`you have a higher bmi then your friend <br>`)
}else if (bmi < f_bmi){
    document.write(`your friend have a higher bmi then you <br>`)
}else{
    document.write(`you and your friend have the same bmi<br>`)
}
document.write(`<br>`)
if(bmi < 18.5){
    document.write(`You are Underweight`)
}else if (bmi < 25){
    document.write(`Your are Normal`)
}else if (bmi < 30){
    document.write(`Your are Overweight`)
}else if (bmi >= 30){
    document.write(`Your are Obese`)
}
document.write(`<br>`)

if(f_bmi < 18.5){
    document.write(`You friend are Underweight`)
}else if (f_bmi < 25){
    document.write(`Your friend are Normal`)
}else if (f_bmi < 30){
    document.write(`Your friend are Overweight`)
}else if (f_bmi >= 30){
    document.write(`Your friend are Obese`)
}