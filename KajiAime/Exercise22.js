function reverseArray(arr){
    const rev = [];
    let a = arr.length;
    for(let i=0; i<a; i++){
        rev.push(arr.pop());
    }
    return rev;
}

// Example
console.log(reverseArray([1,3,5,7]));