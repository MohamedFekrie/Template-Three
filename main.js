/*--------- Start Header ---------*/

// Code For open MegaMenu When I Click On "a"
let aParentOfMegaMenu = document.querySelector(`header .container > ul > li:nth-child(4) a`);
let megaMenu = document.querySelector(`.mega-menu`);

aParentOfMegaMenu.onclick = () => {
    megaMenu.classList.toggle("active");
    aParentOfMegaMenu.classList.toggle(`active`);
}

/* Start The Type Writer Effects On The Landing Page */
let h1Str = "Welcome, To The Moryo World",
    pStr = "Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events.",
    i = 0,
    j = 0,
    h1DelaiyTime = 600,
    mainLetterDelaiy = 70;

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

/* End The Type Writer Effects On The Landing Page */



