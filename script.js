// Part 2: JavaScript Integration Practice

// Function to log messages to the console (for debugging)
const logMessage = (message) => {
    console.log(`Debug Message: ${message}`);
};

// Function to demonstrate try-catch error handling
const divideNumbers = (a, b) => {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
    }
};


// Function to update content of an element with error handling
const updateContent = (elementId, newContent) => {
    try {
        const element = document.querySelector(`#${elementId}`);
        if (!element) {
            throw new Error(`Element with ID ${elementId} not found`);
        }
        element.textContent = newContent;
    } catch (error) {
        console.error('DOM manipulation error:', error.message);
    }
};

// Event listeners for interactive debugging
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#logBtn").addEventListener("click", () => {
        logMessage("Button Clicked!");
    });

    document.querySelector("#divideBtn").addEventListener("click", () => {
        const num1 = parseFloat(document.querySelector("#num1").value);
        const num2 = parseFloat(document.querySelector("#num2").value);
        const result = divideNumbers(num1, num2);
        document.querySelector("#result").textContent = result !== null ? `Result: ${result}` : "Error in division!";
    });

    document.querySelector("#updateBtn").addEventListener("click", () => {
        updateContent("content", "Updated Content!");
    });
});
