// Task 1 - Customer Profile //
let customer = { name: "John Doe", age: 35, email: "john.doe@email.com" }; // declaring an object with customer information

console.log(`Customer Name: ${customer.name}`); // logging the customer name only
console.log(`Customer Age: ${customer.age}`); // logging the customer age only
console.log(`Customer Email: ${customer.email}`); // logging the customer email only


// Task 2 - Order Details //
let order = { orderId: 12345, totalAmount: 150, status: "Processing",
    
    displayOrder() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: ${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

order.displayOrder();