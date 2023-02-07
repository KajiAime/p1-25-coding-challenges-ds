function fibon(n){
    if(n==0 || n==1){
        return 1;
    }else{
        return fibon(n-1) + fibon(n-2);
    }
}
// Example
console.log(fibon(4));