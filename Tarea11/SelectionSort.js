function selectionShort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let min = i;
        for(let j = i + 1;j < arr.length;j++){
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let aux = arr[i];
        arr[i] = arr[min];
        arr[min] = aux;
    }
    return arr;
}

const arr = [6, 8, 4, 1, 7, 9, 2];
console.log(selectionShort(arr))