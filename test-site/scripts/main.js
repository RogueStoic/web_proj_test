let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Viking.jpeg') {
      myImage.setAttribute('src','images/Viking2.jpeg');
    } else {
      myImage.setAttribute('src','images/Viking.jpeg');
    }
}