
// TUGAS 10 MUHAMMAD AKRAM ALMAIR

// SOAL 1
/*
1. Sistem Pendaftaran dan Diskon
Nina sedang mengembangkan sistem pendaftaran acara dan diskon. 
Dia ingin membuat aplikasi yang tidak hanya mendaftar pengguna tetapi juga memberikan diskon berdasarkan jenis pengguna.
*/

function registerUser(name, userType) {
    if (userType === "VIP") {
        return `Welcome VIP ${name}`;
    } else {
        return `Welcome ${name}`;
    }
}

console.log(registerUser("Nina", "VIP"))

function applyDiscount(userType, purchaseAmount) {
    var discount = 0;
    if (userType === "VIP") {
        discount = 20;
    } else {
        discount = 10;
    }
    return purchaseAmount - (purchaseAmount * discount / 100);
}

console.log(applyDiscount("VIP", 200))
console.log(applyDiscount("NONVIP", 100))


// SOAL 2
/*
2. Kalkulator Diskon dengan Konfirmasi
Ali sedang membuat kalkulator diskon untuk aplikasi belania yang juga memerlukan konfirmasi 
dari pengguna sebelum menghitung harga akhir.
*/

function calculatePrice(quantity, pricePerItem, isMember) {
    total = quantity * pricePerItem;
    if (isMember = true) {
        return total - (total * 15 / 100);
    } else {
        return total;
    }
}

console.log(calculatePrice(3, 150, true))

function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed = true) {
        return `Purchase confirmed with total price ${totalPrice}`;
    } else {
        return `Purchase not confirmed`;
    }
}

console.log(confirmPurchase(true, calculatePrice(3, 150, true)))

// SOAL 3
/*
3. Pengelolaan Stok Barang
Rina sedang mengelola stok barang untuk toko online dan ingin membuat sistem yang memeriksa 
apakah stok cukup untuk memenuhi pesanan.
*/

function checkStock(item, requestedQuantity) {
    let stock = 50;
    if (requestedQuantity > stock) {
        return `Stock insufficient for ${item}`;
    } else {
        `Stock sufficient for ${item}`;
    }
};

console.log(checkStock("Laptop", 60))

function restockItem(item, additionalStock, requestedQuantity) {
    let stock = 50;
    if (additionalStock + stock >= requestedQuantity) {
        return `Restock complete for ${item}`
    } else {
        return `Restock needed for ${item}`
    }
};

console.log(restockItem("Laptop", 20, 60))
console.log(restockItem("Laptop", 5, 60))

// SOAL 4

function calculateTax(price, location) {
    let pajak = 0
    if (location == "Jakarta") {
        return pajak = price * 10 / 100;
    } else if (location == "Bandung"){
        return pajak = price * 5 / 100;
    }
}

console.log(calculateTax(1000, "Jakarta"));

function displayResult(finalPrice, paymentStatus) {
    if (paymentStatus == "paid") {
        return `Payment Successful! Total amount : ${finalPrice}`
    } else { 
        return `Payment Pending`
    }
}

console.log(displayResult(calculateTax(1000, "Jakarta"), "paid"))