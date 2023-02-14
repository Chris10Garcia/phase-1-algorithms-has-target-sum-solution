function hasTargetSum(array, target) {
  
  const seenNumbers = {}


  for (const element of array){
    const compliment = target - element;
    
    if(compliment in seenNumbers) return true;

    seenNumbers[element] = true;
  }

  return false;

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  instructor iterates through array
  Target - number = result we want to find

  if the result is in the object results true, return true

  assign the key into the object with the value true


  what this does
  [1, 4, -1, 10, 5], 14

  14 -1 = 13

  is 13 in object? no

  1 :true

  14-4 = 10

  is 10 in object? no

  10 :true

  14 - -1 = 15

  is 15 in object? no

  15 : true

  14 - 4 = 10

  is 10 in object, true -> returns true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
