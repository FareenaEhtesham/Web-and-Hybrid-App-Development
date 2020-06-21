//TASK 1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello" + " " + fullName);


//TASK 2
// var Model = prompt("Enter your favourite mobile phone model:");
// var length1 = Model.length;
// alert("Length of string:" + " " + length1);

//TASK 3
// var string1 = "Pakistani";
// alert(" String : " + " " + string1);
// var index1 = string1.indexOf("n") ;
// alert("Index of 'n' : " + " " + index1);

//TASK 4
// var string2 = "Hello World";
// alert("String : " + " " + string2 );
// var index2 = string2.lastIndexOf("l");
// alert("Last Index of 'l' : " + " " + index2);

//TASK 5
// var string3 = "Pakistani";
// alert("String : " + " " + string3);
// var char1 = string3.charAt(3);
// alert("Character at Index 3 : " + " " + char1);

//TASK 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(lastName);
// alert("Hello" + " " + fullName);

//TASK 7
// var city = "Hyderabad";
// alert("City : " + " " + city);
// var replaced = city.replace("Hyder", "Islam");
// alert("After replacement : " + " " + replaced);

//TASK 8
// var message = "Ali and Sami are bestfriends. They play Cricket and football together.";
// alert("Real Message :" + " " + message);
// var newmsg = message.replace(/and/g, "&")
// alert("After required changes : " + " " + newmsg);

//TASK 9
// var value = "472";
// alert("Value " + " " + value);
// var type1 = typeof(value);
// alert("Type : " + " " + type1);
// var value2 = parseInt(value);
// alert("Value " + " " + value2);
// var type2 = typeof(value2);
// alert("Type : " + " " + type2);

//TASK 10
// var input1 = prompt("User Input:");
// var output1 = input1.toUpperCase();
// alert("Upper Case : " + " " + output1);

//TASK 11
// var input2 = prompt("User Input:");
// var firstchar = input2.slice(0,1);
// var otherchar = input2.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// var output2 = firstchar + otherchar;
// alert("Title Case : " + " " + output2);

//TASk 12
// var num = 35.36;
// alert("Number : " + " " + num);
// var str = num.toString();
// var result = str.replace(".","");
// alert("Result :" + " " + result);

//TASK 13
// var username = prompt("Enter your username: ");
// for( var i=0;i<=username.length;i++)
// {
//     if (username[i]==="!")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]===",")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]===".")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]==="@")
//     {
//         alert("Please Enter a valid username!");
//     }
// }

//TASK 14
// var bakery = ["cake","apple pie","cookie","chips","patties"];
// var item = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?:");
// var item1 = item.toLowerCase();
// for(var i=0; i<=bakery.length; i++)
// {
//     if(item1 === bakery[i])
//     {
//       alert( item1 + " " +"is available at index" + " "+ i + " " +"in our Bakery");
//       break;
//     }
//     else{
//         alert("We are sorry " + " "+ item1 + " "+ "is not available in our Bakery.");
//         break;
//     }
// }

//TASK 15
// var password = prompt("Enter password:");
// if (password.length <6){
//     alert("The password must be atleast 6 characters long, Please enter a valid password");
// }
// if(password.charAt(0)==="0")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="1")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="2")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="3")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="4")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="5")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="6")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="7")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="8")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="9")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }

//TASK 16
// var university = "University of Karachi";
// var result = university.split('');
// for( var i=0; i<=result.length-1;i++)
// {
//     document.write("<br>"+ result[i]);
// }

//TASK 17
// var ip = prompt("Enter a word:");
// alert("User Input :" + " "+ ip);
// var result = ip.slice(-1);
// alert("Last character of input :" + " "+ result);

//TASK 18
// var message = "The quick brown fox jumps over the lazy dog";
// alert("Text : " + " " + message);
// message = message.toLowerCase();
// var count =0;
// for (var i=0; i<=message.length ; i++){
//     if(message.slice(i,i+3)==="the"){
//         count += 1;
//     }
// }
// alert("There are " + " " + count + " " +"occurences of the word 'the'");





