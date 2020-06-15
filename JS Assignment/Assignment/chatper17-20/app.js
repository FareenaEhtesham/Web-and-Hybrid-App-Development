// 1.
// let twoD = [];

// // 2.
// let multiD = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


// //3.
// let numeric = [1,2,3,4,5,6,7,8,9,10];
// for(let i =0 ; i<numeric.length; i++){
//     document.body.innerHTML += `${numeric[i]}<br>`
// }

// //4.
// let num = +prompt('Enter number to show its multiplication table : ');
// let len = +prompt('Enter length multiplication table : ');
// for(let j=1; j<=len;j++){
//     document.body.innerHTML += `${num}x${j}=${num*j}<br>`;
// }

// //5.
// let fruits = ['apple', 'banana', 'mango', 'orange',
//     'strawberry'];
// for(let k=0; k<fruits.length;k++){
//     document.body.innerHTML += `Element at index ${k} is ${fruits[k]}<br>`;
// }

//6.
/*Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/

// // a
// document.body.innerHTML += "<strong>Counting:</strong><br>";
// for (let i = 0; i <= 15; i++) {
//   document.body.innerHTML += `${i}`;
//   i !== 15 && (document.body.innerHTML += `, `);
// }

// // b
// document.body.innerHTML += "<br><br><strong>Reverse counting: </strong><br>";
// for (let i = 10; i > 0; i--) {
//   document.body.innerHTML += `${i}`;
//   i !== 1 && (document.body.innerHTML += `, `);
// }

// // c
// document.body.innerHTML += "<br><br><strong>Even : </strong><br>";
// for (let i = 0; i <= 20; i+=2) {
//   document.body.innerHTML += `${i}`;
//   i !== 20 && (document.body.innerHTML += `, `);
// }

// // d
// document.body.innerHTML += "<br><br><strong>Odd: </strong><br>";
// for (let i = 0; i < 19; i+=2) {
//   document.body.innerHTML += `${i}`;
//   i !== 19 && (document.body.innerHTML += ", ");
// }

// document.body.innerHTML += "<br><br><strong>Series: </strong><br>";
// // e
// for (let i=2 ; i <= 20; i+=2) {
//   document.body.innerHTML += `${i}k`;
//   i !== 20 && (document.body.innerHTML += ", ");
// }

// document.body.innerHTML += "<br><br>";

// // Q7
// let userInput = prompt("Welcome to ABC bakery! What do you want to order Sir/Ma'am? ");
// let bakeryItems =  ["cake", "apple pie", "cookie", "chips", "patties"];

// if (bakeryItems.indexOf(userInput.toLowerCase()) !== -1) {
//   document.body.innerHTML += `${userInput} is available at index ${bakeryItems.indexOf(userInput.toLowerCase())} in our bakery.`;
// } else {
//   document.body.innerHTML += `We are sorry ${userInput} is not available in our bakery.`;
// }

// document.body.innerHTML += "<br><br>";

// // Q8
// let bigNumSearch = [24, 53, 78, 91, 12]
// let largest = bigNumSearch[0];

// bigNumSearch.forEach(item => item > largest && (largest = item));

// document.body.innerHTML += `Array items: [${bigNumSearch}]<br>The largest number in array is ${largest}`;

// document.body.innerHTML += "<br><br>";

// // Q9
// let smallNumSearch = [24, 53, 78, 91, 12]
// let smallest = smallNumSearch[0];

// smallNumSearch.forEach(item => item < smallest && (smallest = item));

// document.body.innerHTML += `Array items: [${smallNumSearch}]<br>The smallest number in array is ${smallest}`;

// document.body.innerHTML += "<br><br>";

// // Q10
// let mul5 = [];
// for (let i=5; i <= 100; i+= 5)
//     mul5.push(i);

// document.body.innerHTML += mul5;
