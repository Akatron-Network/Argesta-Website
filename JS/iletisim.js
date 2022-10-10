"use strict";

function scrollControl(){
    if(window.scrollY >= 200){
        document.getElementById("nav-logo1").style.transform = "translate(100px,20px)";
        document.getElementById("nav-logo2").style.transform = "translateX(-50px)";
        document.getElementById("nav-logo2").style.opacity = "0";
        document.getElementsByTagName("nav")[0].style.height = "60px";      
    }
    else{
        document.getElementById("nav-logo1").style.transform = "translate(0px,0px)";
        document.getElementById("nav-logo2").style.transform = "translateX(0px)";
        document.getElementById("nav-logo2").style.opacity = "1";
        document.getElementsByTagName("nav")[0].style.height = "";
    }
}


function navSlideControl(){
    document.getElementById("ust-int").style.marginTop = document.getElementsByTagName("nav")[0].offsetHeight + "px";
}


window.addEventListener("resize", navSlideControl);
document.addEventListener("scroll", scrollControl);
window.onload = navSlideControl();
