// All Function & Section Code Related For Scrolling Is Here
window.onscroll = () => {
    if (scrollY >= document.querySelector(`.stats`).offsetTop) {
        if (!start) {
            nums.forEach(num => startIncreas(num));
        }
        start = true;
    }
    fillProgress()
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
// Start Code For open MegaMenu When I Click On the Link
let megaMenu = document.querySelector(`.mega-menu`);
megaMenu.onclick = () => {
    megaMenu.classList.toggle("active");
    megaMenu.classList.toggle(`active`);
}
// End Code For open MegaMenu When I Click On the Link
/*---------------------------------------------------------------------------------------------------------------------------------*/
// Start The Type Writer Effects On The Landing Page 
let h1Str = "Welcome, To The Moryo World",
    pStr = "Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events.",
    i = 0,
    j = 0,
    h1DelaiyTime = 600,
    mainLetterDelaiy = 70;
window.onload = () => {
    let h1delaiy = setTimeout(() => {
        let h1Type = setInterval(() => {
            document.querySelector(".landing .text-content h1").innerHTML += h1Str[i]
            i++;
            if (i === h1Str.length) {
                clearInterval(h1Type)
            }
        }, mainLetterDelaiy)
    }, h1DelaiyTime)
    let pDelaiy = setTimeout(() => {
        let pType = setInterval(() => {
            document.querySelector(`.landing .text-content p`).innerHTML += pStr[j];
            j++;
            if (j === pStr.length) {
                clearInterval(pType)
            }
        }, mainLetterDelaiy)
    }, (h1Str.length * 100) + h1DelaiyTime)
}
// End The Type Writer Effects On The Landing Page 
/*----------------------------------------------------------------------------------------------------------------------------------*/
// Start Fill The Progress with Scrolling
function fillProgress() {
    let myProgresses = document.querySelectorAll(`.skill span .the-progress`);
    let skillsSection = document.querySelector(`.our-skills`);
    if (scrollY >= skillsSection.offsetTop) {
        myProgresses.forEach(prog => {
            prog.style.width = prog.dataset.progress
        })
    }
}

// End Fill The Progress with Scrolling
/*---------------------------------------------------------------------------------------------------------------------------------*/
// Start Count Down Timer
let targetDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    // Find The Diffrence Between Now And TargetDate
    let diffrenceDate = targetDate - dateNow;
    // Get Time Unit
    let days = Math.floor(diffrenceDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffrenceDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diffrenceDate % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diffrenceDate % (1000 * 60) / 1000);
    // Set The Values On Elements
    document.querySelector(`.time .unit .day`).innerHTML = days;
    document.querySelector(`.time .unit .hours`).innerHTML = hours;
    document.querySelector(`.time .unit .minutes`).innerHTML = minutes;
    document.querySelector(`.time .unit .seconds`).innerHTML = seconds;
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        clearInterval(counter)
    }
}, 1000)
// End Count Down Timer
/*---------------------------------------------------------------------------------------------------------------------------------*/
// Start Increas Numbers On Scroll

let nums = document.querySelectorAll(`.stats .box span:first-of-type`);
//let statusSection = 
let start = false;
// This Funcion will Called In The Line Number (1)
function startIncreas(ele) {
    let theTarget = ele.dataset.end;
    let counter = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == theTarget) {
            clearInterval(counter);
        }
    }, 2000 / theTarget)
}
// End Increas Numbers On Scroll
