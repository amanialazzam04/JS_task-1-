
const form = document.getElementById("orderForm");

const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const order = document.getElementById("order");

const result = document.getElementById("result");
const savedOrder = document.getElementById("savedOrder");
const savedUsername = document.getElementById("savedUsername");

form.addEventListener("submit", function (event) {

    event.preventDefault();//انه لا تتصرف بطريقه العاديه و خلي الجافا تتعامل معها 

    // Get values from the form
    const usernameValue = username.value.trim();//تشيل المسافه من البدايه للنهايه, المسافه الي بنص بتخليها عادي 
    const passwordValue = password.value;
    const phoneValue = phone.value.trim();
    const orderValue = order.value;

    
    const usernameRegex = /^\S+$/;
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const phoneRegex = /^07\d{8}$/;

    // Validation results
    const validUsername = usernameRegex.test(usernameValue);//بتفحص هل القيمه مطابق للRegex 
    const validPassword = passwordRegex.test(passwordValue);
    const validPhone = phoneRegex.test(phoneValue);

    // Clear old messages
    result.textContent = "";
    savedOrder.textContent = "";//مسح الرسائل القديمه 
    savedUsername.textContent = "";

    // Check Username
    if (!validUsername) {
        result.textContent +=
            " Username must not be empty or contain spaces.\n";
    }
   

    // Check Password
    if (!validPassword) {
        result.textContent += // اضف النص للنص الموجود
            " Password must be at least 8 characters and contain at least one number.\n";
    }
    

    // Check Phone
    if (!validPhone) {
        result.textContent +=
            " Phone must be exactly 10 digits and start with 07.\n";
    }
    

    // Check Order
    if (orderValue === "") {
        result.textContent +=
            " Please select an order.\n";
    }
  

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