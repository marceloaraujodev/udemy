// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a ssensor error."


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
const temperatures2 = [8, 13, 19, 28]


//// I did it this onde below

// function amplitude(temp){
//     let cleanArr = []
//     for (let i = 0; i < temp.length; i++){
//         if(temp[i] === 'error'){
//             continue;
//         }else{
//             cleanArr.push(temp[i])
//         }
//     }
//     // console.log(cleanArr)
//     const minTemp = Math.min(...cleanArr)
//     const maxTemp = Math.max(...cleanArr)
//     return maxTemp - minTemp
// }

// // amplitude(temperatures)
// console.log('Amplitude is:', amplitude(temperatures), 'degrees - End my function');

////-------------------------------------------

// const calcAmplitude = function (temps) {
//     let max = temps[0]
//     let min = temps[0]

//     for (let i = 0; i < temps.length; i++){
//         const currTemp = temps[i]
//         if(typeof currTemp !== 'number') continue;

//         if(currTemp > max) max = currTemp;
//         if(currTemp < min) min = currTemp;
//     }
//     console.log('Start teacher answer: ', 'Max and Min temp: ', max, min)
//     return max - min
// }

// const amp = calcAmplitude(temperatures, temperatures2)
// console.log('Amplitude', amp)
// console.log('---------------------------');


// //---- Project manager now wants 2 arrays of temperatures fucker

// const calcAmplitudeNew = function (t1, t2) {
//     const temps = t1.concat(t2)
//     let max = temps[0]
//     let min = temps[0]

//     for (let i = 0; i < temps.length; i++){
//         const currTemp = temps[i]
//         if(typeof currTemp !== 'number') continue;

//         if(currTemp > max) max = currTemp;
//         if(currTemp < min) min = currTemp;
//     }
//     console.log('Project Manager second Request: ', 'Max and Min temp: ', max, min)
//     return max - min
// }

// const ampNew = calcAmplitudeNew(temperatures, temperatures2)
// console.log('Amplitude New', ampNew)


//// --------------Debugging--------

// const measureKelvin = function (){
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // FIX the bug CHANGING PROMPT TO Number(prompt!)
//         value: Number(prompt('Degrees celsius:'))
//     }
//     // FIND you will see the type of the return value as a string instead of a number
//     // console.log(measurement);
//     console.table(measurement)

//     const kelvin = measurement.value + 273
//     return kelvin
// }
// // A IDENTIFY
// console.log(measureKelvin())


//// Using debugger

// const calcAmplitudeBug = function (t1, t2) {
//         const temps = t1.concat(t2)
//         let max = temps[0]
//         let min = temps[0]
    
//         for (let i = 0; i < temps.length; i++){
//             const currTemp = temps[i]
//             if(typeof currTemp !== 'number') continue;
//             if(currTemp > max) max = currTemp;
//             if(currTemp < min) min = currTemp;
//         }
//         console.log('Project Manager second Request: ', 'Max and Min temp: ', max, min)
//         return max - min
//     }
    
//     const ampBug = calcAmplitudeBug([3, 5, 1], [9, 4, 5])
//     // IDENTIFY 
//     console.log('Amplitude Bug', ampBug)

// // CODING CHALLENGE

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with this temperatures,
example: [17, 21, 23] will print "... 17C in 1 days..21C in 2 days ... 23C in 3 days"

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems

test data 1: [17, 21, 23]
test data 2: [12, 5, -5, 0, 4]
*/

// function printForecast(arr){

//     for (let i = 0; i < arr.length; i++){
//         const day = i + 1
//         if(day === 1) {
//             console.log(arr[i], '...Celsius in', day, 'day')
//         }else{
//             console.log(arr[i],'...Celsius in', day, 'days')
//         } 
//     }
// }

// printForecast([17, 21, 23]);
// console.log('------------------')
// printForecast([12, 5, -5, 0, 4]);

//// my other version with some of what he was doing in the beggining.

// const data1 = [17, 21, 23]
// const data2 = [12, 5, -5, 0, 4]

// function printForecast2(arr) {
//     const tempSym = '°C'
//     const newArr = []
    
//     for (let i = 0; i < arr.length; i++){
//         const day = i + 1
//         if(day === 1){
//           newArr.push(`... ${arr[i]}${tempSym} in ${day} day`)
//         }else{
//             newArr.push(`... ${arr[i]}${tempSym} in ${day} days`);
//         }
//     }
//     return newArr.toLocaleString()
//     // const string = newArr.toString()
//     // return string
// }

// console.log(printForecast2(data1)); 