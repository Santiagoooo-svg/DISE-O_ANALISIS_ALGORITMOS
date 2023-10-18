function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1 ; i++){
        for(let j = 0; j < arr.length -1; j++){
            if (arr[j+1] < arr[j]) {
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    }
    return arr;
}

const arr = [6,8,4,1,7,9,2];
console.log(bubbleSort(arr))