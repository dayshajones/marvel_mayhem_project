class Character {
    //remember objects

    static all = []
    static charactersContainer = document.getElementById("characters-container")
    static characterForm = document.getElementById('form-container')

    constructor({id, name, description, thumbnail, team_id }) {
        this.id = id
        this.name = name
        this.description = description
        this.thumbnail = thumbnail
        this.team_id = team_id

        this.element = document.createElement('ul')
        // this.element.dataset.id = this.id;
        // this.element.id = `character-${id}`
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

    addToDom(){
        Character.charactersContainer.append(this.characterHTML())
    }

    static renderForm() {
        Character.characterForm.innerHTML += `
        <form id="new-character-form">
            Name: <input type="text" id="name">
            <br><br>
            Description: <input type="text" id="description">
            <br><br>
            Thumbnail: <input type="text" id="thumbnail">
            <br><br>
            Select Team: <select name="team_id" id="team-dropdown">
            </select></br>
            <input type="submit" id="create">
        <form>
        `
    }

    // static findById (id) {
    //     return this.all.find(character => character.id === id)
    // }

    handleClick = () => {
        if(event.target.innerText === "Delete"){
            this.element.remove()
        characterService.deleteCharacter(this.id)
        }
    }
}