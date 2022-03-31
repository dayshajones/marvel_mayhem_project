class TeamService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getTeams() {
        fetch(`${this.endpoint}/teams`)
        .then(r => r.json())
        .then(data => {
            data["data"].forEach((team) => {
                const t = new Team({id:team.id, ...team.attributes})
                    t.addOnDom()
                    t.addToForm()
                })
            })
        }

    createTeam(){
        const teamInfo = {
            team:{
                name: document.getElementById('name').value
            }
        }
    
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(teamInfo)
        }
    
        fetch(`${this.endpoint}/teams`, configObj)
        .then(resp => resp.json())
        .then(team => {
            const t = new Team({id:team.data.id, ...team.data.attributes})
            t.addOnDom()
            t.addToForm()
        })
    }
}
