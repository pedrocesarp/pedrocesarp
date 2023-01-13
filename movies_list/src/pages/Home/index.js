import * as S from "./styles";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import fleche from "../../assets/fleche.png";
import Header from "../../components/Header";
import { getDayMovies } from "../../services/getDayMovies";
import { getGenres } from "../../services/getGenres";


function Home () {

    const [page, setPage] = useState([1])
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([]);
    const [filter, setFilter] = useState("");

    const image_path = "https://image.tmdb.org/t/p/w500"


    useEffect (() => { getDayMovies (setMovies, page) }, [page])
    useEffect (() => { getGenres(setGenres)}, []);

    const renderGender = genres && genres.map((genre) => {
        
        if (genre.id === filter) {       
        return (
            <S.GenresCardChoosed key={genre.id}>
                <S.GenresP onClick={() => setFilter(genre.id)}>{genre.name}</S.GenresP>
            </S.GenresCardChoosed>
        );
        } else {
            return (
                <S.GenresCard key = {genre.id} >
                    <S.GenresP onClick={() => setFilter(genre.id)}>{genre.name}</S.GenresP>
                </S.GenresCard>
            );
        }        
    });

    const renderMovies = movies && movies.map ((movie)=>{
        if (filter === "") {
            return (
                <S.Movie key= {movie.id}>
                    <Link to = {`/details/${movie.id}`} > <img src = {`${image_path}${movie.poster_path}`} alt={movie.title}/> </Link>
                    <span>{movie.title}</span>
                </S.Movie>
            );
        } else if (filter === movie.genre_ids[0] || filter === movie.genre_ids[1] || filter === movie.genre_ids[2] || filter === movie.genre_ids[3]) {
            return (
                <S.Movie key= {movie.id}>
                    <Link to = {`/details/${movie.id}`} > <img src = {`${image_path}${movie.poster_path}`} alt={movie.title}/> </Link>
                    <span>{movie.title}</span>
                </S.Movie>
            );
        } else {
            return undefined;
        }

    });


    return (       
       <>          
        <Header/>
        <S.Container>
                <S.FilterGenres>
                    {renderGender}
                </S.FilterGenres>
            <S.MovieList>
                          
               {renderMovies}

            </S.MovieList>

            <S.DivPag>   
                <S.PPag onClick={() => setPage(1)}>1</S.PPag>
                <S.PPag onClick={() => setPage(2)}>2</S.PPag>
                <S.PPag onClick={() => setPage(3)}>3</S.PPag>
                <S.PPag onClick={() => setPage(4)}>4</S.PPag>
                <S.PPag onClick={() => setPage(5)}>5</S.PPag>
                <S.ImgPag src={fleche} alt="seta de paginação" onClick={() => setPage(page + 1)}  />
            </S.DivPag> 
        
        </S.Container>

        </>
    );
    
};

export default Home;

 

     {/* {movies.map(movie=> {
                    return (
                        <Movie key = {movie.id}>
                            <Link to = {`/details/${movie.id}`} > <img src = {`${image_path}${movie.poster_path}`} alt={movie.title}/> </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })} */}