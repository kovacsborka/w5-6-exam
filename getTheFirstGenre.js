let incomingData = {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  }
/* 
function getTheFirstGenre (myMovie){
    return myMovie.genre[0]
}

*/

const getTheFirstGenre = (myMovie) => myMovie.genre[0]           
//paramétert nem KELL zárójelbe tenni egy paraméter esetén  //constba szokás tenni
     

console.log(getTheFirstGenre(incomingData))
