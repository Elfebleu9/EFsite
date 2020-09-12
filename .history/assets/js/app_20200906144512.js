/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import $ from 'jquery';
// import '../sons';
import 'bootstrap';
import '../scss/app.scss';





// Barres "color" sous les onglets
let change1 = document.getElementById('b1');
let bar1 = document.getElementById('a1');
change1.addEventListener('mouseover',changeback1);
change1.addEventListener('mouseout',resetback1);

function changeback1(){
    bar1.style.backgroundColor = 'rgb(246, 246, 18)';
}
 function resetback1(){
    bar1.style.backgroundColor ='';
}

let change2 = document.getElementById('b2');
let bar2 = document.getElementById('a2');
change2.addEventListener('mouseover',changeback2);
change2.addEventListener('mouseout',resetback2);

function changeback2(){
    bar2.style.backgroundColor = 'rgb(61, 41, 243)';
}
 function resetback2(){
    bar2.style.backgroundColor ='';
}

let change3 = document.getElementById('b3');
let bar3 = document.getElementById('a3');
change3.addEventListener('mouseover',changeback3);
change3.addEventListener('mouseout',resetback3);

function changeback3(){
    bar3.style.backgroundColor = 'rgb(12, 173, 25)';
}
 function resetback3(){
    bar3.style.backgroundColor ='';
}

let change4 = document.getElementById('b4');
let bar4 = document.getElementById('a4');
change4.addEventListener('mouseover',changeback4);
change4.addEventListener('mouseout',resetback4);

function changeback4(){
    bar4.style.backgroundColor = 'rgb(241, 136, 16)';
}
 function resetback4(){
    bar4.style.backgroundColor ='';
}

//déplacement-arrêt barre menu

let navh = document.querySelector('header');
let navh2 = navh.offsetTop;

window.onscroll= function(){
    if(window.pageYOffset >navh2){
        navh.style.position ='fixed';
        navh.style.top=0;
        navh.style.width="100%";
        
    }
    else{
        navh.style.position='static';
        
    }
} 

// synchro barre controls - img

let change5 = document.querySelector('.img-thumbnail');
let barre = document.querySelector('.controls');
change5.addEventListener('mouseover',changeback5);
change5.addEventListener('mouseout',resetback5);

function changeback5(){
    barre.style.transition = 'transform 0.3s ease-out';
    barre.style.transform = 'scale(1.075)';
}
 function resetback5(){
    barre.style.transition = 'transform 0.3s ease-out';
    barre.style.transform = 'scale(1)';
}



//lecteur audio



let audio = document.querySelectorAll('.audio');
// let juice = document.querySelectorAll('.orange-juice');
// let btn = document.getElementById('play-pause');
let volumeslider = document.getElementById('volumeSlider');
// let orangeBar = document.querySelectorAll('.orange-bar');

// $('#audiopl').html('<audio src="{{extrait.morceau}}" crossOrigin="anonymous" preload="auto" type="audio/mp3"></audio>');




//mise en route lecture



function togglePlayPause() {

   

    audio .addEventListener("play", function(){
        if(audio.paused){
            btn.className="pause";
            audio.play();
        }
        else {
            btn.className = "play";
            audio.pause();
        }
    })
}
 console.log(audio);

// btn.onclick = function(){
//     togglePlayPause();
// }

// barre orange

// audio.addEventListener("timeupdate", function(){

//     let juicePos = audio.currentTime / audio.duration;

//     juice.style.width = juicePos * 100 + '%';

//     if(audio.ended) {
//         btn.className ="play";
//     }


// })

// Volume


volumeslider.addEventListener('change', function(){


    audio.volume = volumeslider.value / 100;

})


// la barre orange clikable

// let rect = orangeBar.getBoundingClientRect();
// console.log(rect);

// let largeur = rect.width;

// orangeBar.addEventListener('click', function(e){


//     // la valeur de notre click sur x par rapport a notre element

//     let x = e.clientX - rect.left;

//     let widthPercent = ((x*100)/largeur);

//     let currentTimeTrue = (widthPercent * 20 ) / 100;

//     // position en secondes
//     audio1.currentTime = currentTimeTrue;
//     // barre orange qui va la ou on clique
//     juice.style.width = widthPercent + '%';

// }) 



