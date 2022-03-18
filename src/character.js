class Character {
    //remember objects

    static all = []
    static charactersContainer = document.getElementById("characters-container")
    static characterForm = document.getElementById('character-form-container')

    constructor({ name, description, thumbnail, id, team_id }) {
        this.name = name
        this.description = description
        this.thumbnail = thumbnail
        this.id = id
        this.team_id = team_id
        // this.team = team.name
        // debugger
        this.element = document.createElement('div')
        this.element.addEventListener('click', this.handleClick)
        Character.all.push(this)
    }

    characterHTML(){ // responsible for creating innerHTML for element
        this.element.innerHTML += `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src=${this.thumbnail} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${this.name}</h5>
                                <p class="card-text">${this.description}</p>
                                <p class="card-text">${this.team_id}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        return this.element
    }


    static renderForm() {
        Character.characterForm.innerHTML += `
        <h4>Create Character:</h4>
        <form id="new-character-form">
            Character Name: <input type="text" id="name">
            <br><br>
            Character Description: <input type="text" id="description">
            <br><br>
            Character Thumbnail: <input type="text" id="thumbnail">
            <br><br>
            Select Team: <select name="team_id" id="team-dropdown">
            </select></br>
            <br><br>
            <input type="submit" id="create">
        <form>
        `
    }

    addOnDom(){
        // Character.charactersContainer.appendChild(this.characterHTML())
        Character.charactersContainer.append(this.characterHTML())
    }

    handleClick = () => {
        if(event.target.innerText === "Delete"){
            this.element.remove()
        characterService.deleteCharacter(this.id)
        }
    }
}