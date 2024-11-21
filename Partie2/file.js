function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Test the functions
  let numbers = [3, 7, 1, 8, 2, 9];
  console.log(findMax(numbers)); // Output: 9
  console.log(findMin(numbers)); // Output: 1

  // somme array 

  function sum(arr) {
   let somme=0;
   for(let i=0 ;i<arr.length;i++){
    somme=somme+arr[i];
   }

   return somme;
  }
let somme_nombre=[3,6,8,10,11,23,45];
console.log(sum(somme_nombre));


//filtre

function filterByLength(strings, minLength) {
    return strings.filter(str => str.length >= minLength);
  }
  
  // Example Usage
  let words = ["apple", "bat", "cat", "dolphin"];
  console.log(filterByLength(words, 4)); // Output: ["apple", "dolphin"]
  

  