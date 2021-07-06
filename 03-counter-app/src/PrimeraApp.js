//import { Fragment } from "react"; //es obligatorio los fragments si se quieren colocar divs
import propTypes from 'prop-types';

//const saludo = 'Hola mundo'

const PrimeraApp = ( { saludo } ) => {
    return (
        <>
            <h1> { saludo } </h1>
            {/* JSON.stringify(saludo,null,3) */}
            <p>Esto es un fragmento</p>
        </> //en lugar de fragments se ponen las etiquetas vacias
    )
}

PrimeraApp.propTypes = {
    saludo : propTypes.string.isRequired
}

export default PrimeraApp;