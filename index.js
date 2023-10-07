function isPalindrome(word) {
  // Write your algorithm here
  const result = [];
  let s = word;
  for (let i = 0; i < s.length; i++) {
    if(s.charAt((s.length-1) - i)!=s.charAt(i)){
         
          return false;          
      }
  }
  return true;
}

/* 
  Add your pseudocode here

   iterate through the string
    for (let i = 0; i < s.lengthofstring; i++(increment)) {

      //Compare first character with last character
        if(s.charAt((s.length-1) - i)!=s.charAt(i)){

              return false;    
              //returns false and break the loop          
          }
      }
      return true;
*/

/*
  Add written explanation of your solution here
    Palindrome is true when a a string read the same even in reverse that is last character  become first.
  Example :-  

    ABBA
    char at (0)=A, char at (1)=B, char at (2)=B, char at (3)=A  ========>ABBA
    in reversal   
    char at (3)=A, char at (2)=B, char at (1)=B, char at (0)=A  ========>ABBA

    ======> this Palindrome returns true 

    RACECAR
    char at (0)=R, char at (1)=O, char at (2)=B, char at (3)=O, char at (4) T ======>ROBOT
    in reversal
    char at (0)=T, char at (1)=O, char at (2)=B, char at (3)=O, char at (4) R ======>TOBOR

    ========> this Palindrome returns false
    =======================================================================================================================
    Iterate through characters of the String
    Get character at a position  and compare the last character in the string backword
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
