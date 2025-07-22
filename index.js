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
            break;
        case "ec32":
            break;
        case "tr1ke":
        case "trike":
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

// taskbar clock

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