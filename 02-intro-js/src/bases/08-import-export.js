//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

//console.log(owners);

export const getHeroeById = (id) => {
    return heroes.find( heroe => id === heroe.id );
}

//console.log( getHeroeById(1) );

//usar el filter para traer todos los de DC

export const getHeroByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner );
}

//console.log( getHeroByOwner('Marvel') );
