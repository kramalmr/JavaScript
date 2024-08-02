function start1() {
  var nilai = prompt("Masukkan Nilai Anda : ");
  var totalHadir = prompt("Masukkan Total Hadir : ");
  var totalPertemuan = prompt("Masukkan Total Pertemuan : ");

  var lulus = (totalHadir / totalPertemuan) * 100;

  if (nilai > 85) {
    if (lulus >= 75) {
      console.log("Kategori A : Lulus");
    } else {
      console.log("Kategori A : Tidak Lulus");
    }
  } else if (nilai >= 70) {
    if (lulus >= 75) {
      console.log("Kategori B : Lulus");
    } else {
      console.log("Kategori B : Tidak Lulus");
    }
  } else if (nilai >= 50) {
    if (lulus >= 75) {
      console.log("Kategori C : Lulus");
    } else {
      console.log("Kategori C : Tidak Lulus");
    }
  } else if (nilai < 50) {
    console.log("Tidak Lulus");
  }
}

function start2() {
var terdaftar = true;
var pembayaranSukses = true;

if ((terdaftar = true) && (pembayaranSukses = true)) {
    console.log("Dapat Mengikuti Kursus")
} else {
    console.log("Tidak Dapat Mengikuti Kursus")
};
}

