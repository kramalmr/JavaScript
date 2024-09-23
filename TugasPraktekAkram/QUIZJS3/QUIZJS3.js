function umur1() {
  let umur1 = prompt("Berapa umur anda?");
  if (umur1 >= 6) {
    alert("Anda harus membayar tiket penuh");
  } else if (umur1 >= 2 && umur1 <= 5) {
    alert("Anda harus membayar setengah tiket");
  } else {
    alert("Anda tidak boleh masuk");
  }
}

function umur2() {
  let umur2 = prompt("Berapa umur anda?");
  if (umur2 >= 17) {
    alert("Anda boleh mendapatkan SIM");
  } else {
    alert("Anda tidak boleh mendapatkan SIM");
  }
}

function nomor1() {
  let nomor1 = prompt("Berapa nomor anda?");
  if (nomor1 > 0) {
    alert("Positif");
  } else if (nomor1 < 0) {
    alert("Negatif");
  } else {
    alert("Netral");
  }
}

function nomor2() {
  let x = prompt("Berapa x?");
  let y = prompt("Berapa y?");
  if (x > 0 && y > 0) {
    alert("Atas Kanan");
  } else if (x < 0 && y > 0) {
    alert("Atas Kiri");
  } else if (x < 0 && y < 0) {
    alert("Bawah Kiri");
  } else if (x > 0 && y < 0) {
    alert("Bawah Kanan");
  }
}

function nomor3() {
  let total = prompt("Berapa total pembelian?");
  if (total >= 200) {
    alert("Diskon 15% ");
    alert("Total pembelian anda sebesar " + (total - (total * 15) / 100));
  } else if (total >= 100 && total <= 199) {
    alert("Diskon 10%");
    alert("Total pembelian anda sebesar " + (total - (total * 10) / 100));
  } else {
    alert("Tidak ada diskon");
    alert("Total pembelian anda sebesar " + total);
  }
}

function umur3() {
  let umur = prompt("Berapa umur anda?");
  if (umur >= 18) {
    alert("Registrasi Berhasil");
  } else {
    alert("Registrasi Gagal");
  }
}
