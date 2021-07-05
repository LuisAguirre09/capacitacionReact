//promesas
import { getHeroeById } from "./bases/08-import-export";

/*const promesa = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        //importa el hero by id
        const heroe = getHeroeById(3);

        resolve(heroe);
    }, 2000);
});

promesa.then( (heroe) => {
    console.log( heroe );
})*/

const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve,reject) =>{
        setTimeout(() => {
            const heroe = getHeroeById( id );
    
           if(heroe){
                resolve(heroe);
           }else{
               reject(id);
           }
        }, 2000);
    });

}

getHeroByIdAsync(1)
    .then( console.log)
    .catch(console.warn)

