



export class Player {

  constructor(name) {
    this.name = name
    this.score = 0
  }


  playerTemplate() {
    return ` <section class="row" id="player-list">
    <div class="col-4 border bg-dark text-light text-center">
      <h3>${this.name}</h3>
      <button onclick="" class="btn btn-light text-dark rounded">+</button>
      <h4>${this.score}</h4>
    </div>
    <div>
      <button onclick="" class="btn btn-light text-dark rounded">-</button>
    </div>

  </section>
`
  }
}