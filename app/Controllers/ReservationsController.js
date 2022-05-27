import { ProxyState } from "../AppState.js";



// function _drawReservations() {
//     let reservations = ProxyState.reservations
//     let template = ''
//     reservations.forEach(r => template += r.Template)


//     document.getElementById("reservations").innerHTML = template


// }



export class ReservationController {

    constructor() {

        console.log("reservation loaded"), ProxyState.reservations;

        // _drawReservations()
    }

}