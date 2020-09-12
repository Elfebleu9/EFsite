import $ from 'jquery';
import 'bootstrap';
import '../scss/app.scss';






//lecteur audio



var audio = document.querySelector('.audio');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');
var volumeslider = document.getElementById('volumeSlider');
var orangeBar = document.querySelector('.orange-bar');

// $('#audiopl').html('<audio src="{{extrait.morceau}}" crossOrigin="anonymous" preload="auto" type="audio/mp3"></audio>');




//mise en route lecture

btn.addEventListener("toggle",function(){
    
    audio.addEventListener("play", function(){
        if(audio.paused){
            btn.className="pause";
            audio.play();
        }
        else {
            btn.className = "play";
            audio.pause();
        }
    });
});

// function togglePlayPause() {

   
// }
 
 

// btn.onclick = function(){
//     togglePlayPause();
// };
console.log(audio.play());
// barre orange

audio.addEventListener("timeupdate", function(){

    var juicePos = audio.currentTime / audio.duration;

    juice.style.width = juicePos * 100 + '%';

    if(audio.ended) {
        btn.className ="play";
    }
});

// Volume


volumeslider.addEventListener("change", function(){


    audio.volume = volumeslider.value / 100;

});


// la barre orange clikable

var rect = orangeBar.getBoundingClientRect();


var largeur = rect.width;

orangeBar.addEventListener('click', function(e){


    // la valeur de notre click sur x par rapport a notre element

    var x = e.clientX - rect.left;

    var widthPercent = ((x*100)/largeur);

    var currentTimeTrue = (widthPercent * 20 ) / 100;

    // position en secondes
    audio.currentTime = currentTimeTrue;
    // barre orange qui va la ou on clique
    juice.style.width = widthPercent + '%';

}); 

