



export class Player {

  constructor(name) {
    this.name = name
    this.score = 0
  }


  playerTemplate() {
    return ` <section class="row" id="player-list">
    <div class="col-4 border bg-dark text-light text-center">
      <h3>${this.name}</h3>
      <button onclick="app.playersController.scorePoint('${this.name}')" class="btn btn-light text-dark rounded">+</button>
      <h4>${this.score}</h4>
      <div>
      <button onclick="app.playersController.minusPoint('${this.name}')" class="btn btn-light text-dark rounded">-</button>
    </div>
    </div>
  </section>`
  }


  // playerForm() {
  //   //form that will show up om the DOM
  //   return `<form onsubmit="app.playersController.addPlayer()">
  //   <div>
  //     <label for="name">Player Name:</label>
  //     <input type="text" minlength="2" maxlength="15" name="name" required />
  //   </div>
  //   <div>
  //     <button type="submit">Add Player</button>
  //   </div>
  // </form>`
  // }

}