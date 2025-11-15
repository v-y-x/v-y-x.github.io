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

// easter egg hints
var hintArray = ["Invisible", "Tr1ke", "Umbra", "Sxh7", "SomeWeirdBrit", "Futty", "Apir"];
var hintNum = Math.floor(Math.random() * 25);
if (hintNum == 24){
    document.querySelector("#user").placeholder = hintArray[Math.floor(Math.random() * hintArray.length)];
}

// pfp randomizer
const pfps = [
  "resources/pfp1.jpg",
  "resources/pfp2.png",
  "resources/pfp3.png",
  "resources/pfp4.jpeg",
  "resources/pfp5.png",
  "resources/pfp6.png",
  "resources/pfp7.jpg",
  "resources/pfp8.jpg"
];

const ranPfp = Math.floor(Math.random() * pfps.length);
document.getElementById("pfp").src = pfps[ranPfp];  


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

// window functionality
function openApp(element) {
    const app = element.getAttribute("app");
    document.querySelector("." + app).style.display = "block";
}

function closeApp(element) {
    const app = element.getAttribute("app");
    const window = document.querySelector("." + app)
    window.style.display = "none";
    window.style.top = 50 + 'px';
    window.style.left = 100 + 'px';
}

document.querySelectorAll(".title-bar").forEach(bar => {
    bar.addEventListener("mousedown", startDrag);
})

var topZ = 1;

document.querySelectorAll(".window").forEach(window => {
    window.addEventListener("mousedown", () => {
        window.style.zIndex = ++topZ;
    })
})

function startDrag(e) {
    const windowE = e.target.parentElement;
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = windowE.offsetLeft;
    const startTop = windowE.offsetTop;
    
    function onMouseMove(e) {
        let currentX = e.clientX;
        let currentY = e.clientY;

        let dx = currentX - startX;
        let dy = currentY - startY;

        windowE.style.left = startLeft + dx + "px";
        windowE.style.top = startTop + dy + "px";
    }

    document.addEventListener("mousemove", onMouseMove); 
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
    })
}

// hover functionality ( for IE and WE )
let buttons = document.querySelectorAll(".hover-button");
buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        let atr = button.getAttribute("button");
        button.src = "resources/IE 3.0 icons/" + atr + "_color.png"; 
    })
    button.addEventListener("mouseout", () => {
        let atr = button.getAttribute("button");
        button.src = "resources/IE 3.0 icons/" + atr + "_grey.png"
    })
})

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

// umbra's easter egg
const lootTable = [
    {
        rarity: "common",
        range: [1, 40],
        items: [
            {
                name : "Shareware Game", img: "resources/win98 icons/shareware_disk.png"
            },
            {
                name: "Freeware Program", img: "resources/win98 icons/floppy_drive.png"
            }
        ]
    },
    {
        rarity: "uncommon",
        range: [41, 70],
        items: [
            {
                name: "USB Drive", img: "resources/win98 icons/usb.png"
            },
            {
                name: "Music CD", img: "resources/win98 icons/cd_audio.png"
            }
        ]
    },
    {
        rarity: "rare",
        range: [71, 85],
        items: [
            {
                name: "Movie DVD", img: "resources/win98 icons/cd_movie.png"
            },
            {
                name: "Cracked Game", img: "resources/win98 icons/cd_cracked.png"
            }
        ]
    },
    {
        rarity: "epic",
        range: [86, 95],
        items: [
            {
                name: "KEYGEN", img: "resources/win98 icons/keygen.png"
            },
            {
                name: "Hidden URL", img: "resources/win98 icons/world-2.png"
            }
        ]
    },
    {
        rarity: "legendary",
        range: [96, 100],
        items: [
            {
                name: "DOOM", img: "resources/win98 icons/doom.png"
            },
            {
                name: "Wolfenstein 3-D", img: "resources/win98 icons/wolfenstein.png"
            },
            {
                name: "Commander Keen", img: "resources/win98 icons/commander_keen.png"
            }
        ]
    },
];

const rarityClasses = {
    common: "rarity-common",
    uncommon: "rarity-uncommon",
    rare: "rarity-rare",
    epic: "rarity-epic",
    legendary: "rarity-legendary"
};

const oneBut = document.getElementById('singlePull');
const tenBut = document.getElementById("tenPull");
const gachaOK = document.getElementById("gachaOK");
const rarityText = document.getElementById('rarity');
const itemText = document.getElementById('item');
const gachaImg = document.getElementById('gachaImg');
var audioArray = [
    tadaSfx = new Audio("resources/owin31.wav"),
    legendarySfx = new Audio("resources/95boot.wav")
]
const uploadGif = document.getElementById("gachaPull");
uploadGif.src = "resources/win98 icons/gacha_upload.gif" + "?t=" + new Date().getTime();

function onePull() {
    oneBut.style.display = 'none';
    tenBut.style.display = 'none';
    const roll = Math.floor(Math.random() * 100);

    const result = lootTable.find(entry => {
        return roll >= entry.range[0] && roll <= entry.range[1];
    })
    
    const item = result.items[Math.floor(Math.random() * result.items.length)];
    return { rarity: result.rarity, item };
}

let pullResults = [];
let currentIndex = 0;

function tenPull() {
    pullResults = [];
    for (var i = 0; i < 10; i++) {
        pullResults.push(onePull());
    }
    currentIndex = 0;
    gachaImg.style.display = "none";
    uploadGif.src = "resources/win98 icons/gacha_upload.gif?t=" + Date.now();
    uploadGif.style.display = "block";

    setTimeout(() => {
        gachaOK.style.display = 'block';
        uploadGif.style.display = "none";
        gachaImg.style.display = "block";
        showNextPull();
    }, 5260)
}

function showNextPull() {
    if (currentIndex < pullResults.length) {
        let result = pullResults[currentIndex];
        currentIndex++;
        rarityText.innerHTML = result.rarity.toUpperCase();
        itemText.innerHTML = result.item.name;
        gachaImg.src = result.item.img
        rarityText.className = rarityClasses[result.rarity];
        if (result.rarity == "legendary") {
        audioArray.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
            audioArray[1].play();
        }
        else {
        audioArray.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
            audioArray[0].play();
        }
    }
    else {
        oneBut.style.display = 'block';
        tenBut.style.display = 'block';
        gachaOK.style.display = 'none';
        rarityText.innerHTML = '';
        itemText.innerHTML = ''
        gachaImg.src = 'resources/win98 icons/windows_gacha.gif';
    }
}

oneBut.addEventListener('click', function () {
    uploadGif.src = "resources/win98 icons/gacha_upload.gif?t=" + Date.now();
    uploadGif.style.display = "block";
    gachaImg.style.display = "none";
    setTimeout(() => {
        const result = onePull();
        rarityText.innerHTML = result.rarity.toUpperCase();
        rarityText.className = rarityClasses[result.rarity];
        itemText.innerHTML = result.item.name;
        gachaImg.src = result.item.img;
        if (result.rarity == "legendary") {
            audioArray.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
            audioArray[1].play();
        }
        else {
            audioArray.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
            audioArray[0].play();
        }
        uploadGif.style.display = "none";
        gachaImg.style.display = "block";
        gachaOK.style.display = 'block';
    }, 5260)
})

// login easter eggs
function getName() {
    var login_egg = document.getElementById("user").value.toLowerCase().trim();
    return login_egg;
}

function easter_egg() {  
    if (getName()) {
        document.getElementById("logging").innerHTML = "Welcome, " + document.getElementById("user").value;
    }
    
    let message = "";
    switch (getName()) {
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
            document.querySelector(".IE-site").style.backgroundImage = "url(resources/united-kingdom-flag.gif)";
            break;
        case "umbra":
            message = "GACHA GAMBLING WOOOOO";
            document.querySelector(".gachaApp").style.visibility = "visible";
            break;
        case "invis":
        case "invisible":
            message = "daily deleted invis message";
            document.getElementById("invisEgg").style.display = "block";
            document.getElementById("invisEgg").innerHTML = "today's deleted message: " + invisMessage;
            break;
        case "tr1ke":
        case "trike":
            message = "WARNING : yuki ahead";
            document.querySelector(".yukiApp").style.visibility = "visible";
            break;
        case "adeias":
        case "adidas":
            break;
        case "futty":
            message = "Hee-ho!";
            document.querySelector("#frost-folder").style.display = "block";
            break;
        case "apir":
            message = "<video autoplay src='resources/hello.mp4'>"
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

    await delay(1100);
    document.querySelector(".desktop").style.display = "flex";
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

window.onload = startTime();
