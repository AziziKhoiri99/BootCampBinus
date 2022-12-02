for (let i = 0; i < 4; i++) {
    document.write("##");
}
document.write("<br>");

for (let i = 0; i < 5; i++) {
    document.write("#")
}
document.write("<br>")

for (let i = 0; i < 5; i++) {
    document.write("##")
}
document.write("<br>")

for (let i = 0; i < 7; i++) {
    document.write("#")
}
document.write("<br>")

for (let i = 0; i < 2; i++) {
    document.write("##")
}
document.write("<br>")
document.write("<br>")

let n = 5;
let str = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        str += "*";
    }
    str += "<br>";
}
document.write(str);

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1) {
//             str += "*"
//         }
//         else {
//             if (j === 0 || j === n - 1) {
//                 str += "*";
//             } else {
//                 str += " "
//             }
//         }
//     }
//     str += "<br>"
// }

// document.write(str);

