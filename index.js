function captilitalize(){
  let lowerCase = [];
  let upperCase = lowerCase.toUpperCase();

  return upperCase;
}

function reverseString(){
  let object = ["abcdefghijklmnopqrstuvwxyz"];
  return object.reverse().join("");
}

function calculator(x,y){
  const add = x + y;
  const divide = x / y;
  const subtract = x - y;
  const multiple = x * y;
  
  return `${add} ${divide} ${subtract} ${multiple}`;
}

function caesarCipher(){
  const string = ["abcdefghijklmnopqrstuvwxyz"]
  let reverseString = string.reverse().join("");

  console.log(reverseString);
}

function analyzeArray(){
  const object = [1,8,3,4,2,6];
  object == {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  return object;
}