
var result = document.getElementById("result");

const takeNumber =(myValue) =>{
 
    result.value += myValue
   
}

const Clear =() =>{
    result.value =" "
}

const Answer =() =>{
    result.value = eval(result.value)
}