/* for my future referencing,
    RegExp
  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 

let pin = "12345"


    
const isValid = (pin) =>  /^(\d{4}|^\d{6})$/.test(pin)
            

console.log(pin)
console.log(isValid(pin))
