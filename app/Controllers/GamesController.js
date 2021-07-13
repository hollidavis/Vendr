import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";

function _draw() {
  document.getElementById('total').innerText = ProxyState.total.toString()
}

export default class GamesController {
  buySnack() {
    gamesService.buySnack()
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