async function pokeDisplay(pokeName){
    url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    const response = await fetch(url)
    const data = await response.json()
    const name = data.name
    const sprite_front = data.sprites.front_default
    
    const sprite_shiny_front = data.sprites.front_shiny
    const sprite_back = data.sprites.back_default
    const sprite_shiny_back = data.sprites.back_shiny
    const poke_type = data.types[0].type.name

    const poke_div = document.createElement(`div`)
    document.body.append(poke_div)
    poke_div.innerHTML= `
    <div class='pokeCard'>
        <h1>Different Sprites</h1>
        <img src='${sprite_front}'>
        <img src='${sprite_shiny_front}'>
        <img src='${sprite_back}'>
        <img src='${sprite_shiny_back}'>
        <h1>${name}</h1>
        <h2>Type: ${poke_type}</h2>
    </div>
    `
}
pokeDisplay('pikachu')