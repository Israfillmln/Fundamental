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

//====child Car====
// jika sama methodnya, method nya override(nimpa)

class Car extends asset {
    constructor(assetName, price, kapan, dimana){
        super(assetName, price)
        this.kapan = kapan;
        this.dimana = dimana;
    }
}

console.log(new Car ("Lamborghini", 175900, "2022", "di karunrung"))