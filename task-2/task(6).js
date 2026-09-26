
// التحديد عبرالـ DOM
const myImage = document.getElementById("myImage");

// دالة جعل الصورة دائرة
function makeCircle() {
  myImage.style.borderRadius = "50%";
}

// دالة جعل الصورة مربعة
function makeSquare() {
  myImage.style.borderRadius = "0%";
}