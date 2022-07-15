var  purchases={
    fruits: "Apple",
    price:30.00
}
function calculateFruitCost(fruitName,quantity){
    let cost = purchases.price
    console.log(`${quantity} ${fruitName} for ${cost * quantity} KES`);
}
calculateFruitCost("Apples",4)



class KioskCalc {
    constructor(fruit, quantity) {
       this.fruit = fruit;
       this.quantity =quantity;
       this.fruitPriceList={"Orange":30,"Mangoes":15,"Avocado":40};
       this.getTotalCost=function(){
        return `${quantity} ${fruit} for KES ${quantity* this.fruitPriceList.Orange} `
      }
    }
  }
  var kioskCalc = new KioskCalc("Oranges",5);
  console.log(kioskCalc.getTotalCost());













