const endpoint = "http://127.0.0.1:3000"
const characterService = new CharacterService(endpoint)
const teamService = new TeamService(endpoint)


Character.characterForm.addEventListener('submit', handleSubmit)
Team.teamForm.addEventListener('submit', handleTeamSubmit)

characterService.getCharacters()
teamService.getTeams()
Character.renderForm()
Team.renderTeamForm()


function handleSubmit(e){
    e.preventDefault()
    characterService.createCharacter()
    e.target.reset()
}

function handleTeamSubmit(e){
    e.preventDefault()
    teamService.createTeam()
    e.target.reset()
}