// indexedArrays.js

// Function 1
function createArray(size) {
  // Create and return an empty array with the given size.
  let arraySize = new Array(size)
  return arraySize
}

// Function 2
function getArrayLength(arr) {
  // Return the length of the provided array.
  return arr.length
}

// Function 3
function accessArrayElement(arr, index) {
  // Access and return the element at the specified index in the array.
  return arr[index]
}

// Function 4
function updateArrayElement(arr, index, value) {
  // Update the element at the specified index in the array with the provided value.
  arr[index] = value
  return arr
}

// Function 5
function addArrayElement(arr, value) {
  // Add a new element with the provided value at the end of the array.
  arr.push(value)
  return arr
}

// Function 6
function removeArrayElement(arr, index) {
  // Remove the element at the specified index from the array.
  let newArray = arr.splice(index, 1)
  return newArray
}

// Function 7
function getUniqueValues(arr) {
  // Return an array containing only unique values from the provided array.
  let newSet = new Set(arr)
  let newArray = [...newSet]

  return newArray

}

// Function 8
function reverseArray(arr) {
  // Reverse the elements in the given array.
  let newArray = arr.reverse()

  return newArray
}

// Function 9
function findMaxValue(arr) {
  // Find and return the maximum value from the provided array.

  return(Math.max(...arr))
}

// Function 10
function findMinValue(arr) {
  // Find and return the minimum value from the provided array. 
  return(Math.min(...arr))
}

// Function 11
function sortArray(arr) {
  // Sort the provided array in ascending order.
  return arr.sort((a,b) => a - b)
}

// Function 12
function flattenNestedArray(arr) {
  // Flatten the provided nested array and return a single-level array.
  let newArray = arr.flat(2)
  return newArray
}

// Function 13
function mergeArrays(arr1, arr2) {
  // Merge two arrays, removing duplicate elements and returning a single array.
  let newSet = [...new Set ([...arr1, ...arr2])]
  let newArray = [...newSet]

  return newArray
}

// Function 14
function rotateArray(arr, steps) {
  // Rotate the elements of the array to the right by the specified number of steps.
  // Simplifier le nombre de rotation, exemple si tableau à 5 valeurs et qu'on à 7 steps. On réajoute steps à 2 7 % 5
  let effectiveSteps = steps % arr.length
  // Slice deuxième partie du tableau (éléments qui bougent) qui doivent aller au début du nouveau tableau
  let lastPart = arr.slice(-effectiveSteps)
  // Supprimer les valeurs lastPart du tableau initial
  arr.splice(-effectiveSteps, effectiveSteps)
  // Ajouter les valeurs lastPart au début du tableau avec unshift et spread(pour ajouter individuellement chaque valeur du tableau et non tout le tableau)
  arr.unshift(...lastPart)

  // Concat les 2 tableau et le return
  return arr


}

// Function 15
function removeDuplicates(arr) {
  // Remove duplicate elements from the array and return a new array with unique elements.
  let newSet = new Set(arr)
  let newArray = [...newSet]

  return newArray
}

// Function 16
function findCommonElements(arr1, arr2) {
  // Find and return an array containing common elements between two arrays.
  let setArr1 = new Set(arr1)
  let setArr2 = new Set(arr2)

  const commonElements = [...setArr1].filter(element => setArr2.has(element));

  return commonElements

}

module.exports = {
  createArray,
  getArrayLength,
  accessArrayElement,
  updateArrayElement,
  addArrayElement,
  removeArrayElement,
  getUniqueValues,
  reverseArray,
  findMaxValue,
  findMinValue,
  sortArray,
  flattenNestedArray,
  mergeArrays,
  rotateArray,
  removeDuplicates,
  findCommonElements

};
