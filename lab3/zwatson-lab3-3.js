function sortNumbers(arr){
    const arr1= [...arr];
let num1, num2;
for(let i=0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1-i; j++) {
    num1 = arr[j];
    num2 = arr[j+1];
    if (num2 < num1){
        arr[j]= arr[j+1];
        arr[j+1]= num1;
    }
}
}
console.log('Original array:', arr1, 'Sorted array:', arr)
}
sortNumbers([11, 14, 2, 8, 5])
sortNumbers([28, 35, 21, 7, 14])
sortNumbers([48, 12, 60, 24, 36])