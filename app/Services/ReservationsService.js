import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";






class ReservationService {
    addReservation(reservationData) {
        console.log("add reservation service", reservationData);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
    }



}



export const reservationsService = new ReservationService()