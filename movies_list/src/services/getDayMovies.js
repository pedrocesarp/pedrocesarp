import { Keyapi } from "../config/key";

export const getDayMovies = (setMovies, page ) => {

    fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${Keyapi}&language=en-US&page=${page}`)
    .then (response=> response.json())
    .then (data => setMovies (data.results))

}