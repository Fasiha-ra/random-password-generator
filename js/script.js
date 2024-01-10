//Progree Bar
let inputRange = document.querySelector(".input-range");
inputRange.addEventListener("input", ()=>{
let value = inputRange.value;
let number = document.querySelector(".number");
number.innerHTML=value;
})

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const  inputBox = document.getElementById("password-box")
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");
const  rangeSlider = document.getElementById("range-slider")
const randomData = (set)=>{
return set[Math.floor(Math.random()* set.length)];
}
const generatePassword = (password = "")=>{
if(upperInput.checked){
  password += randomData(upperSet);
}
if(lowerInput.checked){
  password += randomData(lowerSet);
}
if(numberInput.checked){
  password += randomData(numberSet);
}
if(symbolInput.checked){
  password += randomData(symbolSet);
}
if(password.length < rangeSlider.value){
  return generatePassword(password);
}
inputBox.innerText = truncateString(password, rangeSlider.value);
console.log(truncateString(password, rangeSlider.value));
}




document.getElementById("btnn").addEventListener("click",
function(){
  generatePassword();
});
function truncateString(str, num){
  if(str.length >num){
    let subStr = str.substring(0, num);
    return subStr;
  }else{
    return str;
  }
}

