// Description
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution:

const highAndLow = numbers => {
  
    numbers = numbers.split(" ")
    
    let max = Number(numbers[0])
    let min = Number(numbers[0])
    
    for(let i = 0; i < numbers.length; i++){
      
      if(Number(numbers[i]) > max){
        max = numbers[i]
      }
      
      else if(Number(numbers[i]) < min){
        min = numbers[i]
      }
      
    }
    
    let maxMin = []
    maxMin.push(max)
    maxMin.push(min)
    maxMin = maxMin.join(" ")
  
    return maxMin
}