// Description:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// Solution:

#include <string>

std::string switcheroo(const std::string &s){
  
  std::string switched = s;
  
  for(int i = 0; s[i] != '\0'; i++){
    
    if(s[i] == 'a')
      switched[i] = 'b';
    
    else if(s[i] == 'b')
      switched[i] = 'a';
  }
  
  return switched;
}