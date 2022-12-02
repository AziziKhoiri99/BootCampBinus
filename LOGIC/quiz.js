function a() {
    // document.getElementById('a').style.color = "tomato";
    // document.getElementById('a').style.fontFamily = "Cambria";
    // document.getElementById('a').style.backgroundColor = "lightblue";
    // document.getElementById('a').style.fontSize = "70px";
    // document.getElementById('a').style.paddingLeft = "100px";

    document.getElementById("a").style.cssText = `
        background-color:pink;
        font-size:70px;
        border:2px dashed red;
        color:white;`
}

function b() {
    document.getElementById('b').style.fontSize = '50px';
}

function c() {
    document.getElementById('c').style.color = 'blue';
}

function d() {
    document.getElementById('c').style.color = 'blue';
}

function d() {
    document.getElementById('c').style.color = 'blue';
}