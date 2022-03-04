
let maxNumber = 15

for (let i = 1 ; i <= maxNumber; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log ('fizzbuzz')
    }
     else if (i % 5 == 0) {
        console.log ('buzz')
    } else if (i % 3 == 0) {
        console.log (`fizz`)
    } else {
        console.log(i)
    }
}

// ================= contoh =======================//
//                                    by : kak Theo//  

// const max = 30;

// for (let i = 1; i <= 30; i++) {
//   // ketika dia bisa dibagi habis oleh 3 -> fizz
//   // ketika dia bisa dibagi habis oleh 5 -> buzz
//   // ketika dia bisa dibagi habis oleh 3 dan 5 -> fizzbuzz
//   // modulus

//   // jika dia kelipatan 3
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }