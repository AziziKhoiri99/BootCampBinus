//Nulling & Styling
function calc(har, tax, desc) {
    if (tax == null) {
        tax = 0.05
    }
    tax = tax ?? 0.05
    desc = desc ?? "Default Item"
    const total = har * (1 + tax)

    //style console.log %c
    console.log(`%c${desc} Dengan Tax:%c $${total}`,
        "font-weight: bold; font-size: 1.5rem",
        "color: green; font-family:Arial"
    );
}

calc(100, 0.07, "My Item")
calc(100, 0, "My Other Item")
calc(100, undefined, "")

// Optional Chaining
class Orang {
    constructor(nama, addres, hobi) {
        this.nama = nama
        this.addres = addres
        this.hobi = hobi
    }

    print() {
        console.log(this);
    }
}

function print(orang) {
    if (orang && orang.addres) {
        console.log(orang.addres.jalan);
    }
    // console.log(orang.addres.jalan);
    // console.log(orang && orang.addres && orang.addres.jalan);
}

const azizi = new Orang(
    "Azizi",
    undefined,
    // { jalan: "Jl. Candi Sukuh", city: "Semarang" },
    ["Baca", "Tidur"]
)
azizi.print()

print(azizi)