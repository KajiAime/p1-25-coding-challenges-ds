let fib = 0;
const a = [1,0];
for(let i=0; i<10; i++){
    fib = a[1] + a[0]
    a[0] = a[1];
    a[1] = fib;
    console.log(fib);
}