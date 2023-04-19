import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './moviecard.jsx';
import searchIcon from './searchicon.svg';


// OMDB API key: 1ceb494c

const API_URL= 'http://www.omdbapi.com?apikey=1ceb494c'



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchMovies(searchTerm);
        }
    }

    useEffect(() => {
        searchMovies('avengers');

    }, []);

    return ( 
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    placeholder='Search for a movie' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onKeyDown={handleKeyPress}
                />

                <img 
                src={searchIcon} 
                alt="search"
                onClick={() => searchMovies(searchTerm)} 
                />
                
            </div>

            {movies?.length > 0 
                ? (
                    <div className='container' >
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <p>Sorry, no movies found</p>
                    </div>
                )}

        </div>
    );
};



export default App;