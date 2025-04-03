// Object
//Kumpulan nilai yang memiliki kunci dan value, dalam python seperti dictionary

// contoh : 
var murid = {
    nama : "tunggul",
    Nilai : 100,
    Status : "Lulus",
}

// cara akses 1
console.log ("Nama murid : " + murid.nama)
console.log ("Nilai : " + murid.Nilai)
console.log ("Status : " + murid.Status)

// cara akses 2 
console.log ("Nama Murid : " + murid["nama"])
console.log ("Nilai : " + murid["Nilai"])
console.log ("Status : " + murid["Status"])

// latihan 1 
var buah = ["Durian", 75000, true]
// ubah menjadi object 

// opsi 1
var Buah = {
    jenis : buah[0],
    harga : buah[1],
    enak : buah[2],
}

console.log(Buah.jenis);
console.log("\n\n");

// opsi 2 bisa memakai fungsi dan method penambah 
function ubahObject(array){
    var hasil = {}
    hasil.jenis = array[0]
    hasil.harga = array[1]
    hasil.enak = array[2]

    return hasil
}

buah = ubahObject(["Durian", 75000, true]);
console.log(buah.jenis);

// fungsi dalam object, method
var mobil= {
    brand : "Honda",
    tipe : "jazz",

    nyalakanMesin : function (){
        console.log("Mesin dinyalakan")
    }
}
mobil.nyalakanMesin();
console.log("\n\n");


// Latihan Object
var Manusia = {
    Nama : "Caca",
    Berat : "45 Kg",
    Tinggi : "155 Cm",
    Hobi : ["Nonton", "tidur"],

    tampilkanInfo : function(){
        console.log("Nama : "+ Manusia.Nama)
        console.log("Berat Badan : " + Manusia.Berat)
        console.log("Tinggi Badan : " + Manusia.Tinggi)
        Manusia.tampilkanHobi()
    },

    tampilkanHobi : function(){
        console.log("Hobi :")
        for (var i = 0; i<Manusia.Hobi.length;i++){
            console.log((i+1) + ". " + this.Hobi[i]) //this disini sama dengan konsep class dalam c#
        }
    },
}
Manusia.tampilkanInfo();
console.log("");
Manusia.tampilkanHobi();
console.log("\n")

