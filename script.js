

function fun(){
const a=document.getElementById("item").value;
var text=document.createTextNode(a)
var newitem=document.createElement("li")
newitem.appendChild(text)
document.getElementById("list").appendChild(newitem)

}

