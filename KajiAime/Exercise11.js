function avrArrCont(arr){
    let sm = 0;
    for(let i=0; i<arr.length; i++){
        sm += arr[i];
    }
    return sm/arr.length;
}
// Example
const array = [1, 2, 3, 4, 5];
console.log(avrArrCont(array));