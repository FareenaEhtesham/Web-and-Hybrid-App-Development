/****task 1
function datetime(){
    var a=new Date()
    document.write(a)
}
datetime()*/

/***task 2
function Name(fname,lname){
alert("hello Ms " +fname+" "+lname)
}
Name("wareesha","nasir")*/

/***task 3
function add(x,y){
    return(x + y)  

}
var c=add(5,6)
document.write(c)*/

/***task 4
function calculator(x,y,op){
    if(op==="+"){
        return (x+y)
    }
    else if (op==="-"){
        return (x-y)
    }
    else if (op==="*") {
        return(x*y)
    }
    else if (op==="/"){
        return (x/y)
    }
     else {
        return("invalid")
    }
}
var c=calculator(15,5,"/")
document.write(c)*/

/***task 5
function square(num){
return (num*num)
}
var s=square(8)
alert(s)*/

/****task 6
function fact(num){
    if(num!=1){
    return num * fact(num - 1)
}
else return(1)
}
alert(fact(6))*/ 
 
/****task 7
 function count(n,m){
     for(i=n;i<=m;i++){
        document.write(i + "<br>")
     }
 }
 count(1,20)*/

 /***task 8
 function calculateHypotenuse(){
function calculateSquare(b,per){
    return(b*b + per*per)
}
var ans=calculateSquare(3,4)
var hypo=ans
return hypo
 }

var res=calculateHypotenuse()
document.write(res)*/

/****task 9
function calArea(w,l){
    return(w*l)
}
var ans=calArea(7,10)
document.write(ans)
var a=5
var b=11
var res=calArea(a,b)
document.write("<br>"+res)*/

/****task 10
function checkPalindrome(str) {
    // remove punctuation, to lower case.
    //str = str.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
    // Compare the string with it's reversed version.
    if(str == str.split('').reverse().join('')){
        document.write("it is palindrome")
    }
    else{
        document.write("it is not a palindrome")
    }
}
checkPalindrome("level")*/

/***task 11
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
          }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 
 document.write(titleCase("I'm a little tea pot"));*/

 /***task 12
function longString(word){
var b=word.split(' ')
var len=0
for(i=0;i<b.length;i++){
    if(len<b[i].length){
        len=b[i].length
        var a=b[i]
    }
}
return(a)
}
document.write(longString("This is the world of technology"))*/

/***task 13
function countString(word,w){
    var count=0;
    for(i=1;i<=word.length;i++){
if(word[i]==w){
count++;
}
}
return (count)
}
let res=countString("hello","l")
document.write(res)**/

/****task 14
function calcCircumference(r){
return(2*r*3.142)
}
function calcArea(r){
    return(3.142*r*r)
}
var res=calcCircumference(4)
document.write("the circumference is: " +res)
var ans=calcArea(5)
document.write("<br>"+"the area of circle is: "+ans)*/