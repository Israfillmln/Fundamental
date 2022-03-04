class Product  {
    constructor(productName, price){
    this.productName = productName;
    this.price = price;
    this.qty = 0
    }
    
    calculateTotalPrice = () => {
        return this.price * this.qty;
    };

    toMenuString = () => {
        return `${this.productName}|| Rp. ${this.price.toLocaleSting()}`
    }

}

//====child BOOK====
// jika sama methodnya, method nya overide(nimpa)

class Book extends Product {
    constructor(productName, price){
        super(namaProduk, harga)
        this.productName = productName;
        this.price = price;
    }
}