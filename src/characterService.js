class CharacterService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

   getCharacters() {
    fetch(`${this.endpoint}/characters`) //when endpoint is hit data is array of objects
        .then(resp => resp.json())// all resps come back as strings
        .then(characters => {
            characters.data.forEach(character => {
                const c = new Character(character)
                // for (const character of characters){
                // const c = new Character(character)
                
                document.getElementById("characters-container").innerHTML +=
                c.characterHTML()
            })
        })
    }
    
    createCharacter(){
        const character = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            thumbnail: document.getElementById('thumbnail').value,
            team:  document.getElementById('team').value
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

    deleteCharacter(id){
        const configObject = {
            method: 'DELETE'
        }
        fetch(`${this.endpoint}/characters/${id}`, configObject)
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

}