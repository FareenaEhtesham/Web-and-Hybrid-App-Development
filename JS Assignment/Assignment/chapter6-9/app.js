// 1.
let a = +prompt("Enter a number: ");
document.body.innerHTML += `

<h1>Result<br>
The value of a is: ${a}
<h1><hr>

<h1>The value of ++a is: ${++a}<br>
    Now the value of a is: ${a}<br>
    <br>
    The value of a++ is: ${a++}<br>
    Now the value of a is: ${a}<br>
    <br>
    The value of --a is: ${--a}<br>
    Now the value of a is: ${a}<br>
    <br>
    The value of a-- is: ${a--}<br>
    Now the value of a is: ${a}<br>
    <br>
</h1>
`;

// 2.
var A = 2,
    b = 1;

var result = --A - --b + ++b + b--;

document.body.innerHTML += `
A is ${A}
b is ${b}
result is ${result}
`;

// 3.
alert("Hello " + prompt("What's your name ?"));

//4,5.
let num = +prompt("Enter a number: ") || 5;

for (let i = 1; i <= 10; i++)
    document.body.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`;

//6.
let subj1 = prompt("Enter subject 1: ");
let subj2 = prompt("Enter subject 2: ");
let subj3 = prompt("Enter subject 3: ");

let mark1 = +prompt("Enter marks for " + subj1);
let mark2 = +prompt("Enter marks for " + subj2);
let mark3 = +prompt("Enter marks for " + subj3);

document.body.innerHTML += `

<table>
<tr>
    <td>Subject</td>
    <td>Total Marks</td>
    <td>Obtained marks</td>
    <td>Percentage</td>
</tr>
<tr>
    <td>${subj1}</td>
    <td>100</td>
    <td>${mark1}</td>
    <td>${mark1 / 100 * 100 }%</td>
</tr>
<tr>
    <td>${subj2}</td>
    <td>100</td>
    <td>${mark2}</td>
    <td>${mark2 / 100 * 100 }%</td>
</tr>        <tr>
    <td>${subj3}</td>
    <td>100</td>
    <td>${mark3}</td>
    <td>${mark3 / 100 * 100 }%</td>
</tr>
<tr>
    <td><td>
    <td>300</td>
    <td>${mark1 + mark2 + mark3}</td>
    <td>${(mark1 + mark2 + mark3) * 100 / 300}</td>
<tr>
</table>
`;