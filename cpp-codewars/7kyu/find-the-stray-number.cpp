// Description:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Solution:

#include <vector>

int stray(std::vector<int> numbers) {
    
    int stray = 0;
  
    if(numbers[0] == numbers[1]){
      
        for(unsigned long i = 0; i < numbers.size(); i++){
        
        if(numbers[i] != numbers[0]){
            stray = numbers[i];
            break;
        } 
      }
    }
  
    else if(numbers[0] == numbers[2])
        stray = numbers[1];
    else
        stray = numbers[0];
    
    return stray;
};