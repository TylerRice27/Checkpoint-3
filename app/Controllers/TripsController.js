import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripService.js";
import { generateId } from "../Utils/generateId.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

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
        ProxyState.on('trips', saveState)
        ProxyState.on('reservations', saveState)

        loadState()

        _drawTrips()
    }

    bookTrip() {
        window.event.preventDefault()
        console.log("booking a trip");
        let form = window.event.target
        let tripData = {

            name: form.name.value,


        }
        console.log("tripData", tripData);
        tripsService.bookTrip(tripData)
    }


    updateTripNotes(id) {
        let textarea = window.event.target
        console.log(textarea.value, id);
        tripsService.updateTripNotes(textarea.value, id)
    }

    deleteTrip(id) {

        let confirmAction = confirm("Are you sure you want to delete this Trip?");
        if (confirmAction) {

            tripsService.deleteTrip(id)

        } else {

            alert("Action canceled");
        }
    }


}