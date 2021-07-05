//funcionesss

const saludar = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`;

const saludar3 = ()=> 'Hola mundo';

console.log( saludar('naruto') );
console.log( saludar2('sasuke') );
console.log( saludar3() );

const getUser = ()=>({
        uid: "0001",
        nombre: "jake",
});

console.log(getUser());

//tarea
//1. transforma a una funcion flecha
//2.tiene que retornar un obj implicito
//3.pruebas

let getUserActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre,
});

const usuarioActivo = getUserActivo('Eduardo');
console.log( usuarioActivo );
