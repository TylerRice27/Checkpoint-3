import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = []

  /** @type {import('./Models/Trip').Trip[]} */

  trips = [new Trip({

    name: "Disneyland",
    notes: ""

  }),

  new Trip({

    name: "West Coast Beach",
    notes: ""
  })

  ]

  /** @type {import('./Models/Reservation').Reservation[]} */

  reservations = [new Reservation({

    name: "Enterprise",
    type: "Car",
    number: "ljl637",
    address: "21 West Street",
    date: "5-27-2022",
    cost: 20
  }),

  new Reservation({

    name: "Southwest",
    type: "Flight",
    number: "21gt52",
    address: "2 Airport Way",
    date: "4-21-2009",
    cost: 6

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
