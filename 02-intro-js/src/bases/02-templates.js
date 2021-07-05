//template strings

const namee = 'Eduardo';
const lastName = 'Aguirre';

const fullName = `${ namee } ${ lastName }`;

console.log(fullName);

function getName(name) {
    return 'Hola '+ name
}

console.warn(`${ getName(namee) }`);