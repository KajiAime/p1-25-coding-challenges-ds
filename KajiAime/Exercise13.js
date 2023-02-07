function maxInArr(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }return max;
}
// Example
const array = [1, 3, 5, 2, 4];
console.log(maxInArr(array));