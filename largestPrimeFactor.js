exports.largestPrimeFactor = function(n) {
  // do your work here

  let factors = [];

  // check if its prime:
  function isPrime(n) {
    let s = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= s; i++) {
      if (n % i === 0) return false;
    }
    return n !== 1;
  }

  //find factors:
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  for (let i = factors.length - 1; i > 0; i--) {
    if (!isPrime(factors[i])) {
      factors.splice(i, 1);
    }
  }

  primeNumber = factors[factors.length - 1];
  return primeNumber;
};
