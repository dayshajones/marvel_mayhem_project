class Character {
    //remember objects
    static all = []
    static charactersContainer = document.getElementById("characters-container")
    constructor({name, description, thumbnail, team_id }) {
        this.name = name
        this.description = description
        this.thumbnail = thumbnail
        this.team_id = team_id

        Character.all.push(this) //referencing newly made instance
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `character-${this.id}`

        Character.all.push(this)
    }

    CharacterHTML(){ // responsible for creating innerHTML for element
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <img src=${this.thumbnail}>
            </div>
        `
        return this.element
    }

    appendToDom() {
        Character.charactersContainer.append(this.characterHTML())
    }
}