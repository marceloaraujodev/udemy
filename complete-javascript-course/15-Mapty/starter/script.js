'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(position){
// console.log(position)
const {latitude} = position.coords
const {longitude} = position.coords
// console.log(latitude)
// console.log(longitude)
// console.log(`https://www.google.com/maps/@${latitude},${longitude}`)

const coords = [latitude, longitude]

const map = L.map('map').setView(coords, 13); // 13 zoom level on load
// console.log(map)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    map.on('click', function(mapEvent) {
        console.log(mapEvent)
        // console.log(mapEvent.latlng.lat, mapEvent.latlng.lng)
        const {lat, lng} = mapEvent.latlng
        console.log(lat, 'lat', 'lng', lng)

        L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        })).setPopupContent('Running')
        .openPopup();

    })

}, function(){
    alert('Could not get your position')
})








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


5. Development Step:
Implementation of our plan using code.

*/

