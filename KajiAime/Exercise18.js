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

let i = 0;
let num = 0;
while(i<100){
    if(isPrime(num)){
        console.log(num);
        i += 1;
    }
    num += 1;
}