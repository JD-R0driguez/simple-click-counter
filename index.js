/* Create a counter program to increase and decrease a number

1- Create the document elements for user input
2- Create variables to read user input
3- Modify html after user input
4- Update the page style

*/

let counter = 0;

function increase(){
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
}

function decrease(){
    counter -= 1;
    document.getElementById("counter").innerHTML = counter;
}

function reset(){
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}

document.getElementById("increase").onclick = increase;
document.getElementById("reset").onclick = reset;
document.getElementById("decrease").onclick = decrease;