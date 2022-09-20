// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////
// PROBLEM SOLVING

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - Calc the amplitutde (greatest temp - lowest temp) in the array

// 2) Breaking up into sub-problems
// - Create a function that accepts arrays to calculate with conditions
// - Ignore errors

/*
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const amplitude = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // if (typeof arr[i] === !'number') continue;

    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(max, min);
  return max - min;
}

console.log(amplitude(temps));

// PROBLEM 2: Have the function take two arrays!

// Understanding the probem
// We should merge them

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temps2 = [2, 8, 35, 12, -1];

const amplitude = function (arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  let max = arr3[0];
  let min = arr3[0];
  for (let i = 0; i < arr3.length; i++) {
    // if (typeof 3[i] === !'number') continue;
    
    if (arr3[i] > max) max = arr3[i];
    if (arr3[i] < min) min = arr3[i];
  }
  console.log(max, min);
  return max - min;
}

console.log(amplitude(temps, temps2));

///////////////////////////////////
// DEBUGGING

function measureKelvin() {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    
    // fix bug
    value: Number(prompt('Degrees celsius:'))
  }
  // find bug
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
}
console.log(measureKelvin());
*/