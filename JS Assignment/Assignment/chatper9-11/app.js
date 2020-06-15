// 1.
let city = prompt('Enter city name: ');
if(city.toLowerCase() === "karachi"){
    document.body.innerHTML += `Welcome to city of lights<br>`;
}

// 2.
let gender = prompt('Enter gender: ');
if(gender.toLowerCase() === "male"){
    document.body.innerHTML += `<p>Good Morning Sir</p>`;
}else if(gender.toLowerCase() === "female") {
    document.body.innerHTML += `<p>Good Morning Ma'am</p><hr>`;
}

// 3.
let color = prompt('Enter color: ');
if(color.toLowerCase() === "red"){
    document.body.innerHTML += `Must Stop`;
}else if(color.toLowerCase() === "yellow"){
    document.body.innerHTML += `Ready to move`;
}else if(color.toLowerCase() === "green"){
    document.body.innerHTML += `Move now<hr>`;
}

// 4.
let fuel = +prompt('Enter fuel: ');
if(fuel < 0.25){
    document.body.innerHTML += `Please refill the fuel in your car<hr>`;
}

// 5.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");//true
}
///
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");//false
}
///
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");//true
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");//true
}
////
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
////
if (true){
    alert("True");
}
if (false){
    alert("False");
}
///
if("car" < "cat"){
    alert("car is smaller than cat");
}

// 6.
let totalMarks = +prompt('Enter Total Marks: ');
let obtMarks = +prompt('Enter Obtained Marks: ');
let percentage = (obtMarks/totalMarks) * 100;
let grade, remarks;
if(percentage >= 80){
    grade = 'A-one';
    remarks = 'Excellent';
}else if(percentage >= 70){
    grade = 'A';
    remarks = 'Good';
}else if(percentage >= 60){
    grade = 'B';
    remarks = 'You need to improve';
}else{
    grade = 'Fail';
    remarks = 'Sorry';
}
document.body.innerHTML += `<h1>Marksheet</h1>`;
document.body.innerHTML += `Total marks: ${totalMarks}<br> Marks obtained : ${obtMarks}<br>Percentage : ${percentage}%<br>Grade: ${grade}<br>Remarks: ${remarks}<hr>`;

// 7.
let secretNum = 9;
let guess = +prompt('Guess secret number: ');
if(guess === 9){
    document.body.innerHTML += 'Bingo! Correct answer<hr>';
}else if(guess === secretNum+1){
    document.body.innerHTML += 'Close enough to the correct answer<hr>';
}

// 8.
let num = +prompt('Enter number: ');
if(num % 3 == 0){
    document.body.innerHTML += `Number is divisible by 3<hr>`;
}else{
    document.body.innerHTML += `Number is not divisible by 3<hr>`;
}

// 9.
let number = +prompt('Enter number: ');
if(number % 2 == 0){
    document.body.innerHTML += `Number is even<hr>`;
}else{
    document.body.innerHTML += `Number is odd<hr>`;
}

// 10.
let temp = +prompt('Enter temperature: ');
if(temp > 40){
    document.body.innerHTML += `It is too hot outside.<hr>`;
}else if(temp > 30){
    document.body.innerHTML += `The Weather today is Normal.<hr>`
}else if(temp > 20){
    document.body.innerHTML += `Today’s Weather is cool.<hr>`
}else{
    document.body.innerHTML += `OMG! Today’s weather is so Cool.<hr>`
}


// 11.
let firstNum =  +prompt('Enter first Number: ');
let secondNum = +prompt('Enter second Number: ');
let operator = prompt('Enter operator: ');
switch(operator){
    case '+':
        document.body.innerHTML += `${firstNum+secondNum}<hr>`;
        break;
    case '-':
        document.body.innerHTML += `${firstNum-secondNum}<hr>`;
        break;
    case '*':
        document.body.innerHTML += `${firstNum*secondNum}<hr>`;
        break;
    case '/':
        if(secondNum === 0){
            document.body.innerHTML += `Zero Division Error<hr>`
        }else{
        document.body.innerHTML += `${firstNum/secondNum}<hr>`;
            }
        break;
    default:
        document.body.innerHTML += `Try again<hr>`
}