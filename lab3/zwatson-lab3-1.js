function minMaxAverage(arr){
    let sum= 0;
    for (let x of arr){
        sum+= x;
    }
    console.log("Total Numbers:", arr.length, "Min Value:", Math.min(...arr), ", Max Value:", Math.max(...arr), ", Average:", sum/arr.length)
}
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1])
minMaxAverage([75, 2, 27, 6, 96, 45, 30, 14, 34, 12])