// SOAL 1

class Mobil {
  constructor(merk, tahun) {
    this._merk = merk;
    this._tahun = tahun;
  }
  getMerk() {
    return this._merk;
  }
  getTahun() {
    return this._tahun;
  }
}

const toyota = new Mobil("Toyota", 2020);
console.log(toyota.merk);
console.log(toyota.getMerk());
console.log(toyota.getTahun());

// SOAL 2

class Pesawat {
  constructor({ jenis, kecepatan }) {
    this.jenis = jenis;
    this.kecepatan = kecepatan;
  }

  terbang() {
    return `Pesawat ${this.jenis} sedang berjalan dengan kecepatan ${this.kecepatan} kilometer/jam.`;
  }
}

class Jet extends Pesawat {
  constructor({ jenis, kecepatan, kapasitasBahanBakar }) {
    super(jenis, kecepatan);
    this.kapasitasBahanBakar = kapasitasBahanBakar;
  }
  isiBahanBakar(kapasitasBahanBakarNew) {
    this.kapasitasBahanBakar = kapasitasBahanBakarNew;
  }
}

const Garuda = new Pesawat({
  nama: "Garuda",
  kecepatan: 100,
});
console.log(Garuda.terbang());

const boeing = new Jet({
  jenis: "Boeing",
  kecepatan: 100,
  kapasitasBahanBakar: 500,
});
console.log(boeing.terbang());
console.log(boeing.kapasitasBahanBakar);
boeing.isiBahanBakar(1000);
console.log(boeing.kapasitasBahanBakar);

// SOAL 3

class Karyawan {
  constructor({ nama, gaji, jabatan }) {
    this._nama = nama;
    this._gaji = gaji;
    this._jabatan = jabatan;
  }

  getInfo() {
    return `${this._nama} work as a/an ${this._jabatan} with a salary of ${this._gaji}.`;
  }

  getGaji() {
    return `Your salary is at ${this._gaji}`;
  }

  getJabatan() {
    return `You work as a/an ${this._jabatan}`;
  }

  getNama() {
    return `Your name is ${this._nama}`;
  }

  setGaji(newGaji) {
    this._gaji = newGaji;
  }
}

class Manajer extends Karyawan {
  constructor({ nama, gaji, jabatan }) {
    super({ nama, gaji, jabatan });
  }

  beriTunjangan(tunjangan) {
    this._gaji = this._gaji + tunjangan;
  }
}

const akram = new Karyawan({
  nama: "Akram",
  gaji: 2000000,
  jabatan: "Programmer",
});
console.log(akram);
console.log(akram.getInfo());
console.log(akram.getGaji());
console.log(akram.getJabatan());
console.log(akram.getNama());
akram.setGaji(2500000);
console.log(akram.getGaji());

const cipang = new Manajer({
  nama: "Cipang",
  gaji: 5000000,
  jabatan: "Manajer",
});

console.log(cipang);
console.log(cipang.getInfo());
console.log(cipang.getGaji());
console.log(cipang.getJabatan());
console.log(cipang.getNama());
cipang.setGaji(2500000);
console.log(cipang.getGaji());
cipang.beriTunjangan(1000000);
console.log(cipang.getGaji());

// SOAL 4

class Kendaraan {
  constructor(kecepatan) {
    this._kecepatan = kecepatan;
  }

  getKecepatan() {
    return `Your speed is ${this._kecepatan} km/h`;
  }

  setKecepatan(newKecepatan) {
    if (newKecepatan < 0) {
      this._kecepatan = 0;
    } else {
      this._kecepatan = newKecepatan;
    }
  }
}

const mobil = new Kendaraan(100);
console.log(mobil.getKecepatan());
mobil.setKecepatan(100);
console.log(mobil.getKecepatan());
mobil.setKecepatan(-50);
console.log(mobil.getKecepatan());

// SOAL 5

class AkunBank {
  constructor(saldo) {
    this._saldo = saldo;
  }
  getSaldo() {
    return this._saldo;
  }
  setSaldo(newSaldo) {
    if (newSaldo < 0) {
      this._saldo = 0;
    } else {
      this._saldo = newSaldo;
    }
  }

  addSaldo(newSaldo) {
    this._saldo = this._saldo + newSaldo;
  }
  reduce(newSaldo) {
    this._saldo = this._saldo - newSaldo;
    if (this._saldo < 0) {
      this._saldo = 0;
    }
  }
}

const BSI = new AkunBank(1000000);
console.log(BSI.getSaldo());
BSI.addSaldo(1000000);
console.log(BSI.getSaldo());
BSI.reduce(500000);
console.log(BSI.getSaldo());
BSI.reduce(1500000);
console.log(BSI.getSaldo());
BSI.setSaldo(-10);
console.log(BSI.getSaldo());

// SOAL 6

class Karyawan {
  constructor(nama, gaji) {
    this._nama = nama;
    this._gaji = gaji;
  }

  get nama() {
    return this._nama;
  }

  set nama(nama) {
    this._nama = nama;
  }

  get gaji() {
    return this._gaji;
  }

  set gaji(gaji) {
    this._gaji = gaji;
  }
}

class Manajer extends Karyawan {
  constructor(nama, gaji) {
    super(nama, gaji);
  }

  buatLaporan() {
    return `Nama: ${this.nama}, Gaji: ${this.gaji}`;
  }
}

const manajer = new Manajer("Akram", 5000000);
console.log(manajer.buatLaporan());
manajer.nama = "Muhammad Akram";
manajer.gaji = 6000000;
console.log(manajer.buatLaporan());
