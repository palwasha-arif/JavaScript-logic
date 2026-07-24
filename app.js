console.log("=== Task 1: Arrow Calculator ===");


const calculateTotal = (price, taxPercentage, discountAmount) => {
    const taxValue = price * (taxPercentage / 100);
    const finalPrice = price + taxValue - discountAmount;
    return finalPrice;
};


const result = calculateTotal(100, 10, 15);
console.log(`Final calculated price is: ${result}`);




console.log("=== Task 2: Access Guards ===");


const isLoggedIn = true;
const hasActiveSubscription = false;
const guestToken = "guest123";


// Correct logical condition
if ((isLoggedIn && hasActiveSubscription) || guestToken) {
    console.log("Access Granted!");
} else {
    console.log("Access Denied!");
}


console.log("=== Task 3: Day Planner ===");


const dayOfWeek = "Wednesday";


switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
        console.log("Focus: Core JavaScript Study");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Focus: Practical Code Labs");
        break;
    case "Friday":
        console.log("Focus: Assignment Submission Review");
        break;
    default:
        console.log("Rest & Recovery Day");
}


console.log("=== Task 4: Array Scanner ===");


const numbers = [12, 45, 7, 22, 19, 88, 3, 50, 41, 10];


for (const num of numbers) {
    if (num % 2 === 0) {
        console.log(`Discovered even number: ${num}`);
    }
}

