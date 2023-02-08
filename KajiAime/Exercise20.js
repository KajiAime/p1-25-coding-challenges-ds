function rotLeft(arr){
    arr.push(arr.shift())
    return arr;
}

// Example
console.log(rotLeft([2,4,6,8]));