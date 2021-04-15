let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Viking1.png') {
      myImage.setAttribute('src','images/Viking2.png');
    } else {
      myImage.setAttribute('src','Viking1.png');
    }
}