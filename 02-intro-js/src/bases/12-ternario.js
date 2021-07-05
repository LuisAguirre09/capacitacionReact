
const activo = true;

const mensaje = (activo) ? 'Activo' : 'Inactivo'; //operador ternario

//const mensaje = ( !activo ) && 'Negativo'; //operador ternario abreviado (retorna false)
const mensaje = ( activo ) && 'Activo'; //retorna "activo"

console.log(mensaje);