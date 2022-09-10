//calling button
let button = document.getElementById("button");

button.onclick = function changeMode(){ //this function will add class in body to change styling of the entire page
document.body.classList.toggle("dark");

}