//tutorial #14, JS array methods

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

const discountCart = simpleShoppingCart.map((value) => {
    // return 'hi'; //iterates and changes every item to hi
    // return value.price * .75; //applies a 25% discount
    return {
        ...value,
        salePrice: value.price * .75
    };
});

//same thing as above, but as a one liner
// const discountCart = simpleShoppingCart.map(value => value *.75);

console.log(shoppingCart);
console.log(discountCart);