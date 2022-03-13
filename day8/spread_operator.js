const product = {
    productName : "Huracan",
    price : 2500000000,
    quantity : 0
}

const newProduct = {
    brand : `Lamborghini`,
    ...product,                 //spread operator => buka Kurung
}

newProduct.price = 90000000000

console.log(newProduct);
// const {productName, price, quantity} = product;        //berdasarkan namanya

// const myFav = ["Ann", "Inn", "Dinn", "Jess"]        //berdasarkan urutannya

// const myNewFav = [...myFav]

// console.log(myNewFav);