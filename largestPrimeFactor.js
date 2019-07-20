exports.largestPrimeFactor = function(n) {
  // let primeNumber = 0;
  // do your work here

  let factors = [];

  // check if its prime:
  function isPrime(n) {
    let s = Math.floor(Math.sqrt(n));
    console.log(s);
    for (var i = 2; i <= s; i++) {
      if (n % i === 0) return false;
    }
    return n !== 1;
  }

  // ^ Note: i needs to start from 2. If it starts at 1, it will always be prime.

  //find factors:
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      console.log("adding factor: " + i);
      factors.push(i);
    }
  }
  console.log(factors);

  for (let i = factors.length - 1; i > 0; i--) {
    console.log("checking: " + factors[i]);
    if (!isPrime(factors[i])) {
      console.log("removing: " + factors[i]);
      factors.splice(i, 1);
    }
  }
  console.log(factors);

  primeNumber = factors[factors.length - 1];
  return primeNumber;
};
