let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Viking.jpg') {
      myImage.setAttribute('src','images/Viking2.jpeg');
    } else {
      myImage.setAttribute('src','images/Viking.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Vikings are awesome, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Vikings are awesome,' + storedName;
}
myButton.onclick = function() {
    setUserName();
}