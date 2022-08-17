// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution:

const reverseWords = str => {
  
    let wordArr = str.split(" ")
    let letterArr = []
    
    wordArr.forEach((_, i) => {
      letterArr[i] = wordArr[i].split("")
      letterArr[i] = letterArr[i].reverse()
      letterArr[i] = letterArr[i].join("")
    })
    
    const reverseStr = letterArr.join(" ")
    
    return reverseStr
}