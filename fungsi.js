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