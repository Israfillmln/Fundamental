// ======= Pembuatan Function =======
// function displayMenu () {
//   console.log("Hello World!")
// }

// displayMenu()
// ==================================

// ======= Parameter Function =======
// function displayUsername (username = "Naruto") {
//   console.log(`Hello ${username}`)
// }

// displayUsername("Doraemon")

// function displayUsername (username = "Naruto", greeting = "Hello") {
//   console.log(`${greeting} ${username}`)
// }

// let username = "Doraemon"
// let greeting = "Good morning"

// displayUsername("", "Good morning")
let books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
let bookPrices = [10000, 7000, 12000, 15000];

let fruits = ["Leci", "Jeruk", "Apel", "Mangga"];
let fruitPrices = [12000, 3000, 7000, 10000];

function displayMenu(itemNames, itemPrices) {
  for (let i = 0; i < itemNames.length; i++) {
    console.log(
      `${i + 1}. ${itemNames[i]} || Rp. ${itemPrices[i].toLocaleString()}`
    );
  }
}

// console.log("===== Books =====")
// displayMenu(books, bookPrices)
// console.log("")

// console.log("===== Fruits =====")
// displayMenu(fruits, fruitPrices)

function sumTwoNumbers(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Gunakan tipe data yang benar";
  }

  if (isNaN(a) || isNaN(b)) {
    return "Pastikan number anda sesuai";
  }

  let hasil = a + b;

  return hasil;
  // if (hasil > 10) {
  //   return "Angka anda lebih dari 10";
  // }

  // return "Angka anda 10 atau lebih kecil";
}

// let result = sumTwoNumbers(7, 1);
// console.log(result);

// console.log(typeof(7))
// console.log("number")
// console.log(typeof NaN)

// ======= anonymous function ========
const a = function () {
  // ...
};

a();
// ============================

// ======= Arrow Function =========
// const b = (z, y) => {
//   return z + y
// }

// Langsung return
const b = (z, y) => z + y;

// console.log(b(3, 2))

const tambah = (first, second, callback) => {
  return callback(first, second);
};

const callback = (a, b) => {
  return a + b;
}

console.log(
  tambah(3, 5, callback)
);

//==================mine============================//

// Do Not
// Repeat
// Yourself

// NaN = not a number

// function look like variable but contain sequence of instructions not values

// function -> untuk mengumpulkan sekelompok urutan program di dalam 1 variable/proses

// function tambahDua(satu, dua){
//     let hasil = satu + dua;

//     console.log(hasil);
// } 

// tambahDua(2, 30); // cara execute , ya di panggil toh (tapi fungsi nya diluar!!!)


// function kurangDua(atu, ua){
//     let hasil2 = atu - ua;
//     console.log(hasil2);
// } 

// const atu = 3;
// const ua = 5;

// kurangDua(ua, atu)



// =====pembuatan======//

// function showMenu(){
//     console.log("hello")
// }

// showMenu()

// =====pembuatan======//

// function showMenu(user){
//     console.log(`${user}`)
// }
// showMenu("hai")

// let mobil = ["Lamborghini", "Panigale V4R"]
// let Harga1 = [147500, 2500]

// let handPhone = ["iPhone 11", "iPhone 13"]
// let Harga2 = [250, 400]

// function display (Item, hargaItem){
//     for (let i = 0; i < Item.length; i++ ){
//         console.log(`${i + 1}. ${Item[i]} || $ ${hargaItem[i].toLocaleString()}`)
//     }
// }
// console.log(`Mau beli apa?`)
// console.log(``)
// console.log(`=== kendaraan ===`)
// display(mobil, Harga1)
// console.log(``)
// console.log(`=== henfun ===`)
// display(handPhone, Harga2)


// function prompt(a){
//     return a
// }
// console.log(prompt(`apakah dle`))

let hasil = 10
console.log(hasil + NaN)