import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";



class TripsService {

    bookTrip(tripData) {
        console.log("Trip Service is working", tripData);
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
    }





    deleteTrip(id) {
        ProxyState.trips = ProxyState.trips.filter(p => p.id != id)
    }

}




export const tripsService = new TripsService()