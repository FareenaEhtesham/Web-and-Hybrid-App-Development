// 1.
let age = 21;
alert('I am ' + age + ' years old');

// 2. 
window.addEventListener('load', () => {
  if (localStorage.getItem('visits') > 0) {
    localStorage.setItem('visits', parseInt(localStorage.getItem('visits'))+1);
  } else {
    localStorage.setItem('visits', 1);
  }

  document.body.innerHTML += `<h1> You have visited the site ${localStorage.getItem('visits')} times.</h1><br><br>`;
});



// 3.
let birthYear = 1999;
document.body.innerHTML =  `My birthYear is: ${birthYear} <br> Data type of my declared variable is ${typeof birthYear}`;

// 4.
let visitName = 'John Doe';
let productTitle = '5 T-shirt';
let website = 'XYZ Clothing store';
document.body.innerHTML =  `${visitName} ordered ${productTitle} on ${website}`;