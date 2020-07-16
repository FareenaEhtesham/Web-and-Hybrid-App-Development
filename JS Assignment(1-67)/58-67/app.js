//QUESTION 1
//(i)
var n = document.getElementById("main-content")

//(ii)
for(var i=0 ;i<n.length ; i++){

    document.write("<br/>" ,n[i].innerHTML)
}

//(iii)
var classes = document.getElementsByClassName("render")
for(var j=0 ;j<classes.length ; j++){

    document.write("<br/>" ,classes[j].innerHTML)
}
document.write("<br/>")
//(iv)

var input = document.getElementById("first-name").value="Fareena"

//(v)

var last_name = document.getElementById("last-name").value="Ehtesham"
var email = document.getElementById("email").value="abc@yahoo.com"


//QUESTION 2
//(i)
var form = document.getElementById("form-content").childNodes
for(var i=0 ;i<form.length ; i++){
    document.write("," + form[i].nodeType)
}

document.write("<br/>")

//(ii)
var lastName = document.getElementById("last-name")
document.write("Nodetype of Last Name" , lastName.nodeType)

for(var l=0 ; l<lastName.childNodes.length ;l++){
    document.write("Nodetype of Child node of Last Name" ,lastName[l].nodeType)
}


document.write("<br/>")

//(iii)
var lastName = document.getElementById("last-name")

document.write(lastName.nodeValue = "Update")


document.write("<br/>")

//(iv)
var n = document.getElementById("main-content")

document.write("First Child of main-content" , n.firstChild.nodeName,"<br/>")
document.write("Last Child of main-content" , n.lastChild.nodeName)

document.write("<br/>")

//(v)

document.write("next sibling of last Name:" ,lastName.nextSibling.nodeName,"<br/>")
document.write("previous sibling of last Name:" ,lastName.previousSibling.nodeName)

document.write("<br/>")

//(vi)
var email = document.getElementById("email")
document.write("parent node of email:" ,email.parentNode.nodeName,"<br/>")
document.write("node type of email:", email.nodeType)
