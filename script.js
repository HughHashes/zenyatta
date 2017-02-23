document.getElementById("zen").addEventListener("click",function(){
    changeToNight()
});

function changeToNight(){
    if(document.getElementById("zen").className == "regular"){
        document.getElementById("sky").className = "ult";
        document.getElementById("zen").className = "ult-zen";
    }
    else if(document.getElementById("zen").className == "ult-zen"){
        document.getElementById("sky").className = "sky";
        document.getElementById("zen").className = "regular";
    }
    
}