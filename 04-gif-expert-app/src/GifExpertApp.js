import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

function GifExpertApp() {

    //const categories = ['Jujutsu', 'Love is War', 'Nagatoro'];
    const [categories, setCategories] = useState(['Jujutsu', 'Love is War', 'Nagatoro']);

    const handleAdd = () => {
        //setCategories( [...categories, 'Naruto'] ); //una forma es el spread operator 
        setCategories( cat => [...cat, 'Naruto'] ); //la otra es con un callback
    }

    return(
        <>
            <h2> GifExpertApp </h2>

            <AddCategory setCategories = { setCategories }/>
            <hr></hr>

            <button onClick={ handleAdd }> Agregar anime </button>

            <ol>
                {
                    categories.map( cat => {
                        return <li key={ cat }> { cat } </li>
                    })
                }
            </ol>

        </>
    )
}

export default GifExpertApp;