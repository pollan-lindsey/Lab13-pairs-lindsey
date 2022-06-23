"use strict";
const chocolateBar = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//PROBLEM TWO---

//make first function to add element to current array
function addElementToBeginningOfArray(array, element){
   let newArray = [element,...array];
   console.log(array);
   console.log(newArray)

}
addElementToBeginningOfArray(chocolateBar, 'rolo');


//make second function to change array permanently
function destructivelyAddElementToBeginningOfArray(array, element){
console.log(`Input array: ${array}`);
array.unshift(element);
console.log(`Output array: ${array}`);
}
destructivelyAddElementToBeginningOfArray(chocolateBar, 'three muskateers');

//PROBLEM THREE---

function addElementToEndOfArray(array, element){
    let newArray = [...array, element];
    console.log(array);
    console.log(newArray);
}

addElementToEndOfArray(chocolateBar, 'payday');

function destructivelyAddElementToEndOfArray(array, element){
    console.log(`Input array: ${array}`);
    array.push(element);
    console.log(`Output array: ${array}`); 
}

destructivelyAddElementToEndOfArray(chocolateBar, 'almond joy');

//PROBLEM FOUR---

function accessElementInArray(array, index){
console.log(array[index]);
}
console.log(accessElementInArray(chocolateBar, 1));

//PROBLEM FIVE---
 
function destructivelyRemoveElementFromBeginningOfArray (array){
array.shift();
console.log(array);
}
destructivelyRemoveElementFromBeginningOfArray(chocolateBar);

//PROBLEM SIX---

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  console.log(array);
}
removeElementFromBeginningOfArray(chocolateBar);

function destructivelyRemoveElementFromEndOfArray(array){
    console.log(array);
    array.pop();
    console.log(array);
}
destructivelyRemoveElementFromEndOfArray(chocolateBar);

//PROBLEM SEVEN

function removeElementFromEndOfArray(array){
    console.log(array);
   let newArray = array.slice(0, array.length - 1);
    console.log(newArray)
}
removeElementFromEndOfArray(chocolateBar);