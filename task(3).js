
function reverseNumber(num) {
  
  let reversed = parseInt(num.toString().split('').reverse().join(''));
  return reversed;
}


let x = 532443;
console.log(reverseNumber(x));



for (let i = 0; i <= 15; i++) {
  

  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
  
}

function insertDashes(num) {
  
  let str = num.toString();
  

  let result = "";

  
  for (let i = 0; i < str.length; i++) {
    

    let currentNum = parseInt(str[i]);
    
    
    let nextNum = parseInt(str[i + 1]);

    
    result += str[i];

    
    if (currentNum % 2 === 0 && nextNum % 2 === 0) {
      result += "-"; 
    }
  }

  return result;
}

let input = "025468";
console.log(insertDashes(input)); 


function Agechecker(age) {
    if (age >= 18) {
    console.log("The user is Adult");
    } else {
    console.log("The user is Minor");
  }
}
Agechecker(20); 
Agechecker(15);