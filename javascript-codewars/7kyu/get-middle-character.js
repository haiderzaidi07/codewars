// Description:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// Solution:

const getMiddle = s => {
  
    // Check if length of string is odd
    if(s.length%2 === 1){
      // Find the middle character's index     
      const middleCharIndex = (s.length-1)/2
      // Return the middle character of the string     
      return s[middleCharIndex]
    }
    
    // Check if length of string is even
    else if(s.length%2 === 0){
      // Find the middle characters' second index
      const middleCharIndexSecond = (s.length)/2
      // Find the middle characters' first index
      const middleCharIndexFirst = middleCharIndexSecond - 1
      // Concatenating and returning the middle two characters
      const middleTwoChars = `${s[middleCharIndexFirst]}${s[middleCharIndexSecond]}`
      return middleTwoChars
    }
}