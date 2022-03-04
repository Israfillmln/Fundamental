//classes means cetakan or pabriknya objek

// class Car {
//     constructor(a, b, c) {
//          this.year = a;
//          this.brand = b;
//          this.colour = c;
        
         
//     }
// }

// const mobilBaru = new Car("2000", "Toyota", "White");
// const mobilLama = new Car("2020", "Huracan", "Black")

// console.log(mobilLama)
// console.log(mobilBaru)


// const cars = [
    // {
        // year : "2020",
        // brand : "Toyota",
        // colour : "hitam"
    // },
    // new Car(undefined, "ford", "red"),
// ]
// console.log( cars )




class Book {
    constructor(productName, price){
        this.productName = productName
        this.Price = price
        this.qty = 5
        this.bought = 0
        
    }
    calculateTotalPrice = () => {
        return this.price * this.qty;
    };

    toString
}
const books = [
    new Book("LOTR", 10000),
    new Book("Scrum", 50000)
]

console.log(books[0].calculateTotalPrice())





// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//       constructor(brand, mod) {
//           super(brand);
//           this.model = mod;
//         }
//         show() {
//             return this.present() + ', it is a ' + this.model;
//         }
//     }
    
//     let myCar = new Model("Ford", "Mustang");
//     document.getElementById("demo").innerHTML = myCar.show();
    
//     console.log(myCar.show())