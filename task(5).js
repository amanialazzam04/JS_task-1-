
// 1. تحديد كافة عناصر التحكم وصندوق النص من الـ DOM
const fontFamilySelect = document.getElementById("fontFamilySelect");
const fontSizeSelect = document.getElementById("fontSizeSelect");
const italicCheck = document.getElementById("italicCheck");
const boldCheck = document.getElementById("boldCheck");
const underlineCheck = document.getElementById("underlineCheck");
const textInput = document.getElementById("textInput");

// 2. دالة تطبيق التنسيقات عند أي تغيير (onchange)
function applyStyles() {
  // تغيير نوع وحجم الخط بناءً على الخيار المحدد
  textInput.style.fontFamily = fontFamilySelect.value;
  textInput.style.fontSize = fontSizeSelect.value;

  // فحص حالة مربع المائل (Italic)
  if (italicCheck.checked) {
    textInput.style.fontStyle = "italic";
  } else {
    textInput.style.fontStyle = "normal";
  }

  // فحص حالة مربع العريض (Bold)
  if (boldCheck.checked) {
    textInput.style.fontWeight = "bold";
  } else {
    textInput.style.fontWeight = "normal";
  }

  // فحص حالة مربع التسطير (Underline)
  if (underlineCheck.checked) {
    textInput.style.textDecoration = "underline";
  } else {
    textInput.style.textDecoration = "none";
  }
}