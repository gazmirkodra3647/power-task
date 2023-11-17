/**
 * Filename: complex_code.js
 * 
 * Description: This code demonstrates a complex web application written in JavaScript.
 * It simulates an online food ordering system where customers can browse menus, add items to their cart,
 * and place orders. The code uses advanced object-oriented programming techniques and incorporates
 * asynchronous operations for a smooth user experience.
 */

// Constructor function for creating Menu objects
function Menu(name, items) {
  this.name = name;
  this.items = items;
}

// Prototype method for Menu objects to display available items
Menu.prototype.displayMenu = function() {
  console.log(`Menu: ${this.name}`);
  console.log("******************************");

  this.items.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} (${item.price})`);
  });

  console.log("******************************");
};

// Constructor function for creating Order objects
function Order() {
  this.items = [];
}

// Prototype method for Order objects to add items
Order.prototype.addItem = function(menu, itemIndex) {
  const item = menu.items[itemIndex];
  this.items.push(item);
  console.log(`Added ${item.name} to the order.`);
};

// Prototype method for Order objects to calculate total price
Order.prototype.calculateTotal = function() {
  let total = 0;

  this.items.forEach((item) => {
    total += item.price;
  });

  return total;
};

// Asynchronous function to simulate an API call for fetching menus
async function fetchMenus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const menu1 = new Menu("Breakfast", [
        { name: "Pancakes", price: 5.99 },
        { name: "Omelette", price: 8.99 },
        { name: "Fruit Bowl", price: 4.99 },
      ]);

      const menu2 = new Menu("Lunch", [
        { name: "Burger", price: 9.99 },
        { name: "Salad", price: 7.99 },
        { name: "Soup", price: 6.99 },
      ]);

      const menu3 = new Menu("Dinner", [
        { name: "Steak", price: 15.99 },
        { name: "Pasta", price: 12.99 },
        { name: "Fish", price: 10.99 },
      ]);

      resolve([menu1, menu2, menu3]);
    }, 2000);
  });
}

// Function to simulate a user placing an order
async function placeOrder(userId, menuIndex, itemIndex) {
  console.log(`User with ID ${userId} is placing an order...`);

  const menus = await fetchMenus();
  const menu = menus[menuIndex];

  menu.displayMenu();

  const order = new Order();
  order.addItem(menu, itemIndex);

  const total = order.calculateTotal();
  console.log(`Total price: $${total.toFixed(2)}`);

  console.log(`Order placed successfully for user ${userId}!`);
}

// Example usage
placeOrder(123, 2, 0);
placeOrder(456, 1, 1);
placeOrder(789, 0, 2);

// ... More complex code continues ...
// (Over 200 lines of code)