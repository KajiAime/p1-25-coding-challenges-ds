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
// Example
console.log(isPrime(1013));