import { AppState } from "../AppState.js";
import { Player } from "../models/player.js";



class PlayerService {


  scorePoint(characterName) {
    let selectedCharacter = AppState.players.find(character => character.name == characterName)
    console.log('🏆', characterName, selectedCharacter);
    selectedCharacter.score += 1;
    console.log('⭐️', selectedCharacter);
  }

  minusPoint(characterName) {
    let selectedCharacter = AppState.players.find(character => character.name == characterName)
    selectedCharacter.score -= 1;
    console.log('subtract')
  }


  addPlayer(newName) {
    //pushes the player as a new created player that will log onto the page (via the controller)
    let createdPlayer = new Player(newName)
    AppState.players.push(createdPlayer)
    console.log('😇')

  }




}


export const playersService = new PlayerService()