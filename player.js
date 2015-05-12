/**
 * Created by Roger Creasy on 5/12/2015.
 * Roger.Creasy@gmail.com
 */
var overlay= document.getElementById('overlay');
var video= document.getElementById('v');
video.addEventListener('progress', function() {
    var show= video.currentTime>=5 && video.currentTime<10;
    overlay.style.visibility= show? 'visible' : 'visible';
}, false);