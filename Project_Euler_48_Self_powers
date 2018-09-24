function selfPowers(power, lastDigits) {
  var pow = power;
  var last = lastDigits;
  var digits=1;
  var answ=0,sum;

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
