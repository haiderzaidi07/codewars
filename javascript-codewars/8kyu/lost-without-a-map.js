// Description:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Solution:

const maps = x => {
    let arr = []
    x.forEach( el => arr.push(el *= 2))
    return arr
}