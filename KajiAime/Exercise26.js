function setDiff(arr1, arr2){
    const arr3 = [];
    for(let i=0; i<arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}
// Example
console.log(setDiff([1,2,3,4,5,6],[1,3,5,7,9]))