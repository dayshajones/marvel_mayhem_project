class CharacterService {

    constructor(endpoint) { //where we set properties for each instance of the class
        this.endpoint = endpoint
    }

   getCharacters(){
    fetch(`${this.endpoint}/characters`) //when endpoint is hit data is array of objects
        .then(resp => resp.json())// all resps come back as strings
        .then(characters => {
            debugger
            for (const character of characters){
                const c = new Character(character)
                c.appendToDom
            }
        })
    }
}