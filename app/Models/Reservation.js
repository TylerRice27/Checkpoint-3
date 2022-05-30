import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";





export class Reservation {

  constructor(data) {

    this.id = data.id || generateId()
    //this line tripId might be need to be taken out
    //I think it has to do with matching trips with reservations
    this.tripId = data.tripId
    this.type = data.type
    this.name = data.name
    this.number = data.number
    this.address = data.address
    this.date = new Date(data.date)
    this.cost = data.cost

    // let reservation = ProxyState.reservations.sort(a, z => a.date - z.date)
  }




  get Template() {
    return `
                
        <div class="row p-3 ">
            <div class="col-md-2 p-1">
              <p>${this.type}</p>
            </div>


            <div class="col-md-2 p-1">
              <p>${this.name}</p>
            </div>

            <div class="col-md-2 p-1">
              <p>${this.number}</p>
            </div>

            <div class="col-md-2 p-1">
              <p>${this.address}</p>
            </div>

            <div class="col-md-2 p-1">
              <p>${this.date.toDateString()}</p>
            </div>

            <div class="col-md-2 p-1 ps-4">
              <p>$${this.cost}</p>
            </div>

            <div class="col-md-1">
           <button type="button" onclick="app.reservationsController.deleteReservation('${this.id}')" class="btn btn-danger btn btn-small">Delete Reservation</button>
           </div>
             
          </div>   
            
          
                `
  }


}

