const endpoint = "https://marvel-mayhem-2022.herokuapp.com"
const characterService = new CharacterService(endpoint)
const teamService = new TeamService(endpoint)
const c = Character.all

Character.characterForm.addEventListener('submit', handleSubmit)
Team.teamForm.addEventListener('submit', handleTeamSubmit)
Team.teamSelect.addEventListener('change', handleSelectedTeam)
Character.characterButton.addEventListener('click', viewAllCharacters)

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

function handleSelectedTeam() {
    const selectedTeam = document.querySelector('#teams-select').value
    const filteredCharacters = c.filter((element) => {
        return element.team_id === parseInt(selectedTeam);
    });
    Character.charactersContainer.innerHTML = ""
    
    filteredCharacters.forEach(character => {

        Character.charactersContainer.innerHTML += 
        character.renderSelectedCharacters()
    })
}

function viewAllCharacters() {
    Character.charactersContainer.innerHTML = ""
    c.forEach(character => {
        Character.charactersContainer.innerHTML += 
        character.renderSelectedCharacters()
    })
}


const userInput = document.querySelector('#user-comments-input')
const submitBtn = document.querySelector('#user-comments-submit')
const userForm = document.querySelector("#user-comments-form")
const div = document.querySelector('#user-comments-div')

userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const element = document.createElement('li')
    element.innerHTML = userInput.value

    div.append(element)
})