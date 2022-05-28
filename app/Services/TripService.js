import { ProxyState } from "../AppState";
import { Trip } from "../Models/Trip";




class TripsService {

    bookTrip(tripData) {
        console.log("Trip Service is working", tripData);
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
    }

}