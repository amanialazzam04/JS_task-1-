
const form = document.getElementById("orderForm");

const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const order = document.getElementById("order");

const result = document.getElementById("result");
const savedOrder = document.getElementById("savedOrder");
const savedUsername = document.getElementById("savedUsername");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values from the form
    const usernameValue = username.value.trim();
    const passwordValue = password.value;
    const phoneValue = phone.value.trim();
    const orderValue = order.value;

    
    const usernameRegex = /^\S+$/;
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const phoneRegex = /^07\d{8}$/;

    // Validation results
    const validUsername = usernameRegex.test(usernameValue);
    const validPassword = passwordRegex.test(passwordValue);
    const validPhone = phoneRegex.test(phoneValue);

    // Clear old messages
    result.textContent = "";
    savedOrder.textContent = "";
    savedUsername.textContent = "";

    // Check Username
    if (!validUsername) {
        result.textContent +=
            " Username must not be empty or contain spaces.\n";
    }
     <br></br>

    // Check Password
    if (!validPassword) {
        result.textContent +=
            " Password must be at least 8 characters and contain at least one number.\n";
    }
     <br></br>

    // Check Phone
    if (!validPhone) {
        result.textContent +=
            " Phone must be exactly 10 digits and start with 07.\n";
    }
     <br></br>

    // Check Order
    if (orderValue === "") {
        result.textContent +=
            " Please select an order.\n";
    }
    <br></br>

    // If everything is valid
    if (
        validUsername &&
        validPassword &&
        validPhone &&
        orderValue !== ""
    ) {

        // Display Welcome
        result.textContent = `Welcome, ${usernameValue}`;

        // Save Order in Local Storage
        localStorage.setItem("order", orderValue);

        // Save Username in Session Storage
        sessionStorage.setItem("username", usernameValue);

        // Get saved data
        const savedOrderValue = localStorage.getItem("order");
        const savedUsernameValue = sessionStorage.getItem("username");

        // Display saved Order
        savedOrder.textContent =
            `Saved Order: ${savedOrderValue}`;

        // Display saved Username
        savedUsername.textContent =
            `Saved Username: ${savedUsernameValue}`;
    }
});