//tutorial #14, .map
//tutorial #15, .filter
//tutorial #16, .reduce

const simpleShoppingCart = [10, 20, 25, 5, 10];

const shoppingCart = [
  {
    sku: "1234",
    price: 10,
    type: "t-shirt"
  },
  {
    sku: "1233334",
    price: 16,
    type: "tutorial"
  },
  {
    sku: "12111134",
    price: 30,
    type: "tutorial"
  }
];

// .map
// super useful. it takes each array item and allows something to happen to it
// iterates over every item, performs a function and returns an array
// array has the same number of items

const discountCart = shoppingCart.map((value) => {
  // return 'hi'; //iterates and changes every item to hi
  // return value.price * .75; //applies a 25% discount
  return {
    ...value, 
    salePrice: value.price * .75
  };
});

//same thing as above, but as a one liner
// const discountCart = simpleShoppingCart.map(value => value *.75);

//.filter
// iterates over an array, and determines what value gets filtered
// returns a new array. the new array will have the same, or less, amount of items

const filteredCart = shoppingCart.filter(({type}) => {
  return type == 'tutorial';
}).filter(product => { //this filters the filtered list
  return product.price > 20;
}).map(product => { //takes result and adds an extra property
  return {
    ...product,
    extra: product.price * 10
  }
});

// operates just like the code above, just in one line with destructuring
// const filteredCart = shoppingCart.filter(({type}) => type == 'tutorial');

// .reduce
// outputs a single value, ususaly used to calculate things with numbers

const total = simpleShoppingCart.reduce((total, currentPrice) => {
  return total + currentPrice;
});

console.log(simpleShoppingCart);
console.log(total);