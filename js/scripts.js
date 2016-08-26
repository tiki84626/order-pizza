//Back End Logic
function Pizza(pizzaSize, crustType, sauce, topping1, topping2, topping3) {
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

//Pizza Variables
var pizzaSizes = ['sm', 'md', 'lrg'];
var crustTypes = ['thin', 'gf', 'handTossed', 'brooklyn'];
var sauces = ['tomato', 'alfredo', 'garlicWhite', 'marinara'];
var meats = ['pepperoni', 'sausage', 'beef', 'ham', 'chicken', 'bacon'];
var cheeses = ['feta', 'cheddar', 'provolone', 'asiago'];
var veggies = ['olives', 'mushrooms', 'redPeppers', 'onions']

//Premade Pizzas
var meatZa = new Pizza(pizzaSizes[0], crustTypes[0], sauces[0], meats[0], meats[1], meats[2]);
var veggie = new Pizza(pizzaSizes[1], crustTypes[1], sauces[1], cheeses[0], veggies[0], veggies[1]);
var chickenBacon = new Pizza(pizzaSizes[2], crustTypes[2], sauces[2], meats[4], veggies[3], meats[5]);
var threeCheese = new Pizza(pizzaSizes[2], crustTypes[3], sauces[3], cheeses[0], cheeses[1], cheeses[2]);

//Calculate Total Price
Pizza.prototype.price = function() {
  return this.pizzaSize + this.crustType + this.sauce + this.topping1 + this.topping2 + this.topping3
}

Pizza.prototype.subPrice = function() {
  //Substitute pizza size for respective cost
  if (this.pizzaSize === 'sm') {
    this.pizzaSize = 5;
  } else if (this.pizzaSize === 'md') {
    this.pizzaSize = 10;
  } else {
    this.pizzaSize = 15;
  }
  //Substitute pizza crust for respective cost
  if (this.crustType === 'thin') {
    this.crustType = 2;
  } else if (this.crustType === 'gf') {
    this.crustType = 4;
  } else {
    this.crustType = 3;
  }
  //Substitute pizza crust for respective cost
  if (this.sauce === 'tomato') {
    this.sauce = 1;
  } else if (this.sauce === 'alfredo') {
    this.sauce = 3;
  } else if (this.sauce === 'garlicWhite') {
    this.sauce = 5;
  } else {
    this.sauce = 2;
  }
  //Substitute topping1 for its respective cost
  if (meats.indexOf(this.topping1) != -1) {
    this.topping1 = 3;
  } else if (cheeses.indexOf(this.topping1) != -1) {
    this.topping1 = 2;
  } else {
    this.topping1 = 1;
  }
  //Substitute topping2 for its respective cost
  if (meats.indexOf(this.topping2) != -1) {
    this.topping2 = 3;
  } else if (cheeses.indexOf(this.topping2) != -1) {
    this.topping2 = 2;
  } else {
    this.topping2 = 1;
  }
  //Substitute topping3 for its respective cost
  if (meats.indexOf(this.topping3) != -1) {
    this.topping3 = 3;
  } else if (cheeses.indexOf(this.topping3) != -1) {
    this.topping3 = 2;
  } else {
    this.topping3 = 1;
  }

  return this;
};



//Front End Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


  });

  $("#special-1").click(function() {

    $("div#meatza-cost").append("<h2>" + "$" + movieTimeDis(newTicket) + ".00" + "</h2>");

    $("#meatza-cost").text($((meatZa.subPrice()).price()));
    $("#custom-pizza").hide();

  });

});
