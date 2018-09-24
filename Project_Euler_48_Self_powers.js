/*  You can find the description of the challange under next link:
 *  https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-48-self-powers
 *  Haven't started learning JS yet, so the solution is based on my C++ skills with only few adjustments.
 */

function selfPowers(power, lastDigits) {
  var pow = power;
  var last = lastDigits;
  var digits=1,answ=0,sum;

  for (var i=last; i>0; i--)
  {
    digits*=10;
  }
  for (var j=1; j<=pow; j++)
  {
     sum=1;
     for (var t=j; t>0; t--)
     {
         sum=(sum%digits)*j;
     }
    answ+=sum;
  }
 answ%=digits;
  
  return answ;
}
selfPowers(1000, 10);
