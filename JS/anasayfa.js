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
    document.getElementById("carouselExampleDark").style.marginTop = document.getElementsByTagName("nav")[0].offsetHeight + "px";
}

window.addEventListener("resize", navSlideControl);
document.addEventListener("scroll", scrollControl);
window.onload = detaygetir(1);
window.onload=navSlideControl();



var urunkodlar = [1, 2, 3, 4, 5, 6]
var secili = 1000;

function detaygetir(no, user = false) {

    for (var kod in urunkodlar) {
        var detay = document.getElementById("detay_" + urunkodlar[kod]);
        detay.style.display = "none";
        var detaya = document.getElementById("detay" + urunkodlar[kod] + "a");
        detaya.style.display = "none";
        var detayb = document.getElementById("detay" + urunkodlar[kod] + "b");
        detayb.style.display = "none";

        detaya.style.transform = "translateX(-150px)";
        detaya.style.opacity = "0";
        detayb.style.transform = "translateX(300px)";
        detayb.style.opacity = "0";
        
        document.getElementsByClassName("pro-card")[kod].style.opacity = null;
        document.getElementsByClassName("pro-card-img")[kod].style.filter = null;
        document.getElementsByClassName("pro-card")[kod].style.transform = null;
        document.getElementsByClassName("pro-card")[kod].style.zIndex = "-1";
    }

    var detay = document.getElementById("detay_" + no);
    detay.style.display = null;
    var detaya = document.getElementById("detay" + no + "a");
    detaya.style.display = null;
    var detayb = document.getElementById("detay" + no + "b");
    detayb.style.display = null;

    document.getElementsByClassName("pro-card")[no-1].style.opacity = "1";
    document.getElementsByClassName("pro-card-img")[no-1].style.filter = "grayscale(0%)";
    document.getElementsByClassName("pro-card")[no-1].style.transform = "scale(1.1,1.1)";
    document.getElementsByClassName("pro-card")[no-1].style.zIndex = "2";

    setTimeout(function(){ 
        detaya.style.transform = "translateX(0px)";
        detaya.style.opacity = "1";
        detayb.style.transform = "translateX(0px)";
        detayb.style.opacity = "1";
    }, 1);

    secili = no;

    if (user) {
        urun_oynat = false;

        setTimeout(function() {
            urun_oynat = true;
        }, 10000);
        

    }

}

async function delay(ms) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}

var urun_oynat = true;

let run = async ()=>{

    

    while(true) {
        if (urun_oynat) {
            if (secili < urunkodlar.length) {
                detaygetir(secili + 1);
                
                setTimeout(function(){ 
                    uruns_slide(290);
                }, 2500);
            }
            else {
                detaygetir(1);
                
                setTimeout(function(){ 
                    uruns_slide(-1000);
                }, 2500);
            }
            await delay(10000);
        }
        else {
            await delay(100);
        }
    }
}

run();



function uruns_slide(miktar) {
    document.getElementById('uruns').scrollLeft += miktar;
}

function auto_slide(yon) {
    if (yon === 'R') {
        if (document.documentElement.clientWidth < 1000) {
            uruns_slide(290);
        }
        else {
            uruns_slide(1000);
        }
    }
    else {
        if (document.documentElement.clientWidth < 1000) {
            uruns_slide(-290);
        }
        else {
            uruns_slide(-1000);
        }
    }
}

