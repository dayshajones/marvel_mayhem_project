class TeamService {

    constructor(endpoint){ //where we set properties for each instance of the class
        this.endpoint = endpoint;
    }

    getTeams() {
        fetch(`${this.endpoint}/teams`) //when endpoint is hit data is array of objects
        .then (resp => resp.json()) // all resps come back as strings
        .then(teams => {
            debugger
        })
    }
}