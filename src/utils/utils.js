export const countOccurrences = (arr, obj) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === obj._id) {
        count++;
      }
    }
    return count;
  }

export const getCounter = (data, obj) => {
    return obj.type === 'bun' ? (obj._id === data.bun._id ? 2 : 0) : countOccurrences(data.ingredients, obj)
}

export const validateForm = (form) => {
  for (let key in form) {
      const value = form[key];
      if (typeof value !== 'string' || value.trim() === '') {
          return false;
      }
  }
  return true;
}
