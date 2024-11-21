//factorial

function factorial(n){
    let fact =1;
      n=4;
    for(let i=1; i<=n; i++){
            fact= fact*i;
    }
    return fact;
}

console.log(factorial(4));


//nombre premier

function isPrime(num) {
    if (num <= 1) return false;
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
  
  // Example Usage
  console.log(isPrime(7));  // Output: true
  console.log(isPrime(12)); // Output: false

  // Fibonacci Sequence:

  function generateFibonacci(n) {
    let fib = [0, 1]; // Start with the first two numbers
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n); // Return only up to n elements
}

console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

  