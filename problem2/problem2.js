function maximumBuyProduct(money, productPrice) {
  let prod = 0;
  while (money >= Math.min(...productPrice)) {
      let cheapest = Math.min(...productPrice);
      money = money - Math.min(...productPrice);
      
      let temp = cheapest;
      productPrice[productPrice.indexOf(cheapest)] = productPrice[productPrice.length-1];
      productPrice[productPrice.length-1] = cheapest;
      productPrice.pop();

      prod++;
  }

  return prod;
}

module.exports = maximumBuyProduct;
