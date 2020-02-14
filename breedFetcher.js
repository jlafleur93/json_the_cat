const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  let catURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(catURL,(error,resp ,body) => {
    if(error){
      callback(error, null)
    }
    const data = JSON.parse(body);
    const breed = data[0]
    if(breed){
      callback(null, breed.description)
    }
  });
};

module.exports = {fetchBreedDescription};