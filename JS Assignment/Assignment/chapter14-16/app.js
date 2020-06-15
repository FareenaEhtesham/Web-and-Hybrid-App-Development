// 1,2.
let empty = [];

//3.
let strings = ['mids','tahir','raahim','khan'];

//4.
let numbers = [0,1,2,3,4,5,6,7,8,9];

//5.
let boolean = [true,false];

//6.
let mixed = [1,2,3,true,'john',[1,2,3],{a:'1',b:'2'}];

//7.
let qualifications = ['SSC', 'HSC', 'BCS',
    'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
qualifications.forEach(function(qualification,index){
    document.body.innerHTML += `${index+1}) ${qualification}<br>`
})

// 8.
let names = ['Justin','Alex','Zach'];
let marks = [320,230,480];
for(let j=0;j<names.length;j++){
    document.body.innerHTML += `Score of ${names[j]} is ${marks[j]}.Percentage ${marks[j]/500 * 100}%<br>`
}

//Push -> add onto end
// unshift -> add to front
// pop -> popping last thing
// shift -> pop from front

// 9.




// 10.
let scores = [320,230,480,120];
document.body.innerHTML += `${scores}<br>`;
val = scores.sort(function(x,y){
    return x-y;
})
document.body.innerHTML += `${val}<hr>`;


// 11.
let cities = ['khi','lah','isl','quetta','peshawar'];
let selectedCities = ['khi','lah','isl'];

// 12.
var arr = ['This', 'is', 'my', 'cat'];
arr = arr.join(" ");
document.body.innerHTML += `${arr}<hr>`;

//13. fifo
let devices = ['keyboard','mouse','printer','monitor'];
document.body.innerHTML += `Devices : ${devices}<br>`;
let out = +prompt('Enter how many elements you want to take out from end?')
for(let i=0;i<out;i++){
document.body.innerHTML += `Out : ${devices.pop()}<br>`;
}
document.body.innerHTML += `Devices left : ${devices}<br>`;

//14.lifo
let fruits = ['apple','apricot','grapes','mango'];
document.body.innerHTML += `Fruits : ${fruits}<br>`;
let lifo = +prompt('Enter how many elements you want to take out from beginning?')
for(let i=0;i<lifo;i++){
document.body.innerHTML += `Out : ${fruits.shift()}<br>`;
}
document.body.innerHTML += `Fruits left : ${fruits}<br><hr>`;

//15.
let manufactors = ['Apple','Samsung','Motorola','Haier'];

let menu = "<select>";
manufactors.forEach(item => menu+=`<option>${item}</option>`);
menu += "</select>";
document.write(menu);

// console.log(menu);

// '...a'
