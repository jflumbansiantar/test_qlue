// NodeJS, Python, Golang, or PHP
// Write a function which, taking in a positive integer n as input, returns an array of all primes lower than
// n.
// sample expected output:
// getPrimes(5); ⇒ array(2, 3)
// getPrimes(10); ⇒ array(2, 3, 5, 7)

function getPrimes(n) {
    let temp = [];
    for (let i = 1; i <= n; i++) {
        if (i <= n) {
            isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                temp.push(i)
            }
        }
    }
    console.log(temp);
}

getPrimes(34)