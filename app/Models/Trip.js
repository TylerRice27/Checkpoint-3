import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";






export class Trip {


    constructor(tripData) {
        this.id = tripData.id || generateId()
        this.name = tripData.name
        this.notes = tripData.notes

    }


    get Template() {
        return `
        
      <!-- NOTE this is my trip card containing a new trip and 
      my reservations that I am going to enter -->
     
        <div class="col-12">
         <div class="card">
            <h1>${this.name}</h1>
             <div class="row ">
          <div class="col-md-2 mt-3">
            <p>Type</p>
          </div>
          <div class="col-md-2 mt-3">
            <p>Name</p>
          </div>
          <div class="col-md-2 mt-3">
            <p>Confirmation Number</p>
          </div>
          <div class="col-md-2 mt-3">
            <p>Address</p>
          </div>
          <div class="col-md-2 mt-3">
            <p>Date</p>
          </div>
          <div class="col-md-2 mt-3">
            <p>Cost</p>
          </div>
          <!--This is going to be the row where 
              reservation info will injected -->
        <!--NOTE this line draws my reservations to the screen-->
             ${this.Reservations}

        </div>
        
        
        
        `
    }

    // NOTE this will eventually change to the get Reservations and pull
    // directly from my reservation id line

    get Reservations() {
        let reservations = ProxyState.reservations
        let template = ''
        reservations.forEach(r => template += r.Template)

        return template
    }

    // document.getElementById("reservations").innerHTML = template

}