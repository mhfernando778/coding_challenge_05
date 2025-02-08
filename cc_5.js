// Task 1 - Customer Profile //
let customer = { name: "John Doe", age: 35, email: "john.doe@email.com" }; // declaring an object with customer information

console.log(`Customer Name: ${customer.name}`); // logging the customer name only
console.log(`Customer Age: ${customer.age}`); // logging the customer age only
console.log(`Customer Email: ${customer.email}`); // logging the customer email only


// Task 2 - Order Details //
let order = { orderId: 12345, totalAmount: 150, status: "Processing", // declared an array with order details
    
    displayOrder() { // starting the use of a method
        console.log(`Order ID: ${this.orderId}`); // logging the order ID
        console.log(`Total Amount: ${this.totalAmount}`); // logging the total amount
        console.log(`Status: ${this.status}`); // logging the status
    }
};

order.displayOrder(); // calling the method


// Task 3 - Shopping Cart //
let cartItems = ["Laptop", "Dress", "Toy"]; // declaring an array with three product names

cartItems.push("PS5"); // adding PS5 to the array
cartItems.pop(); // removing the last item of the array
cartItems.unshift("Table"); // adding an item to the front of the array
cartItems.shift(); // removing the first item of the array

console.log(`Final Array: ${cartItems}`); // logging the final array of products


// Task 4 - Price Adjustments //
let prices = [100, 200, 300]; // declaring an array with prices
console.log(`Prices: ${prices}`); // logging the initial array

let discountedPrices = prices.map(price => price * .90); // applying a 10% discount to the prices
console.log(`Discounted Prices: ${discountedPrices}`); // logging the discounted prices
