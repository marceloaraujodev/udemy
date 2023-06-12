// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a ssensor error."


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

function amplitude(temp){
    let cleanArr = []
    for (let i = 0; i < temp.length; i++){
        if(temp[i] === 'error'){
            continue;
        }else{
            cleanArr.push(temp[i])
        }
    }
    // console.log(cleanArr)
    const minTemp = Math.min(...cleanArr)
    const maxTemp = Math.max(...cleanArr)
    return maxTemp - minTemp
}

// amplitude(temperatures)
console.log('Amplitude is:', amplitude(temperatures), 'degrees - End my function');

const calcAmplitude = function (temps) {
    // compare all the items against the first item to find highest or lowest
    let max = temps[0]
    let min = temps[0]

    for (let i = 0; i < temps.length; i++){
        const currTemp = temps[i]
        if(typeof currTemp !== 'number') continue;

        if(currTemp > max) max = currTemp;
        if(currTemp < min) min = currTemp;
    }
    console.log('Start teacher answer: ', 'Max and Min temp: ', max, min)
    return max - min
}

const amp = calcAmplitude(temperatures)
console.log('Amplitude', amp)