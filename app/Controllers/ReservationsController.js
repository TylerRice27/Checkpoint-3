import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";



// function _drawReservations() {
//     let reservations = ProxyState.reservations
//     let template = ''
//     reservations.forEach(r => template += r.Template)


//     document.getElementById("reservations").innerHTML = template


// }



export class ReservationController {

    constructor() {

        console.log("reservation controller loaded"), ProxyState.reservations;

        // _drawReservations()
    }

    addReservation(tripId) {

        window.event.preventDefault()
        console.log("add reservation item", tripId);
        let form = window.event.target
        let reservationData = {
            name: form.name.value,
            tripId: tripId,
            type: form.type.value,
            //This my confirmation number named number to match id on html
            number: form.number.value,
            address: form.address.value,
            date: form.date.value,
            cost: form.cost.value
        }
        console.log(reservationData);
        reservationsService.addReservation(reservationData)
    }

}