r=0
f2=0
s1=""
f3=0
f4=0
s=1
f01=0
g=""
t=0

function de() {
    
    red.play()
    f1=f1+1
    
        s1=s1+"1"
    
         if ((r==f1)&&(g==s1)){
        
        //s=s+1
        
        document.querySelector("h1").innerHTML="level "+s
        
    }
    else{
        document.querySelector("h1").innerHTML="level "+s
    }
    
    
    
}
function de2() {
    green.play()
    f1=f1+2
    
        s1=s1+"2"
    
         if ((r==f1)&&(g==s1)){
        
       // s=s+1
        
        document.querySelector("h1").innerHTML="level "+s
        
    }
    else{
        document.querySelector("h1").innerHTML="level "+s
    }
    
    
}
function de3() {
    
    blue.play()
    f1=f1+3
    
        s1=s1+"3"
    
         if ((r==f1)&&(g==s1)){
        
        //s=s+1
        
        document.querySelector("h1").innerHTML="level "+s
        
    }
    else{
        document.querySelector("h1").innerHTML="level "+s
    }
   
}
s=0
function de4() {
    yellow.play()
    f1=f1+4
    
        s1=s1+"4"
    
         if ((r==f1)&&(g==s1)){
        
        //s=s+1
        
        document.querySelector("h1").innerHTML="level "+s
        
    }
    else{
        document.querySelector("h1").innerHTML="level "+s
    }
    
    
    
}



   








    


function ge() {
    


        
           
            
        
        
    
/*if (g!=s1) {
    for (let i = 0; i < 100; i++) {
        
        
    
    $("body").fadeOut().fadeIn().css("background-color","red");
    wrong.play()
    wrong.play()
        
    }}*/
    






    












    
        
        
    
        
   
/*if (g==f1) {

    
    
    

    
 
    



        
        
    

r=Math.floor(Math.random()*4)+1
g=g+r

if (r==1) {
    $(document).ready(function () {
        $("button.tb1").fadeOut().fadeIn();
    })
    
}
if (r==2) {
    $(document).ready(function () {
        $("button.tb2").fadeOut().fadeIn();
    })
    
}
if (r==3) {
    $(document).ready(function () {
        $("button.tb3").fadeOut().fadeIn();
    })
    
}
if (r==4) {
       
    $(document).ready(function () {
        $("button.tb4").fadeOut().fadeIn();
    })
    
}











    
        
        
    
        
        
    }
    
*/
}
function lon() {
    for (let i = 0; i < 2; i++) {
        $("h2").fadeOut().fadeIn() 
        
    }

    
}

document.addEventListener("keypress",function (event) {
    ve(event.key)    
    })
function ve(key) {
    
        switch(key){
        case "entrée":
            
            
    
    f1=0
    r=Math.floor(Math.random()*4)+1
    

if (r==1) {
    $(document).ready(function () {
        $("button.tb1").fadeOut().fadeIn();
        g=g+String(r)
        
       
        
    })
    
}
if (r==2) {
    $(document).ready(function () {
        $("button.tb2").fadeOut().fadeIn();
        g=g+String(r)

        
    })
    
}
if (r==3) {
    $(document).ready(function () {
        $("button.tb3").fadeOut().fadeIn();
        g=g+String(r)
        
        

        
    })
    
}
if (r==4) {
       
    $(document).ready(function () {
        $("button.tb4").fadeOut().fadeIn();
        g=g+String(r)
    })
    
}
    
    
   if (g==s1) {
    s=s+1
        
    document.querySelector("h1").innerHTML="level "+s
    
   }
    
    if (g!=s1) {
        document.querySelector("h1").innerHTML="level "+s
        
   
        
        
    
            
            for (let i = 0; i < 100; i++) {
        
        
    
                $("body").fadeOut().fadeIn().css("background-color","red");
                wrong.play()

           
                
            }


            
                
                
        
        }
            
    
    
s1=""
        
    }



   
    }
