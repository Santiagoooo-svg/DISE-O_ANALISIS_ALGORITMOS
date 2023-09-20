function calculo_Fibonacci(n){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

console.log(calculo_Fibonacci(10));