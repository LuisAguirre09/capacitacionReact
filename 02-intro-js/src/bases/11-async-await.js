const peticion = async() => {
    try {
        const api_key = '9GqwokwHX0p9JnfUhUPj3mEfr1FoYk9Y';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);
        const data = await resp.json();
        //console.log(data);
        return data.data;

    } catch (error) {
        console.warn(error);
    }
}

peticion().then( (data) => {
    const { url } = data.images.original;
    const img = document.createElement('img');

    img.src = url;

    document.body.append(img);
});
