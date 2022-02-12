

//   // array
//   const books = [
//     "LOTR", // 0
//     "Harry Potter", // 1
//    "Sherlock", // 2
//    "Naruto", // 3
//    "One Piece", // 4
//    "Doraemon", // 5
//  ];

// // methods contain function , propeerties hold data types

//  // untuk tambah data
//  books.push("The Hobbit");
//  books.push("Bleach");
//  books.push("test");
 
// //  console.log(books[books.length - 1]);

//  // untuk modify data
//  // books[3] = "Boruto";

// //  console.log(books[3])

// // console.log(books[books.indexOf("Naruto")])

// // console.log(books.indexOf("Naruto"))

//  for (let i = 0; i < books.length; i++) {
//    console.log(books[i]);
//  }

//  // console.log(books[0]);

//  // console.log(books[books.length - 1]);

//  // ==== duplicate indexOf ====
//    let searchText = "One Piece";
//    let resultIndex;

//   for (let i = 0; i < books.length; i++) {
//     if (books[i] == searchText) {
//       resultIndex = i;
//       break;
//    }
//   }

//  const numbers = [1, 3, 4, 17, 21, 13, 2, 8, 40];

//  // cara hapus
//  // numbers.splice(3, 2);

//  // numbers.pop();

//  // console.log(numbers);

//  const sentence = "Halo selamat datang di rumah saya";

//  const words = sentence.split("a");

//   // console.log(words);


// Array
const books = [
"LOTR",
"Harry Potter",
"Naruto", 
"SCRUM",
];

// console.log(books.length);

// untuk tambah Data
books.push("The Hobbit")
books.push("The Doll")

// untuk modify data
books[1] = "Dora"

// books.indexOf("Naruto")
// console.log (books.indexOf("Naruto"))
// console.log (books[books.indexOf("Naruto")])

// console.log(books);

// console.log(books[3]);

// console.log(books[books.length - 1]);


// for (let i = 0; i < books.length; i++){
//   console.log(books[i])
// }

// ========-duplicate index of========
let search = `SCRUM`;
let iniIndex;

for (let i = 0; i < books.length; i++){
  if (books[i] == search){
    iniIndex = i;
    break;
  }
}

books.sort()

// console.log(iniIndex);

// console.log(books);


const nomor = [1, 13, 20, 25, 19, 9];

// hapus langsung indexnya
nomor.splice(1, 3) 
//((parameter pertama itu indexnya), (kedua itu berapa yang mo dihapus))

// hapus terakhirnya
nomor.pop()

console.log(nomor)

// console.log(nomor.sort())


const kalimat = "Haluko silong!"

let kalimatTa = kalimat.split(" ")

let kalimatKi = kalimat.split("o")

console.log(kalimatTa)
console.log(kalimatKi)