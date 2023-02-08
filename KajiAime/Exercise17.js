function sumDig(num){
    let sum = 0;
    let s = num.toString();
    for(let i of s){
        sum += parseInt(i);
    }
    return sum;
}
// Example
console.log(sumDig(256));