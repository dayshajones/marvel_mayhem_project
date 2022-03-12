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
        this.element.dataset.id = this.id;
        this.element.id = `character-${id}`
        Character.all.push(this)
    }

    characterHTML(){ // responsible for creating innerHTML for element
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <img src=${this.thumbnail} height="200" width="250">
                <br><br>
                <button class="edit" data-id=${this.id}>Edit</button>
                <button class="delete" data-id=${this.id}>Delete</button>
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

    static findById (id) {
        return this.all.find(character => character.id === id)
    }
}