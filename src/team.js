class Team {

    static all = []
    static teamsContainer = document.getElementById("teams-container")
    static teamForm = document.getElementById('team-form-container')
    static teamButton = document.querySelector("button.btn.btn-primary")
    static teamSelect = document.querySelector('#teams-select')

    constructor({id, name }){
        this.id = id
        this.name = name
        this.element = document.createElement('div')
        Team.all.push(this)
    }

    renderTeam(){
        this.element.innerHTML += `
            <ul class="list-group">
                <li class="list-group-item">${this.name}</li>
            </ul>
            `
        this.element.id = `team-${this.id}`
        return this.element
    }


    static renderTeamForm() {
        Team.teamForm.innerHTML += `
        <h4>Create Team:</h4>
        <form id="new-team-form">
            Team Name: <input type="text" id="name">
            <br><br>
            <input type="submit" id="create">
        <form>
        `
    }

    addOnDom(){
        Team.teamsContainer.append(this.renderTeam())
        
    }

    addToForm(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        document.getElementById("team-dropdown").appendChild(option)
    }
    
    teamSelect(){
        const select = document.createElement('option');
        select.value = this.id;
        select.innerText = this.name;
        Team.teamSelect.appendChild(select)
    }

}
