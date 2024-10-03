// UJIAN PRAKTEK AKRAM ASLI ORI GAK NEKO2 !! 

export function kelompokkanBilangan(bilangan) {
    for (let i = 1; i < 21; i++) {
        if (i % 2 == 0 && i % 4 == 0) {
            console.log(i + " " + "adalah Bilangan genap dan bisa dibagi 4");
        } else if (i % 2 == 0) {
            console.log(i + " " + "adalah Bilangan genap tetapi tidak bisa dibagi 4");
        } else {
            console.log(i + " " + "adalah Bilangan ganjil");
        }
    }
}
