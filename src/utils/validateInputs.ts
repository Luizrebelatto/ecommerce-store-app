export function validatePrice(value) {
    const num = Number(value);
    
    if (isNaN(num)) {
      return false;
    }
    
    const str = String(num);
    
    if (!str.includes('.')) {
      return true;
    }

    const parteDecimal = str.split('.')[1];
    return parteDecimal.length <= 2;
}

export function validateDescription(value) {
    if(value.length < 20) {
        return true
    }
    return false
}

export function validateTitle(value) {
    if (!value) return false;
    
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      const code = char.charCodeAt(0);
      
      const isLetter = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
      
      const isNumber = code >= 48 && code <= 57;
      
      const isSpace = code === 32;
      
      if (!isLetter && !isNumber && !isSpace) {
        return false;
      }
    }
    
    return true;
}