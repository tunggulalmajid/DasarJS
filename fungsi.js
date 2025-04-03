// function
// function hello (){
//     console.log("haloo temannn");
// }

// hello();

// var a = 2;
// var b = 3;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

var bilangan; 
function CekBilangan(bilangan){
    if (bilangan % 2 === 1){
        console.log("Bilangan adalah ganjil")
    }
    else{
        console.log("Bilangan adalah genap")
    }
}
CekBilangan(3);
CekBilangan(2);
console.log("\n\n")
// Modular Function 
/*
contoh :  
buat 2 fungsi yang mengubah kalimat menjadi larik dan menghitung elemen dalam larik
"Halo Selamat Pagi"
output : 3
*/

function ubahArray(kalimat){
    var sebuahArray = kalimat.split(" ");
    return sebuahArray;
}
function hitungArray(kalimat){
    var array = ubahArray(kalimat);
    var hasil = array.length;
    console.log ("Hasil : " + hasil);
}
hitungArray("halo selamat pagi aku adalah entitas raja")
console.log("\n\n")


// latihan Function
function hitungHuruf (kalimat){
    var jumlahHuruf = kalimat.length;
    return jumlahHuruf
}
function cekPassword(kalimat){
    var jumlahHuruf = hitungHuruf(kalimat);
    if (jumlahHuruf < 12 && jumlahHuruf >5){
        console.log("Password Diterima")
    }
    else {
        console.log("Masukkan karakter antara 5 dan 12")
    }
}

cekPassword(123) //undefined output
cekPassword("123")
cekPassword("abcdefgh")