import { AppState } from './AppState.js';
import { PlayersController } from './controllers/PlayersController.js';
import { router } from './router-config.js';

class App {

  router = router
  playersController = new PlayersController()


}


const app = new App()
// @ts-ignore
window.app = app
