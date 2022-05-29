import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripService.js";

function _drawTrips() {
    let trips = ProxyState.trips
    let template = ''
    trips.forEach(t => template += t.Template)


    document.getElementById("trips").innerHTML = template


}



export class TripsController {

    constructor() {
        console.log("Trips controller is loaded", ProxyState.trips);
        ProxyState.on('trips', _drawTrips)
        ProxyState.on('reservations', _drawTrips)



        _drawTrips()
    }

    bookTrip() {
        window.event.preventDefault()
        console.log("booking a trip");
        let form = window.event.target
        let tripData = {
            name: form.name.value
        }
        console.log("tripData", tripData);
        tripsService.bookTrip(tripData)
    }


}