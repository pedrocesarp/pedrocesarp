import { Container,MovieList, Movie } from "./styles";


function Home () {

    const movies = [
        {   
            id: 1,
            title: "Tomb Raider",
            image_url: "https://img.elo7.com.br/product/zoom/2692A3C/big-poster-filme-lara-croft-tomb-raider-2018-lo01-90x60-cm-lara-croft.jpg"

        },
        {
            id: 2,
            title: "Tomb",
            image_url: "https://img.elo7.com.br/product/zoom/2692A3C/big-poster-filme-lara-croft-tomb-raider-2018-lo01-90x60-cm-lara-croft.jpg"

        },
        {
            id: 3,
            title: "Tomb Raider: A Origem",
            image_url: "https://img.elo7.com.br/product/zoom/2692A3C/big-poster-filme-lara-croft-tomb-raider-2018-lo01-90x60-cm-lara-croft.jpg"

        },

    ]

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                
                {movies.map(movie=> {
                    return (
                        <Movie key = {movie.id}>
                            <a href="https://www.google.com/"><img src = {movie.image_url} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        
        </Container>
    )
    
}

export default Home;