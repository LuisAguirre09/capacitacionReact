//desestructuracion
//asignacion desestructurante
const persona = {
    nombre : "jake",
    edad : 42,
    clave : "el perro",
    color: "naranja"
};

//const {nombre, clave} = persona;

//console.log( nombre,clave );

const contexto = ({nombre, color ,clave}) => {
    //console.log( nombre, color );

    return {
        nombreClave: clave,
        piel: color,
        latlng: {
            lat: 13.0998,
            lng: -10.9920
        }
    }
}

const {nombreClave, piel, latlng:{ lat, lng }} = contexto(persona);

console.log(nombreClave, piel);
console.log(lat, lng);
