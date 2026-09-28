
let Order = document.getElementById("Order");

fetch("menu.json")
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            Order.innerHTML += `
                <p>Name: ${data[i].name}</p>
                <p>Price: ${data[i].price}</p>
                <p>Availability: ${data[i].availability}</p>
            `;
        }

    });
    localStorage.setItem("menu", JSON.stringify(data));