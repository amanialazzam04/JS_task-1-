
// 1. التحديد عبر الـ DOM
const myImage = document.getElementById("myImage");

// 2. دالة جعل الصورة دائرة
function makeCircle() {
  myImage.style.borderRadius = "50%";
}

// 3. دالة جعل الصورة مربعة
function makeSquare() {
  myImage.style.borderRadius = "0%";
}