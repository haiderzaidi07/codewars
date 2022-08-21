// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// Solution:
#include <string>
using namespace std;

string replace(const string &s){

    string vowels = "aeiouAEIOU";
    string replaced = s;
    int i = 0;
    
    while(s[i] != '\0'){
      
        for(int j = 0; j < 10; j++){
          if(s[i] == vowels[j])
            replaced[i] = '!';
        }
      
      i++;
    }
    
    return replaced;
}