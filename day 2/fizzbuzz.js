const max = 30;

for (let i = 1; i <= 30; i++) {
 // ketika dia bisa dibagi habis oleh 3 -> fizz
 // ketika dia bisa dibagi habis oleh 5 -> buzz
 // ketika dia bisa dibagi habis oleh 3 dan 5 -> fizzbuzz
 // modulus

  // jika dia kelipatan 3
    if (i % 3 == 0 ) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
   
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
    
  
}