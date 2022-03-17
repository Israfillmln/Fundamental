// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const duplicateForEach = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i, arr)
//     }
//   }
  
//   // duplicateForEach(books, (val, index) => {
//   //   console.log(val)
//   // })
  
  
//   // Conditions
//   // 1. Duplikat method filter
//   // 2. Filter akan menghasilkan sebuah array -> pasti akan return array
//   // 3. Gimana cara menentukan item yang akan masuk ke array?
//   //    Callback function harus menghasilkan true
//   // 4. Gimana cara masukkan item ke dalam array?
//   //    Gunakan method push
//   const books = [
//     "LOTR",
//     "Harry Potter",
//     "Doraemon",
//     "Naruto"
//   ]
  
//   const duplicateFilter = (arr, callback) => {
//     let resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//         resultArr.push(arr[i])
//       }
//     }
  
//     return resultArr;
//   }
//   let filteredData = duplicateFilter(books, (val) => {
//     return val.length > 6
//   })
  
//   // let filteredData = books.filter((val) => {
//   //   return val.length > 6
//   // })
  
  
//   console.log(filteredData)


  const fruits = ["Apel", "Leci-", "Leci", "Istoberi"]

  
  const duplicateIndexOf = (array, dataToFind) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == dataToFind) {
        return i;
      }
    }
    return -1
  }
  console.log (duplicateIndexOf(fruits,"LEci"))
  
  // console.log (fruits.find((val, idx, arr) => {
  //   return idx > 3
  // }
// ))

const duplicateFind = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    if(callBack(array[i], i, array)) {
      return array[i]
    }   
  }
}

console.log(duplicateFind(fruits, (val) => {
  return val.length > 4
}))