import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";

function _draw() {
  document.getElementById('total').innerText = ProxyState.total.toString()
}

function drawButton() {
  let template = ''
  ProxyState.snack.forEach(item => template += `<div class="col-md-3"><div class="bg-dark d-flex flex-column p-3 rounded"><img class="product-img" src="assets/img/${item.name}.jpg" alt="${item.name}"><button type="button" class="btn btn-primary mt-2" onclick="app.gamesController.buySnack('${item.name}')">Buy ${item.name}</button></div></div>`)
  document.getElementById('snack-buttons').innerHTML = template
}
export default class GamesController {

  constructor() {
    drawButton()
  }
  buySnack(item) {
    gamesService.buySnack(item)
    console.log('purchased')
    _draw()
  }

  insertQuarter() {
    gamesService.insertQuarter()
    console.log('quarter inserted')
    _draw()
  }

  returnChange() {
    gamesService.returnChange()
    console.log('change returned')
    _draw()
  }
}