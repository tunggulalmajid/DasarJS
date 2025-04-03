// Perulangan 

// for
for (var i = 0; i < 5; i++){
    console.log("sebuah raja adalah aku " + (i+1));
}

console.log("\n");

for (var i = 0; i < 5; i++){
    if (i % 2 == 1){
        console.log("angka adalah ganjil" + i);
    }
    else {
        console.log("sebuah raja adalah aku " + (i));
    }
}


// while

console.log();

var i = 0;
while(i<2){
    console.log ("Halo king");
    i++;
}

// Latihan SImple

console.log("\n\nCetak Angka 1 - 10: \n");
for (var i = 1; i<11; i++){
    console.log(i);
}

console.log("\n\n");
var angka = 1;
while (angka < 11){
    console.log(angka);
    angka++;
}
console.log("\n\n")


// Nested perulangan 
for (var i = 1; i<=5;i++){
    var penampung ="" 
    for (var j = 1; j <= i;j++){
        penampung = penampung + j;
    }
    console.log(penampung);
}