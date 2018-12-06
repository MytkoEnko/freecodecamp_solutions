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
 findLongestWordLength("The quick brown fox
 jumped over the lazy dog"); //returns 6


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
    } };
  return answ;
  }

  repeatStringNumTimes("abc", 3); //returns 'abcabcabc'
