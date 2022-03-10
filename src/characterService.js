class CharacterService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

   getCharacters() {
    fetch(`${this.endpoint}/characters`) //when endpoint is hit data is array of objects
        .then(resp => resp.json())// all resps come back as strings
        .then(characters => {
            // characters.forEach(characters => {
                for (const character of characters){
                const c = new Character(character)
                c.addToDom()
            }
        })
    }
    
    createCharacter(){
        const character = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            thumbnail: document.getElementById('thumbnail').value,
            team_id: 1
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(character)
        }

        fetch(`${this.endpoint}/characters`, configObj)
        .then(resp => resp.json())
        .then(character => {
            const c = new Character(character)
            c.addToDom()
        })
    }
}