import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


function _drawTrips() {
    let trips = ProxyState.trips
    let template = ''
    trips.forEach(t => template += t.template)

}

class TripsService {

    bookTrip(tripData) {
        console.log("Trip Service is working", tripData);
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
    }

}




export const tripsService = new TripsService()