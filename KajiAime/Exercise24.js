function mergeArray(arr1, arr2){
    const arr3 = [];
    for(let i=0; i<arr1.length; i++){
        arr3.push(arr1[i]);
    }
    for(let i=0; i<arr2.length; i++){
        arr3.push(arr2[i]);
    }
    return arr3;
}
// Example
console.log(mergeArray([1,2,3],[4,5,6]));