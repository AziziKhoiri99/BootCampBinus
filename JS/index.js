function cvk() {
    console.log("Hello World");
    alert("Goblok Tai Anjing")
}

function njir() {
    alert("Cuy")
}

function cvk() {
    var txt;
    var c = confirm("Klik tombol");
    if (c == true) {
        txt = "Oke"
        console.log("Oke bangsat");
    } else {
        txt = "Cancel"
        console.log("Yah kurang beruntung");
    }
    document.getElementById("fvk").innerHTML = txt;
}

var a = "EVOS, "
var b = "RRQ, "
var c = "BTR, "
var d = "ONIC, "
var e = "\"AURA\", "
var f = "TODAK, "
var g = "GPX, "
var h = "RBG, "
var i = "GEEK FAM, "
var j = "BREN, "
var list = a + b + c + d + e + f + g + h + i + j;
document.getElementById("Waifu").innerHTML =
    "Team List : <br>" + list;

function nano(a, b, c, d) {
    var hasil = a + b * c - d;
    return hasil;
}
console.log(nano(1, 2, 3, 4));

function sgt(a, t) {
    var hasil = 1 / 2 * a * t
    return hasil;
}
console.log(sgt(20, 10));

function name() {
    var name = document.getElementById("name").value;
    alert("Selamat Datang, " + name);
}

let tai = ["Anjing", "Babi", "Khamr", "Judi"];
tai[1] = "Dog"
tai.push("Zina");
tai.splice(3);
console.log(tai);

for (let i = 0; i < tai.length; i++) {
    console.log(tai[i]);
}

const math = 10 * 10 + 10;

if (math === 110) {
    // confirm("Y / N")
    console.log("Cerdas");
} else {
    console.log("Goblok");
}

const yesorno = "true";

if (yesorno === "true") {
    console.log("Yes");
} else {
    console.log("Tidak");
}

let anjir = 1;

while (anjir <= 10) {
    console.log("abc");
    anjir++
}

let bitch = 15;
while (bitch <= 18) {
    console.log("Kamu berputar " + bitch + "x");
    bitch++;
}

for (let index = 5; index <= 7; index++) {
    console.log("Kamu sedang " + index + "x");
}

let dumb = 0;
do {
    console.log("Angka itu " + dumb);
    dumb++;
} while (dumb <= 3);

const squad = ["BTR", "AE", "EVOS", "RRQ"];

for (let cvk = 0; cvk < squad.length; cvk++) {
    console.log(squad[cvk]);
}

const desti = "Indo";

if (desti === "Tokyo") {
    console.log("Tokyo Disneyland");
    console.log("Istana Himeji");
    console.log("Fushimi Inari-Taisha");
} else if (desti === "New York") {
    console.log("Times Square");
    console.log("Patung Liberty");
    console.log("Fifth Avenue");
} else if (desti === "Tiongkok") {
    console.log("Pasukan Terakota");
    console.log("Kota Terlarang");
    console.log("Tembok Besar China");
} else {
    console.log("404 Not Found");
}

//Tidak Sama Dengan !==
const angka = 20;
if (angka !== 20) {
    console.log(false);
} else {
    console.log(true);
}

//Sama Dengan ===
const negara = "i";
if (negara === "india") {
    console.log(true);
} else {
    console.log(false);
}

//Switch Statement
const n = "Tokyo";
switch (n) {
    case "Tokyo":
        console.log("Akibahara");
        break;
    case "New York":
        console.log("Times Square");
        break;
    case "London":
        console.log("Sungai Thames");
        break;
    case "Korea":
        console.log("Menara Seoul");
        break;
    case "India":
        console.log("Sungai Gangga");
        break;
    default:
        console.log("Nothing");
        break;
}

console.log("Hello World!!!")

document.write("Selamat Pagi Dunia Tipu-tipu")
cvk();