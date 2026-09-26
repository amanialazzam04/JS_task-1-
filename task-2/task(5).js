
// تحديد كافة عناصر التحكم وصندوق النص من الـ DOM
const fontFamilySelect = document.getElementById("fontFamilySelect");
const fontSizeSelect = document.getElementById("fontSizeSelect");
const italicCheck = document.getElementById("italicCheck");
const boldCheck = document.getElementById("boldCheck");
const underlineCheck = document.getElementById("underlineCheck");
const textInput = document.getElementById("textInput");

//  دالة تطبيق التنسيقات عند أي تغيير (onchange)
function applyStyles() {
  
  textInput.style.fontFamily = fontFamilySelect.value;// تعديل شكل النص فورا 
  textInput.style.fontSize = fontSizeSelect.value;

  // (Italic)
  if (italicCheck.checked) {
    textInput.style.fontStyle = "italic";
  } else {
    textInput.style.fontStyle = "normal";
  }

  // (Bold)
  if (boldCheck.checked) {
    textInput.style.fontWeight = "bold";
  } else {
    textInput.style.fontWeight = "normal";
  }

  // (Underline)
  if (underlineCheck.checked) {
    textInput.style.textDecoration = "underline";
  } else {
    textInput.style.textDecoration = "none";
  }
}