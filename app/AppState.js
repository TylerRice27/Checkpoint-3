import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = []

  /** @type {import('./Models/Trip').Trip[]} */

  trips = [new Trip({
    name: "Disneyland",
    notes: "this trip is cool. Wish I could go"

  }),

  new Trip({
    name: "West Coast Beach",
    notes: "A sandy Trip!!!"
  })

  ]

  /** @type {import('./Models/Reservation').Reservation[]} */

  reservations = [new Reservation({
    name: "Enterprise",
    type: "Car",
    confirmationNumber: "ljl637",
    address: "21 West Street",
    date: "5-27-2022",
    cost: 20
  })

  ]
}

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
