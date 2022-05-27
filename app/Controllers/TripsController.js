import { ProxyState } from "../AppState.js";

function _drawTrips() {
    let trips = ProxyState.trips
    let template = ''
    trips.forEach(t => template += t.Template)


    document.getElementById("trips").innerHTML = template


}



export class TripsController {

    constructor() {
        console.log("Trips controller is loaded");



        _drawTrips()
    }


}