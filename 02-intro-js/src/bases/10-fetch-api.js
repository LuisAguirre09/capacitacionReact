const api_key = '9GqwokwHX0p9JnfUhUPj3mEfr1FoYk9Y';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);

peticion
.then( (data) => data.json())
.then( ({data}) =>{
    const {url} = data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

})
.catch( console.warn );

