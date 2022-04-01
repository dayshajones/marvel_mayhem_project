const endpoint = "http://127.0.0.1:3000"
const characterService = new CharacterService(endpoint)
const teamService = new TeamService(endpoint)

Character.characterForm.addEventListener('submit', handleSubmit)
Team.teamForm.addEventListener('submit', handleTeamSubmit)
Team.teamButton.addEventListener('click', handleTeamButton)
Team.teamSelect.addEventListener('change', handleSelectedTeam)


characterService.getCharacters()
teamService.getTeams()
Character.renderForm()

// Team.renderTeamForm()

function hideTeamForm() {
    Team.teamForm.style.display = "none"
};

function handleSubmit(e){
    e.preventDefault()
    characterService.createCharacter()
    e.target.reset()
}

function handleTeamSubmit(e){
    e.preventDefault()
    teamService.createTeam()
    e.target.reset()
    hideTeamForm()
}

function handleTeamButton(){
    if(event.target.innerText === "Create Team"){
        hideTeamButton()
        Team.renderTeamForm()
    }
}

function hideTeamButton() {
    Team.teamButton.style.display = "none"
} 

function showTeamButton() {
    Team.teamButton.style.display = "block"
}

function handleSelectedTeam() {
    const c = Character.all
    const selectedTeam = document.querySelector('#teams-select').value
    const filteredCharacters = c.filter((element)=>{ return element.team_id == selectedTeam; });

    Character.charactersContainer.innerHTML = ""

        filteredCharacters.forEach(character => {
            Character.charactersContainer.innerHTML += character.renderSelectedCharacters()
        })
}