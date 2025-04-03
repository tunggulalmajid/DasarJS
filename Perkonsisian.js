// Operator Pembanding 

/*
1. == (Equals To) membandingkan value saja 1 == "1" true 
2. === (equals to value and type) membandingkan value dan tipe 1==="1" False
3. != (tidak sama dengan) value kebalikan dari equals to
4. !== (tidak sama dengan value dan type) kebaliakan dari equals to type and value 
5. >
6. <
7. >=
8. <=
*/


// if else 
var angka = 1;
if (angka==1){
    console.log("angka adalah 1 le")
}
else {
    console.log("Angka selain satu");
}

var umur = 10;
if (umur <= 12){
    console.log("Anak Anak");
}
else if (umur > 12 && umur < 20){
    console.log("Anak Remaja")
}
else{
    console.log ("Dewasa");
}

// Latihan

umur = 16;
if (umur >= 17 ){
    console.log("Bisa Bikin Ktp");
}
else {
    console.log("Belum Bisa Bikin Ktp");
}

console.log("\n\n")

// switch case 
var pilihMinuman = "Teh";
switch(pilihMinuman){
    case"Kopi":
        console.log ("Minuman Yang dipilih adalah Kopi")
        break;
    case "Teh":
        console.log("Minuman Yang dipilih adalah Teh");
        break;
    default :
        console.log ("Minuman Ynag dipilih selain Teh dan Kopi")
        break;
}

console.log("\n\n");

// Nested if 
var umurPelanggan = 17;
var tinggiPelanggan = 150;

if (umurPelanggan < 17){
    if (tinggiPelanggan > 150){
        console.log("Pelanggan Boleh Naik");
    }
    else {
        console.log("Pelanggan Tidak Boleh Naik Karena Tinggi Kurang");
    }
} 
else {
    console.log("Pelanggan Boleh Naik");
}