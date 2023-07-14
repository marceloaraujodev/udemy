'use strict';






class Workout{
    date = new Date(); // Class fields
    id = (Date.now() + '').slice(-10) // usually use library for creating ids, but here will use date convert to string and use the last 10 numbers, not a good practice

    constructor(coords, distance, duration){
        // this.date = date;  // ES6 at least thos above are very new
        // this.id = id ;  // ES6
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }

    _setDescription(){
        //prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
    }

}

// Child of workout
class Running extends Workout{
    type = 'running'
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration) // [lat, lng] Remember child class call super with the variables 
        this.cadence = cadence; // add the new varible to the child class
        this.calcPace()
        this._setDescription()
    }
    calcPace(){
        // min/km
        this.pace = this.duration / this.distance 
        return this.pace
    }
}

// Child of workout
class Cycling extends Workout{
    type = 'cycling' // same as puting in the constructor. this.type = 'cyclying'
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration) // Remember child class call super with the variables 
        this.elevationGain = elevationGain; // add the new varible to the child class
        this.calcSpeed()
        this._setDescription()
    }

    calcSpeed(){
        // km/h
        this.speed = this.distance / (this.duration / 60)
        return this.speed
    }
}

const run1 = new Running([39, -12], 5.2, 24, 178)
const cycling1 = new Cycling([39, -12], 27, 95, 578)

// console.log(run1, cycling1)

///////////////////////////////

// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App {
    #map;
    #mapEvent;
    #workout = [];

    constructor() {
        this._getPosition()

        // Setting the marker on map when form is submitted (on enter)
        form.addEventListener('submit', this._newWorkout.bind(this))

        // Changes Elevation or Cadence for running or cycling (toggleelevation field doesnt use the this so dont need to bind it)
        inputType.addEventListener('change', this._toggleElevationField)
        
    }

    _getPosition(){ 
        if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
        function(){
            alert('Could not get your position')
        })
    }

    _loadMap(position){
        const {latitude} = position.coords
        const {longitude} = position.coords
        // console.log(`https://www.google.com/maps/@${latitude},${longitude}`)
        
        const coords = [latitude, longitude]

        this.#map = L.map('map').setView(coords, 13); // 13 zoom level on load
        // console.log(map)
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
        
        // Handling clicks on map. - Show form / set focus / Set map event info to global variable mapEvent
            this.#map.on('click', this._showForm.bind(this))
    }

    _showForm(mapE){
        this.#mapEvent = mapE
        form.classList.remove('hidden')
        inputDistance.focus()    
        // console.log('mapE:', mapE)
    }

    _hideForm(){
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

        form.style.display= 'none';
        form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000)
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }
    
    _newWorkout(e){
        const validInputs = (...inputs) => 
            inputs.every(inp => Number.isFinite(inp))
            
        const allPositive = (...inputs) => inputs.every(inp => inp > 0)

        e.preventDefault() // So page wont reload and erase everything- for now since its not saved

        // Get data from form
        const type = inputType.value
        const distance = +inputDistance.value // + converts into number
        const duration = +inputDuration.value 
        const {lat, lng} = this.#mapEvent.latlng // Deconstruct 2 variable from mapevent
        let workout;

        // If workout running, create running object
        if(type === 'running'){
            // Check if data is valid
            const cadence = +inputCadence.value;

            if(
                // !Number.isFinite(distance) || // checks if number is (e.g., Infinity, -Infinity, or NaN) if so execute
                //  !Number.isFinite(duration) ||
                //  !Number.isFinite(cadence) 
                // if the return from validInputs is false meaning one of the numbers is not finite. I will make the false become true using the ! then the condition will execute since the estatement became true and alert will run
                !validInputs(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
               )
            return  alert('Inputs have to be positive numbers') 

            workout = new Running([lat, lng], distance, duration, cadence)
            
        }

        // If workout cycling, create cycling object
        if(type === 'cycling'){
            const elevation = +inputElevation.value;
             if(
                !validInputs(distance, duration, elevation) || 
                !allPositive(distance, duration, elevation)
               )
            return  alert('Inputs have to be positive numbers') 

            workout = new Cycling([lat, lng], distance, duration, elevation)
        }

        // Add new objet to workout array
        this.#workout.push(workout)
        console.log(workout)

        // Render workout on map as marker
        this._renderWorkoutMarker(workout)

        // Render workout on list
        this._renderWorkout(workout)
        
        // Hide form + clear input fields


        // Clear input fields
        this._hideForm();
    }

    _renderWorkoutMarker(workout) {
        // Render workout on map as a marker
        L.marker(workout.coords).addTo(this.#map) // Marker receives a array wit lat and long, add to map
        .bindPopup(L.popup({ // object for the popup with specs
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        })).setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴'} ${workout.description}`)
        .openPopup();
    }

    _renderWorkout(workout){
        let html =`
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

          if(workout.type === 'running')
          html += `
                <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
                </div>
            </li>
             `;

             if(workout.type === 'cycling')
             html += `
                    <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
                </li>
             `;

             form.insertAdjacentHTML('afterend', html)
    }

}

const app = new App();



/* Description of what the code does

_getPosition():

👉 On regular function calls this is set to undefined so this._loadMap its a regular function call. There for the need to bind.

👉 gets position from navigator and calls loadMap and binds the this keyword from the getCurrentPosition to the loadMap method. The seconde parameter is if there is a error getting the location here we input a function to display the alert, 


_newWorkout(e):

👉 when using ... the spread operator inputs becomes an array. 

👉 inputs.every will loop through array and check if numbers are finite. And will only return true if all numbers are finite



*/











//                                      TITLE PLANNING A PROJECT

/*
1. User Stories: 
Description of the applications functionality from the user's perespective. All user stories put together describe the entire application.

 Common format: As a [type of user], I want [an action] so that [a benefit]
type of user: user, admin, etc.    Action: what?    Benefit: Why?

👉 As a user, I want to log my running workouts with location, distance, time, pace and steps/min, so I can keep a log of all my running.

👉 log all my cycling workouts, with location, distance, time, speed and elevation gain.

👉 See all workouts at a glance

👉 See workouts on a map, where do I workout the most

👉 See workouts when I leave the app and come back later, dot erase the data.


2. Features:

👉 Map where user clicks to add new workout (best ways to get location coordinates)

👉 Geolocation to display map at current location (more user friendly)

👉 Form to input distance, time, pace, steps/min

👉 Form to input distance, time, speed, elevation gain

👉 Display all workouts in a list

👉 Display workouts on the map

👉 Store workout data in the browser using local storage API

👉 On page load, read the saved data from local storage and display



3. Flowchart:
What we will build:

👉 Geolocation to display map at current location

👉 Map where user clicks to add new workout 

👉 Use colors on the flow to make it easier to assimilate, yellow for action, green for rendering info

👉 Its normal that the flowchart changes during the process.


Flow: 
Page loads ➡ 1. Async Get current location coordinates ➡ 2. Render map on current location 
➡ user click on map ➡ 3. 4. render workout form ➡ user submits new workout 
➡ 5. render workout on map ➡ 6. render workout list ➡ 7. Store workouts in local storage 
➡ 8. Load workouts from local storage ➡ Move map to workout location


4. Architecture:
How we will build it. How to implement and organize it. Strategies for efficency to avoid spaguetthi code

👉 Where and how to store the data.

👉 Parents will host the data and methods that appears in both childs.

👉 The Child class will hold the more specific data and methods that only happen on them

👉 The structure for this project will come from classes and objects.




5. Development Step:
Implementation of our plan using code.

*/

