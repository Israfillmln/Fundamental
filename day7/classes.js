// // Classes?

// class Car {
//     constructor(tahun = "2000", merek, warna) {
//       this.year = tahun;
//       this.brand = merek;
//       this.color = warna;
//       this.price = 0;
//     }
//   }
  
//   class asset {
//     constructor(assetName, price) {
//       this.assetName = assetName;
//       this.price = price;
//       this.qty = 0;
//       this.bought = 0;
//     }
  
//     calculateTotalPrice = () => {
//       return this.price * this.qty;
//     };
  
//     toString = () => {
//       // Harry Potter || Rp. 7000 x 5 = Rp. 35000
//       return `${this.productName} || Rp. ${this.price.toLocaleString()} x ${
//         this.qty
//       } = ${this.calculateTotalPrice().toLocaleString()}`;
//     };
//   }
  
//   // const books = [new Book("LOTR", 10000), new Book("Harry Potter", 7000)];
//   const bukuHP = new Book("Harry Potter", 7000);
  
//   console.log(bukuHP.toString());
  
//   // console.log(books[1].price);
//   // const mobilBaru = new Car("2020", "Toyota", "White");
//   // const mobilLama = new Car("1990", "Ford", "Red")
  
//   // console.log(mobilBaru);
//   // console.log(mobilLama);
  
//   // const cars = [
//   //   {
//   //     year: "2020",
//   //     brand: "Toyota",
//   //     color: "White"
//   //   },
//   //   new Car(undefined, "Ford", "Red"),
//   // ];
  
//   // console.log(cars)



//   ============================== //

class asset {
    constructor(assetName, price) {
      this.assetName = assetName;
      this.price = price;
      this.qty = 5;
      this.bought = 0;
    }

    calculateTotal = () => {
        return this.price * this.qty 
    }

    toString = () => {
        return `${this.assetName} || US$ ${this.price.toLocaleString()} x ${this.qty} = US$ ${this.calculateTotal().toLocaleString()}`
    } 
}

const assets = [
    new asset ("CBR250RR", 73900),
    new asset ("Honda Jazz", 135600)
]

console.log(assets.toString())