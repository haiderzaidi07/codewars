// Description:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution:

const find_average = array => { 
  
    let average = array.reduce((acc, cur) => acc += cur, 0 )/array.length
    
    return (array.length === 0) ? 0 : average 
};