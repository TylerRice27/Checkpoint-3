import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";






export class Trip {


  constructor(tripData) {


    this.id = tripData.id || generateId()
    this.tripId = tripData.tripId,
      this.name = tripData.name,
      this.date = new Date(tripData.date),

      //come back to this to fix undefined in notes section
      //when first creating a trip
      this.notes = tripData.notes || "Notes Here!"

    console.log(tripData);

  }


  get Template() {
    return /*html*/ `
        
      <!-- NOTE this is my trip card containing a new trip and 
      my reservations that I am going to enter -->
     
      <div class="card shadow p-3 m-3">
        <div class="row">
          <h1>${this.name}</h1>
        </div>
        <button type="button" onclick="app.tripsController.deleteTrip('${this.id}')" class="btn btn-danger">Delete
          Trip
        </button>
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
          <div class="col-md-1 mt-3">
            <p>Cost</p>
          
          </div>
         
        </div>
        <!--This is going to be the row where
                    reservation info will injected -->
        <!--NOTE this line draws my reservations to the screen-->
        ${this.Reservations}

        <!--This is for my reservation form -->
        <div class="row">
          <!--Dont forget the s on reservationscontroller -->
          <form class="reservation-form" onsubmit="app.reservationsController.addReservation('${this.id}')">
            <div class="col-md-12 p-2 m-2">

              <label for="type" required class="form-label">Type</label>
              <input type="text" required class="form-control" name="type" id="type" aria-describedby="emailHelp">
              <label for="name" required class="form-label">Name</label>
              <input type="text" required class="form-control" name="name" id="name" aria-describedby="emailHelp">
              <label for="number" required class="form-label">Confirmation Number</label>
              <input type="text" required class="form-control" name="number" id="number" aria-describedby="emailHelp">
              <label for="address" required class="form-label">Address</label>
              <input type="text" required class="form-control" name="address" id="address" aria-describedby="emailHelp">
              <label for="date" required class="form-label">Date</label>
              <input type="date" required class="form-control" name="date" id="date" aria-describedby="emailHelp">
              <label for="cost" required class="form-label">Cost</label>
              <input type="number" required class="form-control" name="cost" id="cost" aria-describedby="emailHelp">

            </div>


            <button type="submit" class="btn btn-primary">Add</button>
          </form>

        </div>
        <div class="row">
          <h3>Notes</h3>
          <div class= "col-md-6 " > 
          <textarea placeholder="notes here!"
            onblur="app.tripsController.updateTripNotes('${this.id}')">${this.notes}
          </textarea>
          </div>

          <div class="d-flex justify-content-end col-md-6 mt-5">
          <h1>Total</h1>
          </div>
          <div class="d-flex justify-content-end col-md-12 mb-5">
            <h3>$${this.Total}</h3>
          </div>

        </div>


        <!--these divs separate the cards-->
      </div>

      `
  }

  // NOTE this will eventually change to the get Reservations and pull
  // directly from my reservation id line
  //This is also in charge of my dates sorting

  get Reservations() {
    // This line filter so they join the spefic trip
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
    reservations.sort((a, z) => a.date - z.date)

    let template = ''
    reservations.forEach(r => template += r.Template)

    return template
  }

  // document.getElementById("reservations").innerHTML = template


  get Total() {
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
    let subTotal = 0
    reservations.forEach(r => subTotal += parseInt(r.cost))
    return subTotal

  }


}