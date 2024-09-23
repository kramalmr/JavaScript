function printMessagges() {
    console.log("Mulai");
    setTimeout(() => {
        console.log("Selesai");
    }, 2000);
}

printMessagges()

function bebas(a, s, d) {
    return `Halo ${a} umurnya ${s} sekolah di ${d}`
}

console.log(bebas("Akram", 15, "ABudzar"));
