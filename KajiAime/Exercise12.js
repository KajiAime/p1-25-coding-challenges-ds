function negOutFunc(arr){
    const pos = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 0){
            pos.push(arr[i]);
        }
    }
    return pos;
}
// Example
const array = [1, -2, 3, -4, 5];
console.log(negOutFunc(array));