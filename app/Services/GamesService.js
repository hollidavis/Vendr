import { ProxyState } from '../AppState.js'

class GamesService {
  buySnack(item) {
    if (ProxyState.total >= ProxyState.snack[item].price)
      ProxyState.total -= ProxyState.snack[item].price
  }

  insertQuarter() {
    ProxyState.total += 0.25
  }

  returnChange() {
    ProxyState.total = 0.00
  }
}

export const gamesService = new GamesService()