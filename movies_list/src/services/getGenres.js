import { Keyapi } from "../config/key";

export const getGenres = (setGenres ) => {

    fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${Keyapi}&language=en-US`)
    .then (response=> response.json())
    .then (data => setGenres (data.genres))
    

  }



 
