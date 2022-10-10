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

function teklifControl(){
    if(window.scrollY >= 930){
        document.getElementById("offer-box1").style.transform = "translateX(-412px)";
        document.getElementById("offer-box1").style.opacity = "1";
        document.getElementById("offer-box2").style.transform = "translateY(-270px)";
        document.getElementById("offer-box2").style.opacity = "1";
        document.getElementById("offer-box-text").style.opacity = "1";
    }
}

function navSlideControl(){
    document.getElementById("introduce").style.marginTop = document.getElementsByTagName("nav")[0].offsetHeight + "px";
}


function intgetir() {
    document.getElementById("int-hak-yazi").style.opacity = "1";
    document.getElementById("int-hak-yazi").style.transform = "translateX(0px)"
}

window.addEventListener("resize", navSlideControl);
document.addEventListener("scroll", scrollControl);
document.addEventListener("scroll", teklifControl);
window.onload=intgetir();
window.onload=navSlideControl();

