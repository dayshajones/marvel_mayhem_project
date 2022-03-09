class Character {
    //remember objects

    static all = []
    static charactersContainer = document.querySelector('#characters-container')
    static formContainer = document.querySelector('#form-container')

    constructor({name, description, thumbnail, team_id }) {
        this.name = name
        this.description = description
        this.thumbnail = thumbnail
        this.team_id = team_id
        Character.all.push(this)
    }

    characterHTML(){ // responsible for creating innerHTML for element
        return  `
            <div>
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <img src=${this.thumbnail} height="200" width="250">
            </div>
        `
    }

    static renderForm() {
        Character.formContainer.innerHTML += `
            <form id="new-character-form">
                <h3>Create a Character!</h3>
	            Name: <input type="text" id="name">
	            <br><br>
	            Description: <textarea id="input-description"></textarea>
	            <br><br>
	            Thumbnail: <input type="text" id="thumbnail">
	            <br><br>
	            <input type="submit" id="create">
            </form>
        `
    }
}