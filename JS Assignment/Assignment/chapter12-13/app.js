// 1.
let character = prompt('Enter Character: ');
if(character.charCodeAt() >= 65 && character.charCodeAt() <= 90){
    document.body.innerHTML = `${character} is uppercase<hr>`;
}else if(character.charCodeAt() >= 97 && character.charCodeAt() <= 122){
    document.body.innerHTML = `${character} is lowercase<hr>`;
}else if(character.charCodeAt() >= 48 && character.charCodeAt() <= 57){
    document.body.innerHTML = `${character} is digit<hr>`;
}

// 2.
let num1 = +prompt('Enter first integer: ');
let num2 = +prompt('Enter second integer: ');
if(num1 === num2){
    document.body.innerHTML += `Both are equal<hr>`;
}else{
    document.body.innerHTML += `${(num1 > num2? 'num1 is larger':'num2 is larger')}<hr>`;
}

//3.
let n1 = +prompt('Enter number: ');
if(n1 === 0){
    document.body.innerHTML += `No. is zero<hr>`;
}else{
    document.body.innerHTML += `${(n1 > 0 ? 'no is positive ':'no is negative')}<hr>`;
}

// 4.
let char = (prompt('Enter one character: ')).toLowerCase()
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
    document.body.innerHTML += `True<hr>`;
}else{
    document.body.innerHTML += `False<hr>`;
}

// 5.
let correctPass = 'mids';
let userPass = prompt('Enter password: ');
if(userPass.length === 0){
    document.body.innerHTML += 'Please enter your password<hr>';
}else if(userPass === correctPass){
    document.body.innerHTML += 'Correct! password<hr>';
}else{
    document.body.innerHTML += 'Incorrect password<hr>';
}

// 6. 
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}

//7. 
let time = prompt('Enter time: ');
if(time >= '0000' && time < '1200'){
    document.body.innerHTML += 'Good Morning<hr>';
}else if(time >= '1200' && time < '1700'){
    document.body.innerHTML += 'Good Afternoon<hr>';
}else if(time >= '1700' && time < '2100'){
    document.body.innerHTML += 'Good Evening<hr>';
}else if(time >= '2100' && time < '2359'){
    document.body.innerHTML += 'Good Night<hr>';
}else{
    document.body.innerHTML += 'Incorrect Input<hr>';
}