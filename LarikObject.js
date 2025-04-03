// Larik Object
// Larik yang berisikan banyak object (Array)


var Makanan = [
    {
        nama: "Nasi Goreng",
        asal : "Indonesia",
    },
    {
        nama : "Sushi",
        asal : "jepang",
    },
    {
        nama : "jajangyeom",
        asal : "Korea",    
    }
]
// akses 1
console.log(Makanan[0].nama);
console.log(Makanan[0].asal);

// akses total bisa memakai for
for (var value of Makanan){
    console.log(value.nama +" "+  value.asal);
}

// Latihan ubah asrray 2 dimensi menjadi objek
function penampungArray(array){
    var hasil = [];
    for (var value of array){
        var obj ={};
        obj.tipe = value[0];
        obj.jenis = value[1];
        obj.harga = value[2];
        hasil.push(obj);
    }
    return hasil;
}
var arrayObj = penampungArray([["Asus","Laptop",7500000], ["Dell", "Laptop", "7000000"], ["Corsair", "Ram", 1250000]])
for (value of arrayObj){
    console.log(value);
}
console.log("\n\n");

// Latihan fungsi mengelompokkan jumlah anak lulus setiap kelas 
var murid = [
    ["Charlie", "A", 87],
    ["Berno", "A", 75],
    ["Andi", "B", 81],
    ["Ella", "B", 73],
] //jadikan sbeuah object dan kelompokkan perkelas

function kelompokkanObject(array){
    var hasil = [];
    var objA ={};
    var objB ={};
    objA.Kelas = ""
    objA.Nama = []
    objA.Nilai = []
    
    objB.Kelas = ""
    objB.Nama = []
    objB.Nilai = []
    for (var value of array){
        if (value[1] == "A"){
            objA.Nama.push(value[0]);
            objA.Nilai.push(value[2]);
            objA.Kelas = value[1];
        }
        else {
            objB.Kelas = value[1];
            objB.Nama.push(value[0]);
            objB.Nilai.push(value[2]);
        }
    }
    hasil.push(objA);
    hasil.push(objB);
    return hasil;
}

var result = kelompokkanObject(murid);
for (value of result){
    console.log (value);
}



