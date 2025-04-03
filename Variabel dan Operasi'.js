// Operasi dan Variabel
var angka = 1;
var angka2 = 2;
var hasil = angka + angka2; // untuk operator masih sama dengan bahasa lain
console.log (angka);

if (hasil > 5 ){
    console.log("hasil lebih besar dari 5");
}
else {
    console.log("angka lebih kecil dari 5");
}

var umur = 20;
var umuKali = 20 *5;
console.log(umuKali);

var total = 1 + 2 * 3; // prioritas operasi masih sama dengan bahasa lain
console.log(total)


/*
urutan Operasi :
1. () dalam Kurung
2. ^ Pangkat
3. * / perkalian dan pembagian
4. + - Tambah dan kurang
*/

//Akhir Operasi Variabel 

//Operasi Boolean : &&, ||, !

var kaya = true;
var sehat = false;

// dan
var bahagia = kaya && sehat;
console.log(bahagia);

// atau
bahagia = kaya || sehat;
console.log(bahagia);
 
// not
kaya = !kaya;
console.log(kaya);

var beda = "Buku" == "buku";
console.log(beda);

// akhir Operasi Boolean