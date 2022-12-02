let mat, has;

function get() {
    mat = Math.floor(Math.random() * 10);
    console.log(mat);

    if (mat === 1) {
        has = "Try Again " + mat
    } else if (mat === 2) {
        has = "You Got 5 Small Horn"
    } else if (mat === 3) {
        has = "You Got 10 Ticket"
    } else if (mat === 4) {
        has = "You Got 100 Video Chest"
    } else if (mat === 5) {
        has = "You Got Aldous 'Realm Watcher'"
    } else {
        has = "HAHA Well Played Bro !!!!" + mat;
    }
    document.getElementById("has").innerHTML = has;
}