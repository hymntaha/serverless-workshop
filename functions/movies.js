const movies = require('../data/movies.json');

export.handler = async () =>{
  return{
    status: 200,
    body: JSON.stringify(movies)
  }
}
