function menorArreglo(Arr){
    menor = Arr[0];
    for(var i = 0; i < Arr.length; i++){
        if(Arr[i] < menor){
            menor = Arr[i];
        }
    }
    menorIndice = Arr.indexOf(menor);
    return menorIndice;
}

var Arr = [0, -1, 4, 6000, 1, 2, 1400, -10, 90, 13, 7, 12, 500, 16];
menor = menorArreglo(Arr);
console.log("Del arreglo: ", Arr);
console.log("El indice del menor de sus elementos es: ", menor);
