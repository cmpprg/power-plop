export default (collection) => {
  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length
  } else if(typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length
  } else {
    throw Error("Handlebars: length helper's argument must be of type [object, array, string]")
  }
};