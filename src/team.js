class Team {

    constructor(team) {
        this.name = team.attributes.name;
        this.id = team.id;
    }

    addToForm(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        document.getElementById("team-dropdown").appendChild(option)
    }
    
}