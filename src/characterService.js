class CharacterService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

   getCharacters() {
    fetch(`${this.endpoint}/characters`) //when endpoint is hit data is array of objects
    .then(r => r.json())
    .then(data => {
        data["data"].forEach((character) => {
            const c = new Character({id:character.id, ...character.attributes})
                c.addOnDom()
            })
        })
    }
    
    createCharacter(){
        const characterInfo = {
            character:{
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                thumbnail: document.getElementById('thumbnail').value,
                team_id: document.getElementById("team-dropdown").value
            }
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(characterInfo)
        }

        fetch(`${this.endpoint}/characters`, configObj)
        .then(resp => resp.json())
        .then(character => {
            const c = new Character(character)
            c.addOnDom()
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