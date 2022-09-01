// Description:
// An anagram is the result of rearranging the letters of a word to produce a new word.

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

// Solution:

#include <string>

bool isAnagram(std::string test, std::string original){
  
    int count = 0;

    for(int i = 0; test[i] != '\0'; i++){

        for(int j = 0; original[j] != '\0'; j++){
            
            if(tolower(test[i]) == tolower(original[j])){
                count++;
                break;
            }
            
        }
    }

    int testLen = 0;

    for(int i = 0; test[i] != '\0'; i++){
        testLen++;
    }

    int origLen = 0;

    for(int i = 0; original[i] != '\0'; i++){
        origLen++;
    }

    return count == origLen && count == testLen ? true : false;
}