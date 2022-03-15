class TeamService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    // getTeams() {
    //     fetch(`${this.endpoint}/teams`)
    //     .then(resp => resp.json())
    //     .then( json => {
    //         json.data.forEach(team => {
    //             const t = new Team(team)
    //             t.addToForm()
    //         })
    //     })
    // }
}