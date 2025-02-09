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


// Task 5 - Product Availability //
let inventory = [5, 0, 12, 8, 0]; // declaring an array with different inventories
let inStock = inventory.filter(inventory => inventory > 0); // filtering any inventories with ZERO stock

console.log(`Inventory in Stock: ${inStock}`); // logging the filtered array with in stock inventory


// Task 6 - Revenue Calculations //
let sales = [500, 300, 200, 400]; // declared an array with 4 sales numbers
let totalRevenue = sales.reduce((sum, sales) => sum + sales, 0); // added all the sales together to get revenue

console.log(`Total Revenue: $${totalRevenue}`); // logged the total revenue


// Task 7 - Customer Search //
let customers = ["Alice", "Bob", "Charlie", "David"]; // declaring an array with employee names
let customerFound = customers.find(customer => customer === "Charlie"); // using find method to look for Charlie

console.log(`Customer Found: ${customerFound}`); // logging the results found


// Task 8 - Tax Calculation //
function calculateTax(amount, taxRate) { // starting a function to calculate tax
    let tax = Math.floor(amount * taxRate); // stating the what math the function will do
    return tax; // returning the calculated results
};

console.log(`Calcualted Tax: $${calculateTax(100, .07)}`); // logging the calculated tax


// Task 9 - Discount Applications //
const applyDiscount = function(price, discount) { // starting a function to calculate an applied discount
    let discountedPrice = Math.floor( price - (price * discount)); // stating the math that will be done
    return discountedPrice; // telling it ti return the discounted price
}

console.log(`Discounted Price: $${applyDiscount(100, .10)}`); // logging the discounted price to console