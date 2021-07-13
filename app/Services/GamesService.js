import { ProxyState } from '../AppState.js'

class GamesService {
  buySnack(item) {
    console.log(item)
    let found = ProxyState.snack.find(s => s.name == item)
    if (ProxyState.total >= found.price)
      ProxyState.total -= found.price
  }

  insertQuarter() {
    ProxyState.total += 0.25
  }

  returnChange() {
    ProxyState.total = 0.00
  }
}

export const gamesService = new GamesService()