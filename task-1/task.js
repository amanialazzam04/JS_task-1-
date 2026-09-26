
let nameUser = prompt("Enter the name");
let Age = prompt("Enter the Age");
let Gender = prompt("Enter your gender (male / female)");

Age = Number(Age);

if (Gender === "male") {
    alert("Welcome Mr. " + nameUser);
} else if (Gender === "female") {
    alert("Welcome Ms. " + nameUser);
} else {
    alert("Welcome " + nameUser);
}


let order = "";
let isAvailable = false;

if (Age < 16) {
    alert("You are not eligible to place an order");
} else {
    
    order = prompt("Choose an order (Burger, Shawarma, Zinger):");

    if (order === "Burger" || order === "Shawarma" || order === "Zinger") {
        isAvailable = true;
    } else {
        isAvailable = false;
    }

    if (isAvailable) {
        alert("Your order is being prepared");
    } else {
        alert("Invalid order. Please try again");
    }
}

let orderStatus = "";

if (Age >= 18 && isAvailable) {
    orderStatus = "Order confirmed";
    alert(orderStatus);
} else if (Age < 18 || !isAvailable) {
    orderStatus = "Order requires verification";
    alert(orderStatus);
}


console.log("Customer Name: " + nameUser);
console.log("Age: " + Age);
console.log("Gender: " + Gender);
console.log("Order: " + order);
console.log("Order Status: " + orderStatus);


document.write("Name: " + nameUser + "<br>");
document.write("Age: " + Age + "<br>");
document.write("Gender: " + Gender + "<br>");
document.write("Order: " + order + "<br>");
document.write("Order Status: " + orderStatus + "<br>");