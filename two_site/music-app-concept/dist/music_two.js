var leftArrow = document.querySelector(".arrow-left");
var rightArrow = document.querySelector(".arrow-right");
var slider = document.getElementById("slider");
var slideOne = document.getElementById("slider1");
var slideTwo = document.getElementById("slider2");
var slideThree = document.getElementById("slider3");
var button = document.querySelector(".playbutton");
var player = document.querySelectorAll(".player");
var hiddenMenu = document.querySelector(".menu");
var menuLineOne = document.getElementById("line1");
var menuLineTwo = document.getElementById("line2");

leftArrow.addEventListener('click', moveLeft);

function moveLeft() {
    if (slider.className == "movecenter") {
        slider.className = "moveright";
        slideOne.className = "big";
        slideTwo.className = "";
    } else if (slider.className == "moveright") {
        slider.className == "moveright";
        slideOne.className = "big";
    } else {
        slider.className = "movecenter";
        slideThree.className = "";
    }
}

rightArrow.addEventListener('click', moveRight);

function moveRight() {
    if (slider.className == "movecenter") {
        slider.className = "moveleft";
        slideThree.className = "big";
    } else if (slider.className == "moveleft") {
        slider.className == "moveleft";
        slideThree.className = "big";
    } else {
        slider.className = "movecenter";
        slideOne.className = "";
        slideTwo.className = "big";
    }
}

button.addEventListener('click', music);

function music() {
    for (var i = 0; i < player.length; i++) {
        if (player[i].className == "player") {
            player[i].className += " playeron";
            button.innerHTML = "STOP";
        } else {
            player[i].className = "player";
            button.innerHTML = "PLAY";
        }
    }
}


hamburgerMenu.addEventListener('click', menu);

function menu() {
    if (hamburgerMenu.className == "hamburger-menu") {
        hamburgerMenu.className = "hamburger-menu2";
        hiddenMenu.className = "menu-appear";
        menuLineOne.className += "skewdown";
        menuLineTwo.className += "skewup";
    } else {
        hamburgerMenu.className = "hamburger-menu";
        hiddenMenu.className = "menu";
        menuLineOne.className = "";
        menuLineTwo.className = "";
    }
}