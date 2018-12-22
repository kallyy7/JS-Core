function primeNumberChecker(n) {
    let prime = true;

    for (let d = 2; d <= Math.sqrt(n); d++) {
        if (n % d === 0) {
            prime = false;
            break;
        }
    }

    console.log(prime && (n > 1));
}

primeNumberChecker(7);