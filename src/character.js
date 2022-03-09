class Character {
    //remember objects
    static all = []

    constructor({name, description, thumbnail, team_id }) {
        this.name = name
        this.description = description
        this.thumbnail = thumbnail
        this.team_id = team_id
        Character.all.push(this)
    }

    CharacterHTML(){ // responsible for creating innerHTML for element
        return  `
            <div>
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <img src=${this.thumbnail} height="200" width="250">
            </div>
        `
    }
}