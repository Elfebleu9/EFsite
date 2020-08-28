"use strict";

require("../scss/app.scss");

var _jquery = _interopRequireDefault(require("jquery"));

require("bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
// import '../images';
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// Barres "color" sous les onglets
var change1 = document.getElementById('b1');
var bar1 = document.getElementById('a1');
change1.addEventListener('mouseover', changeback1);
change1.addEventListener('mouseout', resetback1);

function changeback1() {
  bar1.style.backgroundColor = 'rgb(246, 246, 18)';
}

function resetback1() {
  bar1.style.backgroundColor = '';
}

var change2 = document.getElementById('b2');
var bar2 = document.getElementById('a2');
change2.addEventListener('mouseover', changeback2);
change2.addEventListener('mouseout', resetback2);

function changeback2() {
  bar2.style.backgroundColor = 'rgb(61, 41, 243)';
}

function resetback2() {
  bar2.style.backgroundColor = '';
}

var change3 = document.getElementById('b3');
var bar3 = document.getElementById('a3');
change3.addEventListener('mouseover', changeback3);
change3.addEventListener('mouseout', resetback3);

function changeback3() {
  bar3.style.backgroundColor = 'rgb(12, 173, 25)';
}

function resetback3() {
  bar3.style.backgroundColor = '';
}

var change4 = document.getElementById('b4');
var bar4 = document.getElementById('a4');
change4.addEventListener('mouseover', changeback4);
change4.addEventListener('mouseout', resetback4);

function changeback4() {
  bar4.style.backgroundColor = 'rgb(241, 136, 16)';
}

function resetback4() {
  bar4.style.backgroundColor = '';
}

var navh = document.querySelector('header');
var navh2 = navh.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > navh2) {
    navh.style.position = 'fixed';
    navh.style.top = 0;
    navh.style.width = "100%";
  } else {
    navh.style.position = 'static';
  }
}; // const navh = document.querySelector('header');
// window.navh=navh;
// window.addEventListener('scroll', ()=> {
//     if(window.scrollY>navh.offsetTop){
//         navh.style.position ='fixed';
//         navh.style.top=0;
//         navh.style.width="100%";
//     }
//     else{
//         navh.style.position='static';
//     }
// })