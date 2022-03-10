class Team {

    constructor({ name, id }) {
        this.name = name;
        this.id = id;
    }

    addToForm(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        document.getElementById("team-dropdown").appendChild(option)
    }
    
}