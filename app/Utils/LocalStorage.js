import { ProxyState } from "../AppState.js";






export function saveState() {

    console.log("saving my data to local storage");

    let data = {
        trips: ProxyState.trips,
        reservations: ProxyState.reservations
    }

    window.localStorage.setItem("tripsAndReservations", JSON.stringify(data))

}