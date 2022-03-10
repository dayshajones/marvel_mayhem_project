class TeamService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getTeams() {
        fetch(`${this.endpoint}/teams`)
        .then(resp => resp.json())
        .then( json => {
            json.forEach(team => {
                const t = new Team(team)
                t.addToForm()
            })
        })
    }
}