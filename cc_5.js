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
let cartItems = ["Laptop", "Dress", "Toy"];

cartItems.push("PS5");
cartItems.pop();
cartItems.unshift("Table");
cartItems.shift();

console.log(`Final Array: ${cartItems}`);
