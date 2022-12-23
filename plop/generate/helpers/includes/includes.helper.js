export default (array, element) => {
  if (Array.isArray(array)){
    return array.includes(element)
  } else {
    throw Error("Handlebars: includes helper's arguemnts are (array, searchElement)")
  }
};