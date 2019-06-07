const restaurant = {
  name: "Bob's Burgers",
  placeOrder: function (meal) {
    this.orders.push(meal)
  },
  orders: [],
  allOrders: function () {
   return(this.orders)
  }
}
console.log('orders', restaurant.orders)


const chickenComboMeal = {
  sandwichType: "Chicken",
  fries: true,
  drinkSize: "medium"
}

const cheeseBurgerMeal = {
  sandwichType: "Burger",
  fries: false,
  drinkSize: "large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(cheeseBurgerMeal)

// Invoke the function to return the list of all orders
restaurant.allOrders()

// Output all orders to the console using console.table()
console.table(restaurant.allOrders())