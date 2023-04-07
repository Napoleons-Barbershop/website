export const sanitizeEmail = (email) => {
  if(email) {
    let result = '';
    for(let i=0; i<email.length; i++) {
      let char = email[i];
      if(char === '.') {
        result += 'dot'
      } else if(char === '#') {
        result += 'hashtag'
      } else if(char === '$') {
        result += 'dollar'
      } else if(char === '[') {
        result += 'left-square-bracket'
      } else if(char === ']') {
        result += 'right-square-bracket'
      } else {
        result += char
      }
    }
  
    return result;
  } else {
    return null;
  }
}

export const formatDate = (dateInMs) => {
  if(dateInMs) {
    return new Date(parseInt(dateInMs)).toLocaleDateString('id');
  }
  return 'N/A'
}