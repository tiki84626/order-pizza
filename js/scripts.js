//Back End Logic
function Pizza(pizzaSize, crustType, sauce, topping1, topping2, topping3, topping4) {
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
}


var pizzaSizes = ['sm', 'md', 'lrg'];
var crustTypes = ['thin', 'gf', 'handTossed', 'brooklyn'];
var sauces = ['tomato', 'alfredo', 'garlicWhite', 'marinara'];
var toppings = ['pepperoni', 'sausage', 'beef', 'ham', 'feta', 'olives', 'mushrooms', 'redPeppers', 'chicken', 'onions', 'hotSauce', 'bacon', 'cheddar', 'provolone', 'asiago'];


var meatZa = new Pizza(pizzaSizes[2], crustTypes[1], 'tomato', 'pepperoni', 'sausage', 'beef', 'ham');
// var veggie = new Pizza(lrg, gf, alfredo, feta, olives, mushrooms, redPeppers);
// var buffaloChicken = new Pizza(lrg, handTossed, garlicWhite, chicken, onions, hotSauce, bacon);
// var fourCheese = new Pizza(lrg, brooklyn, marinara, feta, cheddar, provolone, asiago);


Pizza.prototype.subPrice = function () {
  //Substitute pizza size for respective cost
  if (this.pizzaSize === 'sm') {
    this.pizzaSize = 5;
  } else if (this.pizzaSize === 'md') {
    this.pizzaSize = 10;
  } else {
    this.pizzaSize = 15;
  }

  if (this.crustType === 'thin') {
    this.crustType = 2;
  } else if (this.crustType === 'gf') {
    this.crustType = 4;
  } else {
    this.crustType = 3;
  }


  return this;


};



//Front End Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();



  });
});
