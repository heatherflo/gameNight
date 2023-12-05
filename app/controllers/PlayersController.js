import { Player } from "../models/player.js";
import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";




export class PlayersController {
  constructor() {
    console.log('player loaded')
    console.log('🏓', Player);
    this.drawPlayer()
  }

  scorePoint(characterName) {
    console.log('clicked')
    console.log('❤️', characterName)
    playersService.scorePoint(characterName)
    this.drawPlayer()
  }

  minusPoint(characterName) {
    playersService.minusPoint(characterName)
    this.drawPlayer()
  }

  drawPlayer() {
    const players = AppState.players
    let content = ''
    players.forEach(player => content += player.playerTemplate())
    document.getElementById('player-list').innerHTML = content
  }

  addPlayer(newName) {
    //add form here??
    playersService.addPlayer(newName)
    this.drawPlayer()
  }


}