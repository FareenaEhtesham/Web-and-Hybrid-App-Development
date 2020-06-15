// 1.
let x = +prompt("Enter a number: "); // + to make it number
let y = +prompt("Enter another number: ");


document.body.innerHTML += `<h1>Sum of ${x} and ${y} is ${x+y}`;

// 2.
document.body.innerHTML += `<h1>Difference of ${x} and ${y} is ${x-y}`;
document.body.innerHTML += `<h1>Multiply of ${x} and ${y} is ${x*y}`;
document.body.innerHTML += `<h1>Divide of ${x} and ${y} is ${x/y}`;
document.body.innerHTML += `<h1>Modulus of ${x} and ${y} is ${x%y}`;

// 3
let num;
document.body.innerHTML = `<p>Value after variable decalartion is: ${num}</p>`;
num = 5;
document.body.innerHTML += `<p>Initial value: ${num}</p>`;
num++;
document.body.innerHTML += `<p>Value after increment is : ${num}</p>`;
num = num + 7;
document.body.innerHTML += `<p>Value after addition is: ${num}</p>`;
num--;
document.body.innerHTML += `<p>Value after decrement is: ${num}</p>`;
document.body.innerHTML += `<p>The remainder is : ${num%3}</p>`;


// 4.
let cost = 600;
document.body.innerHTML += `<h1>Total cost to buy 5 tickets to a movie is ${cost*5}PKR </h1>`;

// 5.
let table_num = 4;
document.body.innerHTML += `Table of ${table_num} <br>`;
for(let i=1 ; i<=10 ; i++){
    document.body.innerHTML += `${table_num} x ${i} = ${table_num*i} <br>`;
}

// 6.
let celsius = 25;
document.body.innerHTML += `<hr>${celsius}\u00B0C is ${(celsius * 9/5) + 32}\u00B0F`;

let fahrenheit;
fahrenheit = 70;
document.body.innerHTML += `<br>${fahrenheit}\u00B0F is ${(fahrenheit-32)*5/9}\u00B0C <hr>`;

// 7.
document.body.innerHTML += `<h1>Shopping Cart</h1>`;
let one_item = 650,one_item_quantity = 3, two_item = 100, two_item_quantity = 7,shipping = 100;
document.body.innerHTML += `Price of item 1 is ${one_item} <br>
Quantity of item 1 is ${one_item_quantity} <br>
Price of item 2 is ${two_item} <br>
Quantity of item 2 is ${two_item_quantity} <br>
Shipping Charges ${shipping}<br><br>
Total cost of your order is ${(one_item * one_item_quantity) + (two_item*two_item_quantity) + shipping}<hr>`;

//8.
let total_marks=980, obt_marks=804;
document.body.innerHTML += `<h1>Marks Sheet</h1>
Total marks: ${total_marks}<br>
Marks obtained: ${obt_marks}<br>
Percentage: ${obt_marks/total_marks * 100}% <hr>`;

// 9.
let dollar = 104.80;
let riyal = 28;
document.body.innerHTML += `<h1>Currency in PKR</h1><br>Total Currency in PKR: ${(dollar * 10) + (riyal * 25)}<hr>`; 

// 10.
let some_num = 12;
document.body.innerHTML += `${((some_num + 5)*10)/2}<hr>`;

//11. two possible ages?
let currentYear = '2020';
let birthYear = '1999';
actualAge = currentYear - birthYear;
document.body.innerHTML += `${actualAge}`;
document.body.innerHTML += `<h1>Age Calculator</h1> <br>
Current Year: ${currentYear} <br> BirthYear: ${birthYear} <br> Your Age is: ${actualAge}`;

//12.
let radius = 20;
let pi = Math.PI;
document.body.innerHTML += `<h1>The Geometrizer</h1>
<br>
Radius of a circle: ${radius} <br>
The circumference is: ${2*pi*radius}<br>
The area is: ${pi * (radius * radius)} <hr>`;

// 13.
let favSnack = 'wavy',currentAge = 21,maxAge = 65,estAmount = 2;
let duration = (maxAge - currentAge) * 365;
document.body.innerHTML  += `You will need ${duration*estAmount} wavy to last you until the ripe old age of ${maxAge}<br>`

