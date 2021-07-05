//arreglossss

const arreglo = [1,2,3,4];
//arreglo.push(5);

let arreglo2 = [...arreglo,5]; //se le agrega el operador spread

let arreglo3 = arreglo2.map(function (num) { //esto se le llama callback
    return 2 * num;
})

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );