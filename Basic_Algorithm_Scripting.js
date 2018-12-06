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
 findLongestWordLength("The quick brown fox jumped over the lazy dog");
