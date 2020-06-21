//task 1
/*var a=new Date();
alert(a)

//*****task 2****
var b=new Date();
var c=b.getMonth();
var aray=['january','febuary','march','april','may','june','july','august','september'
,'october','november','december'];
alert('current month= ' +aray[c])

//****task 3****
var b=new Date();
var c=b.getDay();
var aray=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var d=aray[c].slice(0,3)
alert('today is ' +d);

//****task 4****
var b=new Date();
var c=b.getDay();
var aray=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
if(aray[c]=='sunday' || aray[c]=='saturday'){
    alert('its fun day')
}
else{alert("sorry :(")}

//****task 5*****
var b=new Date();
var c=b.getDate();
if(c<16){
    document.write('first fifteen days of the month')
}else{
    document.write('last days of the month')
}

//****task 6*****
var t=new Date()
let v=t.getTime()
let s=v/1000; //convert into seconds
let m=s/60;  //convert into minutes
alert(v+"\n"+m)

//****task 7****
var hour=t.getHours()
if(hour<12){
    alert('its AM')
}
else{alert('its PM')}

//****task 8*****
let laterdate=new Date("May 31,2020")
alert("last date: " + laterdate);

/*****task 9*****
let ram=new Date("April 25, 2020")
let rd=ram.getTime()
let w=t.getTime()
let diff=w-rd
let ans=Math.floor(diff/(1000*60*60*24))
alert(ans)*/

/****task 10*****
let pre=new Date("Jan 1,2020")
let mili=pre.getTime()
let ref=new Date("June 20,2020")
let milli=ref.getTime()
let q=milli-mili
let u=q/1000
document.write("<br>" + u)*/

/***task 11****
var curdate=new Date()
var d=new Date()
var a=d.getHours()
d.setHours(a-1)
alert("Current date :" +curdate +"\n" +"1 hour ago it was " + d)*/

/***task 12***
 var curdate=new Date()
var d=new Date()
var a=d.getFullYear()
d.setFullYear(a-100)
alert("Current date :" +curdate +"\n" +"100yrs back it was" + d)*/

/***task 13***
var age=prompt("enter your age ")
var a=new Date()
var cal=y.getFullYear()
var ans=cal-age;
alert("your age is: "+ age +"\n" + "your birthyear is: "+ ans)*/

/****task 14
var name=prompt("enter customer name")
var date=new Date()
var g=date.getMonth()
var aray=['january','febuary','march','april','may','june','july','august','september'
,'october','november','december'];
document.write("customer name:" + name)
document.write("<br> Current month: " +aray[g])
var unit=410
document.write("<br> Number of units: " + unit)
var charges=16
document.write("<br> charges per unit: " + charges)
var net=unit*charges
document.write("<br> Net Amount Payable (within Due Date): " + net )
document.write("<br> Last payment surcharge: 350")
var gross=net +350
document.write("<br> Gross Amount Payable (after Due Date): " + gross)*/



