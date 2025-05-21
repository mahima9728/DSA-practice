console.log("Working...");

let arrayEven = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Reverse only the numbers at even indexes from an array.
// Input: [1, 2, 3, 4, 5, 6] → Output: [5, 2, 3, 4, 1, 6]

// function evenIndex(array) {
//   let count = 0;
//   let even = [];
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     const element = array[i];
//     if (i % 2 === 0) {
//       even.push(element);
//     }
//   }

//   for (let j = 0; j < array.length; j++) {
//     const element = array[j];
//     // console.log(element);

//     if (j % 2 === 0) {
//       newArray.push(even[count]);
//       count++;
//     } else {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// }

// console.log(evenIndex(array));

// Reverse only the numbers at odd indexes from an array.
// Input: [1, 2, 3, 4, 5, 6] → Output: [5, 2, 3, 4, 1, 6]

let arrayOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function odd(array) {
  let oddArray = [];
  let newArray = [];
  let count = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    if (i % 2 === 1) {
      oddArray.push(element);
    }
  }
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    if (j % 2 === 1) {
      newArray.push(oddArray[count]);
      count++;
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(odd(arrayOdd));

// Merge two sorted arrays into one sorted array.
// Input: [1,3,5], [2,4,6] → Output: [1,2,3,4,5,6]

mergedArray = arrayEven.concat(arrayOdd);
console.log(mergedArray);

let firstIndex = mergedArray[0];

for (let m = 0; m < mergedArray.length; m++) {
  const element = mergedArray[m];
  if (element < firstIndex) {
    firstIndex = element;
  }
}
console.log(mergedArray);
