import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";






class ReservationService {
    addReservation(reservationData) {
        console.log("add reservation service", reservationData);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
    }

    deleteReservation(id) {
        console.log("deleting res", id);
        ProxyState.reservations = ProxyState.reservations.filter(r => r.id != id)
    }

}



export const reservationsService = new ReservationService()