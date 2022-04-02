// 1. sum of positives and negatives
// input : sebuah array of numbers
// output : sebuah array ->[<sum_of_positives>, <sum_of_negatives>]
// example input : [1, 2, -3, -2]
// ex. output : [3, -5]

// const array = [3, 5, -3, -5];
// let positive = 0;
// let negative = 0;

// const sumOfNegativesAndPositives = () => {
//  for (let i = 0; i < array.length; i++){
//      if (array[i] > 0){
//         positive += array[i]
//      } else if (array[i] < 0){
//         negative += array[i]
//      }
//  } return [positive, negative]
// } 


// console.log(sumOfNegativesAndPositives())

// 2. square All
// input : sebuah array of numbers
// output : array of numbers yang sama, tapi sudah dipangkat 2
// example input : [4, 2]
// // example output : [16, 4]
// const array2 = [2, 4, 5]
// let resultArr = [];
// const squareAll = () => {
    // for (let i = 0; i < array2.length; i++){
    //     result.push (array[i] * array[i])
    // }

    // return result

//      resultArr = array.map((val) => {
//          return val*val
//      })

//      return resultArr
// }

// console.log (squareAll())

// 3. plus minus
// input : sebuah array of numbers
// output : ex. input [1, 2, 3]
//          ex. output -6

// const array3 = [3, 4, 5, 3]

// let resultPlusMinus ;
// let operator = "plus";

// const plusMinus = () => {
//     for (let i = 0; i < array3.length; i++){
//         if (array3[i] == 0 && array3[i] % 2 === 0 ){

//         }
//     }
// }

// ====================================================== //

// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

const rermoveVocal = (word) => {
    // 1. ubah word jadi array
    // 2. check per huruf , apakah huruf tsb merupakan vowel
    // 3. jika huruf adalah vowel, hapus.
    let strResult = "";
    const wordArr = word.split("");

    wordArr.forEach((character) => {
        if (!(
        character === "a" ||
        character === "a" || 
        character === "u" || 
        character === "e" || 
        character === "o")){
            strResult += character;
        }
    })
    return strResult

    //  kalo ketemu problem, pecah satu2 dulu
}
// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71

// =================Alphabet Value=======================//
// 1. pecah string jadi array
// 2. kita punya list abjad berurutan
// 3. cehck value setiap huruf, cocokkan dengan posisi huruf tersebut di abjad
// 4. tambahkan/jumlahkan value ke total

const alphabetValue = (input = "") => {
    const inputArr = input.split("");
    const abjad = "abcdefghijklmnopqrstuvwxyz".split("");
    let jumlahValue = 0;

    inputArr.forEach((character) => {
        const characterValue = abjad.indexOf(character) + 1;

        jumlahValue += characterValue
    })

    return jumlahValue
} 
// console.log(alphabetValue("ananda"))
// console.log(alphabetValue("israfil"))
// console.log(alphabetValue("indah"))

// ==========================================//

// // 3. Odd alphabet value
// // Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// // value ganjil

// // Input: "steve"
// // Output: 29

// // Input: "abc"
// // Output: 4

// ========================================//

const alphabetOddValue = (input = "") => {
    const inputArr = input.split("");
    const abjad = "abcdefghijklmnopqrstuvwxyz".split("");
    let jumlahValue = 0;
    // for (let i = 0; i < input.split("").length; i++){
    //     jumlahValue += abjad.indexOf(input[i]) + 1;
    // } 
    inputArr.forEach((character) => {
        const characterValue = abjad.indexOf(character) + 1;

        if(characterValue % 2 !== 0){
            jumlahValue += characterValue
        }
    })

    return jumlahValue
} 
// console.log(alphabetOddValue("rafli"))

// ==========================================//

// const alphabetValueGanjil = (input) => {
//     let abjad = "abcdefghijklmnopqrstuvwxyz".split("");
//     let jumlahValue = 0;
//     for (let i = 0; i < input.split("").length; i++){
//         if((abjad.indexOf(input[i]) + 1) % 2 !== 0){
//             jumlahValue += abjad.indexOf(input[i]) + 1;
//         }
//     } 
    

//     return jumlahValue
// } 
// console.log(alphabetValueGanjil("steve"))
// console.log(alphabetValueGanjil("abc"))

// // 4. Unique items
// // Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// // value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// // unique (hanya berada di salah satu array saja)

// // Input:
// // arr1 = [1, 3, 7, 4]
// // arr2 = [1, 5, 3, 7, 0]
// // Output: [5, 4, 0]


// // Output: [5, 4, 0]
// const arr1 = [1, 3, 7, 4]
// const arr2 = [1, 5, 3, 7, 0]
// let result = [];

// ====================unique====================//
// 1. check value arr1 apkah ada di arr2
//      a. kalau ada, skip
//      b. kalau tidak ada, push ke array baru
// 1. check value arr2 apakah ada di arr1
//      a. kalau ada, skip
//      b. kalau tidak ada, push ke array baru

const uniqueIems = (arr1 = [], arr2 = []) => {
    const resultArrUnique = [];

    arr1.forEach((val) => {
        if (!arr2.includes(val)){
            resultArrUnique.push(val)
        }
    });
    arr2.forEach((val) => {
        if (!arr1.includes(val)){
            resultArrUnique.push(val)
        }
    });

    return resultArrUnique
}

// console.log(uniqueIems([1, 3, 5], [1, 2, 3, 4]))

// ===================unique=====================//

// console.log(result)
// // Bonus Question
// // 5. Remove duplicates
// // Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// // value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// // dari kedua array tersebut, tetapi sudah
// // Input:
let arr1 = [1, 3, 7, 4]
let arr2 = [1, 5, 3, 7, 0]
// // Output: [1, 3, 4, 5, 7, 0]

const removeDuplicates = (arr1=[], arr2=[]) => {
    const resultArr = [ ...arr1 ]

    arr2.forEach((val) => {
        if(!resultArr.includes(val)) {
           resultArr.push(val) 
        }
    })
    
    return resultArr

    // cara keren
    // return [...new Set ([...arr1, ...arr2])]

}

    console.log(removeDuplicates(arr1, arr2))

