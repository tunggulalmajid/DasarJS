// Larik Atau Array
/*
sebuah kumpulan dari variabel
*/

// contoh 
var angka = [1,2,3,4]
var elektro = ["monitor", "komputer", "mouse"]

// console.log(angka[1])
// console.log(angka.length)
angka.push(6) // tambahkan angka terakhit
// angka.pop() hapus indeks terakhir
for (var i = 0; i < angka.length;i++){
    console.log(angka[i])
}

console.log("\n\n");
// Array Multidimensi

var angkaDimensi = [
    [1,2,3,4,5],
    [1,3,5,7],
    [2,4,6,8]
]
console.log(angkaDimensi[0][1]);
for (var i = 0;i<angkaDimensi.length;i++){
    console.log(angkaDimensi[i])

}


console.log("\n\n");

// latihan array
var murid = [
    [1,"Vincent", 3.5],
    [2,"Udin", 3.0],
    [3,"Mamang", 2.1]
]

// format hasil = 1. Vincent, Ipk = 3,5, Lulus


// Opsi Sendiri
// var hasil = []
// for (var i = 0; i<murid.length;i++){
//     if (murid[i][2] < 3.0){
//         hasil.push("Gagal")
//     }
//     else{
//         hasil.push("Lulus")
//     }
// }

// for (var i =0; i <murid.length;i++){
    //     var penampung = ""
    //     for (var j = 0; j<murid[i].length;j++){
        //         penampung = penampung + murid[i][j] + ","
        //     }
        //     penampung = penampung + hasil[i]
        //     console.log(penampung)
        // }
        
// opsi Lain
for (var i =0; i <murid.length;i++){
    var hasil;
    if (murid[i][2] >= 3.0){
        hasil = "Lulus"
    }
    else {
        hasil = "Gagal"
    }

    console.log(murid[i][0] + ". "+ murid[i][1] + ", IPK : " + murid[i][2] + ", " + hasil)
}
console.log ("\n\n");


// memakai for of untuk memanggil value
var angka = [1,2,3,4]
for (var i of angka){
    console.log(i)
}

var angkaDimensi =[
    [1,2,3],2,3] //tidak bisa sigunakan untuk memanggil array multidimensi
for (var i of angkaDimensi){
    console.log(i);
}




