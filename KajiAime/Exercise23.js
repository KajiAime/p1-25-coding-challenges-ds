function reverseArray(str){
    let rev = '';
    let a = str.length;
    for(let i=0; i<a; i++){
        rev = str[i] + rev;
    }
    return rev;
}

// Example
console.log(reverseArray('naM redipS'));