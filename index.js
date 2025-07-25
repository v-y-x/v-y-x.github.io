// taskbar clock
const today = new Date();

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

// directory shenanigans
const addressBar = document.querySelector(".exp-bar");
const titleBar = document.getElementById("explorer-title-text");

function openDir(clickedDir) {
    document.getElementById("home-dir").style.display = "none";
    document.getElementById(clickedDir + "-dir").style.display = "flex";
    addressBar.value = "C:\\My Computer\\" + clickedDir;
    titleBar.innerHTML = clickedDir;
}

function back() {
    const folders = document.getElementsByClassName("folder-dir");
    for (let i = 0; i < folders.length; i++) {
        folders[i].style.display = "none";
    }
    document.getElementById("home-dir").style.display = "flex";
    addressBar.value = "C:\\My Computer";
    titleBar.innerHTML = "My Computer";
}

// login functionality
const login = document.getElementById("loginOK")
var loginAudio = new Audio("resources/95boot.wav") 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("keydown", function (event) {
    const loginBox = document.querySelector(".login")
    if (event.key == "Enter" && loginBox.style.display !== "none") {
        event.preventDefault();
        document.getElementById("loginOK").click();
    }
})

// invis' easter egg
var invisMessage;
const day = today.getDay(); 

switch (day) {
    case 1:
        invisMessage = "lmfai";
        break;
    case 2:
        invisMessage = "what the fuck can i not change my race now";
        break;
    case 3:
        invisMessage = "how old are you romanian tickling bandit";
        break;
    case 4:
        invisMessage = "i never thought i would have a folder titled \"furries\" in my pictues";
        break;
    case 5:
        invisMessage = "ok just give me a sex";
        break;
    case 6:
        invisMessage = "if something is ass, you can still try it";
        break;
    case 7:
        invisMessage = "i didn't know kazahstan existed until ec32 popped up";
        break;
}

// tr1ke's easter egg
let yukiPic = 1;
const nextBut = document.getElementById("nextBut");
const backBut = document.getElementById("backBut");
const yukiFrame = document.getElementById("yukiPic");

nextBut.addEventListener('click', function() {
    yukiPic += 1;
    if (yukiPic > 4) {
        yukiPic = 1;
    }
    yukiFrame.src = "resources/yuki" + yukiPic + ".jpg";
})

backBut.addEventListener('click', function() {
    yukiPic -= 1;
    if (yukiPic < 1) {
        yukiPic = 4;
    }
    yukiFrame.src = "resources/yuki" + yukiPic + ".jpg";
})

// login easter eggs
function easter_egg() {  
    const login_egg = document.getElementById("user").value.toLowerCase().trim();
    if (login_egg) {
        document.getElementById("logging").innerHTML = "Welcome, " + document.getElementById("user").value;
    }
    
    let message = "";
    switch (login_egg) {
        case "vyx":
            message = "oh hey, that's the creator!";
            break;
        case "sxh7":
            loginAudio.src = "resources/sxboot.mp3";
            message = "geeked up playing xbox all day";
            break;
        case "brit":
        case "someweirdbrit":
            message = "This page is now under the British government";
            document.querySelector(".IE-site").style.backgroundImage = "url(resources/united-kingdom-flag.gif)"
            break;
        case "umbra":
            break;
        case "invis":
        case "invisible":
            message = "daily deleted invis message";
            document.getElementById("invisEgg").style.display = "block";
            document.getElementById("invisEgg").innerHTML = "today's deleted message: " + invisMessage;
            break;
        case "ec32":
            break;
        case "tr1ke":
        case "trike":
            message = "WARNING : yuki ahead";
            document.querySelector(".yukiPicture").style.display = "block";
            break;
        case "jay":
            break;
        case "adeias":
        case "adidas":
            break;
        }
        document.getElementById("egg").innerHTML = message;
    }

login.addEventListener("click", async function loginAnim() {
    document.querySelector(".login").style.display = "none";
    
    await delay(250);
    document.querySelector("#logging-win").style.display = "block";
    
    await delay(3000);
    document.querySelector("#logging-win").style.display = "none"
    
    await delay(500);
    loginAudio.play();

    await delay(1000);
    document.querySelector(".taskbar").style.display = "flex";

    await delay(500);
    document.querySelector(".notepad").style.display = "block";
    
    await delay(150);
    document.querySelector(".wordpad").style.display = "block";    
    
    await delay(600);
    document.querySelector(".explorer").style.display = "block";    
    
    await delay(1200)
    document.querySelector(".IE").style.display = "block";

    await delay(700)
    document.querySelector(".yukiPicture").style.visibility = "visible";
})
// error box code

var error_sfx = new Audio('resources/win98_CHORD.flac');

document.addEventListener("keydown", function (event) {
    const errorBox = document.getElementById("error-box")
    if (event.key == "Enter" && errorBox.style.display !== "none") {
        event.preventDefault();
        document.getElementById("errorOK").click();
    }
});

function showError(element) {
    const message = element.getAttribute("data-error");
    document.getElementById("error-message").innerHTML = message;
    document.getElementById("error-box").style.display = "block";
    error_sfx.play();
}  

function closeError() {
    document.getElementById("error-box").style.display = "none";
}