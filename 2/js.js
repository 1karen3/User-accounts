const products = [
    {name: 'Apple', price: 20},
    {name: 'Cherry', price: 10},
    {name: 'Banana', price: 15},
    {name: 'Orange', price: 25},
    {name: 'Lemon', price: 17},
    {name: 'Pear', price: 30}
  ];
  
  const GRN_PER_DOLLAR = 41;
  const DISCOUNT_START_FROM = 10000;
  const DISCOUNT = 20;
  
  function showProducts () {
    for (let prodId = 0; prodId < products.length; prodId++) {
        console.log(`${prodId + 1} ${products[prodId].name} ${products[prodId].price}`);
      }
    }
  function conditionNum(num) {
    return num < 1 || num > products.length;
  }
  function conditionCount(num) {
    return num <= 0;
  }
  function answerClient(textAnswer, condition) {
    let answer;
    do {
      answer = Number(prompt(textAnswer));
      if (answer === null) {
        break;
      }
    } while (condition(answer))
    return answer;
  }
  showProducts();
  const product = products[answerClient('Write product number:', conditionNum) - 1];
  console.log(product);
  const prodCount = answerClient('Write product count:', conditionCount);
  
  const totalProdPrice = prodCount * product.price;
  console.log(`Total price: $${totalProdPrice}`);
  
  if (totalProdPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
    console.log(`Congrats, you get a discount ${DISCOUNT}%`);
    console.log(`Your total price is: ${totalProdPrice * (100 - DISCOUNT) / 100}`);
  }

