const container = document.getElementById("main-container")

async function getCharacters() {
    // TODO: Obtener los objetos desde el api de rick and morty (enlace en el documento). Haga uso de la funcion fetch. Puede usar async/await y la funcion json
    const data = await fetch('https://rickandmortyapi.com/api/character');
    const json = await data.json();
    
    const characters = json.results.map(parseJsonToCharacter);
    // TODO: Recorra la lista json obtenida y convierta cada elemento (mapa) en un objeto Character y agreguelo a la lista characters.
    // Llame a la funcion parseJsonToCharacter para cada elemento del recorrido.
    
    renderAllCharacters(characters)
}

function parseJsonToCharacter(element) {
    // TODO: Retorna un objeto de tipo "Character" a partir de un mapa (element) pasado como parametro
    return new Character(element.name, element.image, element.status, element.species, element.location.name);
}

function renderAllCharacters(characters) {
    characters.forEach(character => {
        container.innerHTML += character.toHtml()
    })
}

getCharacters()
