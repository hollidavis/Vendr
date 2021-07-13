import Snack from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  snack = [new Snack('Gushers', .50), new Snack('Chips', .75), new Snack('Soda', 1.00), new Snack('Popcorn', .25), new Snack('M&M', 1.50)]
  total = 0.00
}

// NOTE don't touch this
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
