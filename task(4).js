

const nameInput = document.getElementById("customerName");

const selectElements = document.getElementsByTagName("select");

const foodSelect = selectElements[0];

const resultDiv = document.querySelector("#resultText");

const container = document.getElementsByClassName("card-container");

const submitButton = document.getElementById("submitBtn")


function displayOrder (){

    const name = nameInput.value.trim();

    const order = foodSelect.value;

    if( name ===""){
        resultDiv.style.color ="red";
        resultDiv.textContent = " Please enter your name !";
    }
    else 
    {
        resultDiv.style.color = "#28a745";
        resultDiv.textContent = "Hello"+ name + " your order is ";
    }
}
    function changeColor() {
  submitButton.style.backgroundColor = "#218838";
}

// السطر 16: دالة إعادة لون الزر للأزرق الأصلي عند إبعاد الماوس (onmouseout)
function resetColor() {
  submitButton.style.backgroundColor = "#007bff";
}









