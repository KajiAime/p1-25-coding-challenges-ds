function sumArrCont(arr){
    let sm = 0;
    for(let i=0; i<arr.length; i++){
        sm += arr[i];
    }
    return sm;
}
// Example
const array = [1, 2, 3, 4, 5];
console.log(sumArrCont(array));