import $ from 'jquery';
import 'bootstrap';

// Barres "color" sous les onglets
const change0 = document.getElementById('b0');
const bar0 = document.getElementById('a0');
change0.addEventListener('mouseover',changeback0);
change0.addEventListener('mouseout',resetback0);

function changeback0(){
    bar0.style.backgroundColor = 'rgb(246, 18, 18)';
}
function resetback0(){
    bar0.style.backgroundColor ='';
}

const change1 = document.getElementById('b1');
const bar1 = document.getElementById('a1');
change1.addEventListener('mouseover',changeback1);
change1.addEventListener('mouseout',resetback1);

function changeback1(){
    bar1.style.backgroundColor = 'rgb(246, 246, 18)';
}
 function resetback1(){
    bar1.style.backgroundColor ='';
}

const change2 = document.getElementById('b2');
const bar2 = document.getElementById('a2');
change2.addEventListener('mouseover',changeback2);
change2.addEventListener('mouseout',resetback2);

function changeback2(){
    bar2.style.backgroundColor = 'rgb(61, 41, 243)';
}
 function resetback2(){
    bar2.style.backgroundColor ='';
}

const change3 = document.getElementById('b3');
const bar3 = document.getElementById('a3');
change3.addEventListener('mouseover',changeback3);
change3.addEventListener('mouseout',resetback3);

function changeback3(){
    bar3.style.backgroundColor = 'rgb(12, 173, 25)';
}
 function resetback3(){
    bar3.style.backgroundColor ='';
}

const change4 = document.getElementById('b4');
const bar4 = document.getElementById('a4');
change4.addEventListener('mouseover',changeback4);
change4.addEventListener('mouseout',resetback4);

function changeback4(){
    bar4.style.backgroundColor = 'rgb(241, 136, 16)';
}
 function resetback4(){
    bar4.style.backgroundColor ='';
}

// impression titre dans input photo
$('.custom-file-input').on('change', function(e){
    let inputFile = e.currentTarget;
    $(inputFile).parent().find('.custom-file-label').html(inputFile.files[0].name);
});

//déplacement - blocage de la nav

const navh = document.querySelector('header');
const navh2 = navh.offsetTop;

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


