
let persona = {
    nombre: 'eduardo',
    apellido: 'muller',
    edad: 23,
    direccion : {
        ciudad: 'arkham',
        lat: 23.4443,
        lng: -10.9833
    }
};

let persona2 = {...persona};
persona2.nombre = 'zero';

console.log( persona );
console.log( persona2 )