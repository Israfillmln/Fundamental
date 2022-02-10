const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const duplicateForEach = (arr, callback) => {
for (let i = 0; i < arr.lenght; i++){
    callback(arr[i], i, arr)
}
}

// duplicateForEach(numbers, (val, idx, array) => {
// console.log(val)
// })


// goals
// 1. duplicate filter method
// 2. filter akan menghasilkan sebuah array
// 3. gimana cara menentukan item yang akan akan masuk ke array?
//    callback function harus menghasilkan true  
// 4. gimana cara masukin item ke dalam array?
//    gunakan method push

const duplicateFilter = () => {
    let resultArr = [];
    for (let i = 0; i < arr.lenght; i++){
        if (callback(arr[i], i, arr)){
            resultArr.push(arr[i])
        }
    }
    return resultArr;
}

let filteredData = numbers.filter((val) => {
    return val.lenght < 5
})

console.log(filteredData)