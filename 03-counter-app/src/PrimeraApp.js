//import { Fragment } from "react"; //es obligatorio los fragments si se quieren colocar divs
import propTypes from 'prop-types';

//const saludo = 'Hola mundo'

const PrimeraApp = ( { saludo, subtitulo = 'Esto es un fragmento' } ) => {
    return (
        <>
            <h1> { saludo } </h1>
            {/* JSON.stringify(saludo,null,3) */}
            <p> { subtitulo } </p>
        </> //en lugar de fragments se ponen las etiquetas vacias
    )
}

PrimeraApp.propTypes = {
    saludo : propTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo : "Esto es un prop por default"
}

export default PrimeraApp;