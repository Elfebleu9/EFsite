// Barres "color" sous les onglets
     let change0 = document.getElementById('b0');
     let bar0 = document.getElementById('a0');
     change0.addEventListener('mouseover',changeback0);
     change0.addEventListener('mouseout',resetback0);

     function changeback0(){
        bar0.style.backgroundColor = 'rgb(246, 246, 18)';
     }
     function resetback0(){
        bar0.backgroundColor ='';
     }

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
         bar4.style.backgroundColor = 'rgb(241, 16, 16)';
     }
      function resetback4(){
         bar4.style.backgroundColor ='';
     }
//bordures morceaux
    
    let bord1 = document.getElementById('bl1');
    bord1.addEventListener('mouseover',animate);
    bord1.addEventListener('mouseout',animate);

    function animate(){
        bord1.addEventListener('mouseover',change2bord1);
      
        bord1.addEventListener('mouseout',reset2bord1);

        function change2bord1(){
            bord1.style.border = 'yellow 2.5px solid';
        } 
        function reset2bord1(){
            bord1.style.border ='';
        }
        
        requestAnimationFrame(animate);
    }
    animate();
   
    let bord2 = document.getElementById('bl2');
    bord2.addEventListener('mouseover',change2bord2);
    bord2.addEventListener('mouseout',reset2bord2);

    function change2bord2(){
        bord2.style.backgroundColor = 'rgb(241, 16, 16)';
    }
    function reset2bord2(){
        bord2.style.backgroundColor ='';
    }

