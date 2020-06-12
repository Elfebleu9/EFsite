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
         bar4.style.backgroundColor = 'rgb(241, 16, 16)';
     }
      function resetback4(){
         bar4.style.backgroundColor ='';
     }
// bordures morceaux


     

    // function clignotant1()
    // {
   
    //     let bord1 = document.getElementById('bl1');
    //     let random1 = Math.round(Math.random()*5);
    //     bord1.addEventListener('mouseover', animate1);
    //     bord1.addEventListener('mouseout',reset1);


    //     function animate1()
    //     { 
                
    //         switch (random1)
    //         {
    //             case 0:
    //                 bord1.style.border = "red 2.5px solid";
    //             break;
                
    //             case 1:
    //                 bord1.style.border = "green 2.5px solid";
    //             break;
                
    //             case 2:
    //                 bord1.style.border = "blue 2.5px solid";
    //             break;
                
    //             case 3:
    //                 bord1.style.border = "orange 2.5px solid";
    //             break;
                
    //             case 4:
    //                 bord1.style.border = "yellow 2.5px solid";
    //             break;
    //         }
    //     }
    //     function reset1()
    //     {
    //         bord1.style.border ='';
    //     }
    // }
    // requestAnimationFrame(clignotant1);
    // clignotant1();

    // function clignotant2()
    // {
   
    //     let bord2 = document.getElementById('bl2');
    //     let random2 = Math.round(Math.random()*5);
    //     bord2.addEventListener('mouseover', animate2);
    //     bord2.addEventListener('mouseout',reset2);


    //     function animate2()
    //     { 
                
    //         switch (random2)
    //         {
    //             case 0:
    //                 bord2.style.border = "red 2.5px solid";
    //             break;
                
    //             case 1:
    //                 bord2.style.border = "green 2.5px solid";
    //             break;
                
    //             case 2:
    //                 bord2.style.border = "blue 2.5px solid";
    //             break;
                
    //             case 3:
    //                 bord2.style.border = "orange 2.5px solid";
    //             break;
                
    //             case 4:
    //                 bord2.style.border = "yellow 2.5px solid";
    //             break;
    //         }
    //     }
    //     function reset2()
    //     {
    //         bord2.style.border ='';
    //     }
    // }
    // requestAnimationFrame(clignotant2);
    // clignotant2();

    // function clignotant3()
    // {
   
    //     let bord3 = document.getElementById('bl3');
    //     let random3 = Math.round(Math.random()*5);
    //     bord3.addEventListener('mouseover', animate3);
    //     bord3.addEventListener('mouseout',reset3);


    //     function animate3()
    //     { 
                
    //         switch (random3)
    //         {
    //             case 0:
    //                 bord3.style.border = "red 2.5px solid";
    //             break;
                
    //             case 1:
    //                 bord3.style.border = "green 2.5px solid";
    //             break;
                
    //             case 2:
    //                 bord3.style.border = "blue 2.5px solid";
    //             break;
                
    //             case 3:
    //                 bord3.style.border = "purple 2.5px solid";
    //             break;
                
    //             case 4:
    //                 bord3.style.border = "yellow 2.5px solid";
    //             break;
    //         }
    //     }
    //     function reset3()
    //     {
    //         bord3.style.border ='';
    //     }
    // }
    // requestAnimationFrame(3);
    // clignotant3();

    // function clignotant4()
    // {
   
    //     let bord4 = document.getElementById('bl4');
    //     let random4 = Math.round(Math.random()*5);
    //     bord4.addEventListener('mouseover', animate4);
    //     bord4.addEventListener('mouseout',reset4);


    //     function animate4()
    //     { 
                
    //         switch (random4)
    //         {
    //             case 0:
    //                 bord4.style.border = "red 2.5px solid";
    //             break;
                
    //             case 1:
    //                 bord4.style.border = "green 2.5px solid";
    //             break;
                
    //             case 2:
    //                 bord4.style.border = "blue 2.5px solid";
    //             break;
                
    //             case 3:
    //                 bord4.style.border = "purple 2.5px solid";
    //             break;
                
    //             case 4:
    //                 bord4.style.border = "yellow 2.5px solid";
    //             break;
    //         }
    //     }
    //     function reset4()
    //     {
    //         bord4.style.border ='';
    //     }
    // }
    // requestAnimationFrame(clignotant4);
    // clignotant4();

    // onload = function(){ setInterval(clignotant1,1000); setInterval(clignotant2,1000); setInterval(clignotant3,1000); setInterval(clignotant4,1000);};
    
    
    

    // function animate(){
    //     bord1.addEventListener('mouseover',change2bord1);     
    //     bord1.addEventListener('mouseout',reset2bord1);

    //     function change2bord1(){
    //         bord1.style.border = 'yellow 2.5px solid';
    //     }
   
    //     function reset2bord1(){
    //         bord1.style.border ='';
    //     }
        
    //     requestAnimationFrame(animate);
    // }
    // animate();
   
    // let bord2 = document.getElementById('bl2');
    // bord2.addEventListener('mouseover',change2bord2);
    // bord2.addEventListener('mouseout',reset2bord2);

    // function change2bord2(){
    //     bord2.style.backgroundColor = 'rgb(241, 16, 16)';
    // }
    // function reset2bord2(){
    //     bord2.style.backgroundColor ='';
    // }

