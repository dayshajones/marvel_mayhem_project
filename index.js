const endpoint = "http://127.0.0.1:3000"
const characterService = new CharacterService(endpoint)
// const teamService = new TeamService(endpoint)


Character.characterForm.addEventListener('submit', handleSubmit)

characterService.getCharacters()
// teamService.getTeams()
Character.renderForm()


function handleSubmit(){
    event.preventDefault()
    characterService.createCharacter()
    event.target.reset()
}