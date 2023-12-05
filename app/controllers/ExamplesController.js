import { AppState } from "../AppState.js"
import { Player } from "../models/player.js"
import { playersService } from "../services/PlayersService.js"




function _logExamples() {
  console.clear()

  AppState.examples.forEach(exampleInstance => {
    console.log(exampleInstance.message)
  })

}

export class ExamplesController {
  constructor() {
    console.log('The ExamplesController has loaded')
    AppState.on('examples', _logExamples)
  }

  addMessage(message) {
    if (!message) {
      throw new Error('You must provide a message')
    }

    // examplesService.addMessage(message)
  }

}
