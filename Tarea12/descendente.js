function descendente(arr){
    var orden = arr.sort((a,b) => b-a);
    return orden;
}

var arr = [10,50,3,1,36,7,28];
console.log(descendente(arr));