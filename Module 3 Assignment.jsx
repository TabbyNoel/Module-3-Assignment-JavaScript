// Sample variables
let discountCode = 3; // Example discount code
let paymentAmount = 50; // Example payment amount
let totalCost = 45; // Example total cost of goods
let cashPayment = 50; // Example cash payment made by customer

// Function to check discount code
function checkDiscountCode(code) {
    if (code < 0 || code > 5) {
        throw "Invalid discount code.";
    }
    // Apply discount logic
    console.log("Discount code is valid.");
}

// Function to validate payment
function validatePayment(payment, cost) {
    if (payment < cost) {
        throw "Insufficient payment.";
    }
    // Process payment logic
    console.log("Payment is sufficient.");
}

// Function to check if total cost is a number
function checkTotalCost(cost) {
    if (isNaN(cost)) {
        throw "Total cost must be a number.";
    }
    // Additional logic if needed
    console.log("Total cost is a valid number.");
}

// Function to validate cash payment
function validateCashPayment(payment) {
    if (isNaN(payment)) {
        throw "Payment must be a number.";
    }
    // Additional logic if needed
    console.log("Cash payment is a valid number.");
}

// Using the functions with try-catch blocks
try {
    checkDiscountCode(discountCode);
} catch (error) {
    alert(error);
}

try {
    validatePayment(paymentAmount, totalCost);
} catch (error) {
    alert(error);
}

try {
    checkTotalCost(totalCost);
} catch (error) {
    alert(error);
}

try {
    validateCashPayment(cashPayment);
} catch (error) {
    alert(error);
}
