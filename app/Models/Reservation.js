import { generateId } from "../Utils/generateId.js";





export class Reservation {

  constructor(data) {

    this.id = data.id || generateId()
    this.tripId = data.tripId
    this.type = data.type
    this.name = data.name
    this.confirmationNumber = data.confirmationNumber
    this.address = data.address
    this.date = data.date
    this.cost = data.cost
  }




  get Template() {
    return `
                
        <div class="row">
            <div class="col-md-2">
              <p>${this.type}</p>
            </div>


            <div class="col-md-2">
              <p>${this.name}</p>
            </div>

            <div class="col-md-2">
              <p>${this.confirmationNumber}</p>
            </div>

            <div class="col-md-2">
              <p>${this.address}</p>
            </div>

            <div class="col-md-2">
              <p>${this.date}</p>
            </div>

            <div class="col-md-2">
              <p>$${this.cost}</p>
            </div>

                
                
                
        </div>        
                `
  }


}

