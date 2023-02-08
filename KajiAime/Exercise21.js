function rotRight(arr){
    arr.unshift(arr.pop())
    return arr;
}

// Example
console.log(rotRight([2,4,6,8]));