import { Player } from "../models/Player.js";
import { AppState } from "../AppState.js";



export class PlayersController {
  constructor() {
    console.log('player loaded')
    console.log(Player);
    this.drawPlayer()
  }

  drawPlayer() {
    const players = AppState.players
    let content = ''
    players.forEach(player => content += player.playerTemplate())
    document.getElementById('player-list').innerHTML = content
  }

}