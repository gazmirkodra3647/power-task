/* Filename: ComplexCode.js
 * Description: This code demonstrates a complex algorithm for finding prime numbers using the Sieve of Eratosthenes.
 */

// Function to find all prime numbers up to a given limit
function findPrimes(limit) {
  // Create an array to hold boolean values indicating whether a number is prime
  var primes = new Array(limit + 1);
  
  // Initialize all numbers as prime
  for (var i = 2; i <= limit; i++) {
    primes[i] = true;
  }
  
  // Apply the Sieve of Eratosthenes algorithm
  for (var p = 2; p * p <= limit; p++) {
    // If prime[p] is not changed, then it is prime
    if (primes[p] === true) {
      // Update all multiples of p as non-prime
      for (var i = p * p; i <= limit; i += p) {
        primes[i] = false;
      }
    }
  }
  
  // Create an array to hold the prime numbers
  var primeNumbers = [];
  
  // Store all prime numbers in the primeNumbers array
  for (var i = 2; i <= limit; i++) {
    if (primes[i] === true) {
      primeNumbers.push(i);
    }
  }
  
  // Return the array of prime numbers
  return primeNumbers;
}

// Run the findPrimes function to find prime numbers up to 1000
var primeNumbers = findPrimes(1000);

// Display the prime numbers found
console.log("Prime numbers up to 1000: " + primeNumbers.join(", "));