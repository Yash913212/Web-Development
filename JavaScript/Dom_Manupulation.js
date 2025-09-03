function btn(){
var data = document.getElementsByTagName("input")[0].value;

var click = document.getElementsByTagName("input")[1].value;

let newElement = document.createElement(data)

newElement.innerText = click;

let box = document.getElementsByTagName("body")[0];

box.appendChild(newElement);

console.log(newElement);
}