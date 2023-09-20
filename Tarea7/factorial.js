function calculo_factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total *= i; 
	}
	return total; 
}

console.log(calculo_factorial(10));