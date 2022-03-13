class CharacterService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

   getCharacters() {
    fetch(`${this.endpoint}/characters`) //when endpoint is hit data is array of objects
        .then(resp => resp.json())// all resps come back as strings
        .then(characters => {
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
            team_id: document.getElementById("team-dropdown").value
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

    // patchCharacter(character) {
    //     const configObj = {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'            
    //         },
    //         body: JSON.stringify(character)
    //     }

    //     fetch(`${this.endpoint}/characters/${id}`, configObj)
    //     .then(response => response.json())
    //     .then(updatedCharacter => {
    //         character = updatedCharacter

    //     })
    // }

    deleteCharacter(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        const configObject = {
            method: 'DELETE'
        }
        fetch(`${this.endpoint}/characters/${id}`, configObject)
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

}