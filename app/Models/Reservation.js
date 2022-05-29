import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";





export class Reservation {

  constructor(data) {

    this.id = data.id || generateId()
    // this.tripId = data.tripId
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
                
        <div class="row ">
            <div class="col-md-2">
              <p>${this.type}</p>
            </div>


            <div class="col-md-2">
              <p>${this.name}</p>
            </div>

            <div class="col-md-2">
              <p>${this.number}</p>
            </div>

            <div class="col-md-2">
              <p>${this.address}</p>
            </div>

            <div class="col-md-2">
              <p>${this.date.toDateString()}</p>
            </div>

            <div class="col-md-2">
              <p>$${this.cost}</p>
            </div>   
                 <div class="col-md-2 m-2 p-2">
           <button type="button" onclick="app.reservationsController.deleteReservation('${this.id}')" class="btn btn-danger">Delete Reservation</button>
            </div>   
        </div>        
                `
  }


}

