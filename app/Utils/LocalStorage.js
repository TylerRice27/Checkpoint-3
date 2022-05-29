import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";






export function saveState() {
    console.log("saving my data to local storage");

    let data = {
        trips: ProxyState.trips,
        reservations: ProxyState.reservations
    }

    window.localStorage.setItem('tripsAndReservations', JSON.stringify(data))

}

export function loadState() {

    console.log("loading my data from local storage");

    let data = window.localStorage.getItem('tripsAndReservations')

    if (data) {
        let obj = JSON.parse(data)

        ProxyState.trips = obj.trips.map(tr => new Trip(tr))
        ProxyState.reservations = obj.reservations.map(res => new Reservation(res))
    }

}