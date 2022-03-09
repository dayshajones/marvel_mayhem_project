const base_url = "http://localhost:3000"
const characterService = new CharacterService(base_url)

characterService.getCharacters()