const product = {
    productName : "Huracan",
    price : 2500000000,
    quantity : 0
}

const newProduct = {
    brand : `Lamborghini`,
    ...product,                 //spread separator => buka Kurung
}

product.price = 90000000000

const {productName, price, quantity} = product;        //berdasarkan namanya

const myFav = ["Ann", "Inn", "Dinn", "jess"]        //berdasarkan urutannya

const myNewFav = [...myFav]

console.log(myNewFav);