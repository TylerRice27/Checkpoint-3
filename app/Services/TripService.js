import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";



class TripsService {

    bookTrip(tripData) {
        console.log("Trip Service is working", tripData);
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]

    }


    updateTripNotes(newText, id) {
        let trip = ProxyState.trips.find(t => t.id == id)
        console.log('updating trip notes in service', newText, trip);
        trip.notes = newText
        ProxyState.trips = ProxyState.trips
    }




    deleteTrip(id) {
        ProxyState.trips = ProxyState.trips.filter(p => p.id != id)
    }

}




export const tripsService = new TripsService()