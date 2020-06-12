 function clignotant3()
    {
   
        let bord3 = document.getElementById('bl3');
        let random3 = Math.round(Math.random()*5);
        bord3.addEventListener('mouseover', animate3);
        bord3.addEventListener('mouseout',reset3);


        function animate3()
        { 
                
            switch (random3)
            {
                case 0:
                    bord3.style.border = "red 2.5px solid";
                break;
                
                case 1:
                    bord3.style.border = "green 2.5px solid";
                break;
                
                case 2:
                    bord3.style.border = "blue 2.5px solid";
                break;
                
                case 3:
                    bord3.style.border = "orange 2.5px solid";
                break;
                
                case 4:
                    bord3.style.border = "yellow 2.5px solid";
                break;
            }
        }
        function reset3()
        {
            bord3.style.border ='';
        }
    }
    requestAnimationFrame(3);
    clignotant3();

    function clignotant4()
    {
   
        let bord4 = document.getElementById('bl4');
        let random4 = Math.round(Math.random()*5);
        bord4.addEventListener('mouseover', animate4);
        bord4.addEventListener('mouseout',reset4);


        function animate4()
        { 
                
            switch (random4)
            {
                case 0:
                    bord4.style.border = "red 2.5px solid";
                break;
                
                case 1:
                    bord4.style.border = "green 2.5px solid";
                break;
                
                case 2:
                    bord4.style.border = "blue 2.5px solid";
                break;
                
                case 3:
                    bord4.style.border = "orange 2.5px solid";
                break;
                
                case 4:
                    bord4.style.border = "yellow 2.5px solid";
                break;
            }
        }
        function reset4()
        {
            bord4.style.border ='';
        }
    }
    requestAnimationFrame(clignotant4);
    clignotant4();

    onload = function(){ setInterval(clignotant3,1000); setInterval(clignotant4,1000);};
    