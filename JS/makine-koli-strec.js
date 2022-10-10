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
    if(window.scrollY >= 550){
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

    //! BOX IMG COLOR
    document.getElementById("img-1").style.boxShadow = "1px 1px 9px 2px rgb(18 119 178)"

}

window.addEventListener("resize", navSlideControl);
document.addEventListener("scroll", scrollControl);
document.addEventListener("scroll", teklifControl);
window.onload=intgetir();
window.onload=navSlideControl();


function imgChange(number) {
    var list = [1,2,3]

    var mainImg = document.getElementById("mak-box-img");
    var numbImg = document.getElementById("img-" + number);

    mainImg.innerHTML = numbImg.innerHTML;

    for (var a in list) {
        document.getElementById("img-" + list[a]).style.boxShadow = "1px 1px 9px -2px #686c6e"
    }

    numbImg.style.boxShadow = "1px 1px 9px 2px rgb(18 119 178)";

}

