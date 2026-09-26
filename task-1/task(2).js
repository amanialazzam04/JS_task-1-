


const menu = [
  { name: "Burger", price: 8, category: "Fast Food", available: true },
  { name: "Pizza", price: 8, category: "Italian", available: false },
  { name: "Pasta", price: 7, category: "Italian", available: true },
  { name: "Salad", price: 4, category: "Healthy", available: true },
  { name: "Sushi", price: 12, category: "Japanese", available: false }
];


function showMenu() {
  document.write("<h2>Menu</h2><ul>");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].available === false) {

    }
    document.write("<li>" + menu[i].name + " - $" + menu[i].price + "</li>");
  }
  document.write("</ul><hr>");
}


function takeOrder() {
  let selectedFood = null;

  while (selectedFood === null) {
    let choice = prompt("Enter the name of the meal you want to order ( Pasta)");


    if (choice === null) {
      alert("The order has been canceled");
      return;
    }


    let cleanChoice = choice.trim().toLowerCase();


    for (let i = 0; i < menu.length; i++) {
      let menuItemName = menu[i].name.toLowerCase();

      if (menuItemName === cleanChoice) {
        if (menu[i].available === true) {
          selectedFood = menu[i]; 
          break; 
          alert("Sorry, this meal is not available right now!");
          break; 
        }
      }
    }

    
    if (selectedFood === null) {
      alert("The meal is not on the menu");
    }
  }

  
  let quantity = parseInt(prompt("How many meals do you want from" + selectedFood.name + "?"));


  if (isNaN(quantity) || quantity <= 0) {
    quantity = 1;
  }

  let totalPrice = selectedFood.price * quantity;

  
  document.write("<h3>Order details:</h3>");
  for (let key in selectedFood) {
    document.write("<br>" + key + ":</br> " + selectedFood[key] + "<br>");
  }

  document.write("<br><b>Quantity:</br> " + quantity);
  document.write("<h3>Total: $" + totalPrice + "</h3>");
}


showMenu();
takeOrder();