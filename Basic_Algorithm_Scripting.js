/*
 *  Problem name: "Find the Longest Word in a String"
 *  url: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
 *  Task: Return the length of the longest word in the provided sentence.
 */

 function findLongestWordLength(str) {
   let words =[];
   let max=0;
   words = str.match(/[\w]*[\w]/g);
   for (let i=0; i<words.length; i++) {
     if(words[i].length>max) max = words[i].length;
   }
   return max;
 }
 findLongestWordLength("The quick brown fox jumped over the lazy dog"); //returns 6


 /*
  *  Problem name: "Return Largest Numbers in Arrays"
  *  url: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
  *  Task: Return an array consisting of the largest number from each provided sub-array.
  */

 function largestOfArrr(arr) {
   for (let i=0; i<arr.length; i++) {
     let largest=arr[i][0];
     for (let j=0; j<arr[i].length; j++){
       let curr = arr[i][j];
       if(curr>0 && curr>largest) largest = curr;
       else if(curr>largest) largest = curr;
     }
     arr[i] = largest;
   }
   return arr;
 }

 largestOfArr([[4, 5, 1, 3], [13, 27, 18, 26],
   [32, 35, 37, 39], [-72, -3, -17, -10]]); //returns [5,27,39,-3]

 /*
  *  Problem name: "Confirm the Ending"
  *  url: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
  *  Task: Check if a string (first argument, str) ends with the given target string (second argument, target).
  */
 function confirmEnding(str, target) {
  let ending = str.substring(str.length-target.length,str.length);
  return ending===target? true : false;
 }

 confirmEnding("Bastian", "n"); //returns true

 /*
  *  Problem name: "Repeat a String "
  *  url: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
  *  Task: Repeat a given string str (first argument) for num times (second argument).
  *  Return an empty string if num is not a positive number.
  */
  function repeatStringNumTimes(str, num) {
  let answ = '';
  if(num>0) {
    while(num>0) {
      answ+=str;
      num--;
    }
  }
  return answ;
  }

  repeatStringNumTimes("abc", 3); //returns 'abcabcabc'

  /*
   *  Problem name: "Truncate a String"
   *  url: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
   *  Task: Truncate a string (first argument) if it is longer than
   * the given maximum string length (second argument). Return the truncated string with a ... ending.
   */

   function truncateString(str, num) {
     return str.length>num? str.slice(0,num)+"...": str;
   }

  truncateString("A-tisket a-tasket A green and yellow basket", 8); //returns "A-tisket..."

  /*
   *  Problem name: "Finders Keepers"
   *  url: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
   *  Task: Create a function that looks through an array (first argument) and returns
   *  the first element in the array that passes a truth test (second argument).
   *  If no element passes the test, return undefined.
   */

   function findElement(arr, func) {
  for (var num in arr){
    if(func(arr[num])) return arr[num];
      }
      return undefined;
    }

    findElement([1, 2, 3, 4], num => num % 2 === 0); //returns 2
