const personajes = ['jake','finn','rey helado'];
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará name
// 2. se llamará setName
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ namee, setName ] = useState( 'eduardo' );

console.log( namee );
setName();
