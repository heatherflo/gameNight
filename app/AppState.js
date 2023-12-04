import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from './models/Player.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []



  players = [
    new Player('Heather'),
    new Player('Marcus')
  ]




}

export const AppState = createObservableProxy(new ObservableAppState())