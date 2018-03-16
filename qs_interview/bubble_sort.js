// 12 35 99 18 75 
// 35 12 99 18 75
// 35 99 12 18 75
// 35 99 18 12 75
// 35 99 18 75 12
// 99 35 18 75 12
// 冒泡排序 特点: 与邻居比,每移一下换位, 一次将一个数换到它该在的位置,一个数一次轮回 
// n个数移动n-1次 n-i-1
// 从大到小的排序

function bubbleSort(arr) {
    // 每个数都要有一次循环
    let length = arr.length;
    let temp = null;
    for(let i = 0; i < length -1; i++) {
        for(let j = 0; j < length-i-1; j++) {
            if(arr[j] < arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12,35,99,18,13]));

