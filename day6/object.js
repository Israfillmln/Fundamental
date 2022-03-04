const aset = [
    {
        mobil: ["Honda Jazz","Civic Type R"],
        harga: [75500, 93459]
    }
    // {
    //     motor : "CBR 250 RR",
    //     harga : 23350
    // }
]
// let tampilan = "";
// for (let j = 0; j < aset.length; j++) {
//     tampilan += `${j + 1}. Mobil ${aset[0].mobil[j]} seharga $ `
//     for(let i = 0; i > aset.length; i++){
//     tampilan += `${aset[0].harga[i]}\n`
//     }
// }
// let result = "Asetku\n";
// result += tampilan

// console.log(`${aset[0].mobil[0]} && ${aset[0].harga[0]}`)
// console.log(`${aset[0].mobil[1]} && ${aset[0].harga[1]}`)
// console.log(tampilan)

let a = "Lamborghini"
// nulis array pake plurals ya bro
const asetMevah = [
    {
        mobil : `${a} Huracan`,
        harga : 163940
    },
    {
        mobil : `${a} Aventador`,
        harga : 198659
    },
    {
        mobil : `${a} Gallardo`,
        harga : 116738
    }
];

// let show = "My Asset\n";
// for(let i = 0; i < asetMevah.length; i++){
    // show += `${i + 1}. Mobil ${asetMevah[i].mobil} seharga $ ${asetMevah[i].harga.toLocaleString()}\n`
// }

// console.log(show)
const cars = [
      {
        brand: "Toyota",
        year: "2010",
        colors: ["Red", "Black"],
      },
      {
        brand: "Honda",
        year: "2007",
        colors: ["Gray", "Black", "White"],
      },
    ];
    
    for (let i = 0; i < cars.length; i++) {
      let car = cars[i]
      let row = `${i+1}. Brand: ${car.brand} || Year: ${car.year} || Colors: `
    
      // Looping colors
      for (let j = 0; j < cars[i].colors.length; j++) {
        row += `, ${car.colors[j]} `
      }
    
      console.log(row)
    }