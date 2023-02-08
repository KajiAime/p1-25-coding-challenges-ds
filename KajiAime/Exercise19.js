function isPrime(n){
    if(n < 2){
        return false;
    }
    for(let i=2; i<=n/2; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

function nPrimeAboveP(p, n){
    const arr = [];
    let j = 0;
    let num = n+1;
    while(j < p){
        if(isPrime(num)){
            arr.push(num);
            j += 1;
        }
        num += 1;
    }
    return arr;
}

// Example
console.log(nPrimeAboveP(10, 10));