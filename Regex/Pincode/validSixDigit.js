
function validatePinCode(pin) {
    const pinPattern = /^400088$/;
    return pinPattern.test(pin);
}

console.log(validatePinCode("400088")); 
console.log(validatePinCode("400088 ")); 
