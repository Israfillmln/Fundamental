function generateStars(rows) {

  for (let i = 0; i < rows; i++) {
    // rows -> untuk membuat baris
    let result = "";
  
  for (let j = 0; j <= i; j++) {
    // columns -> untuk membuat kolom/bintang
    result += " *";
  }
  
      console.log(result);
  }
}

generateStars(30)

// *
// * *
// * * *
// * * * *
// * * * * *





// extras 

// const y =  10
// const x =  10

// let str = "";

// for(let i = 1; i < y; i++ ){
//   for(let j = 1; j < x; j++){
//       if(i + j >= y){
//           str = str.concat("*");
//       }else{
//           str = str.concat(" ")
//       }
//   }
//   str = str.concat("\n")
// }

// console.log(str)

  //       *
  //      **
  //     ***
  //    ****
  //   *****
  //  ******