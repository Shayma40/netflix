import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                setError(null);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        console.log('Movies:', movies);
    }, [movies]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // You can use the YouTube video key directly from the TMDB API
            console.log('Selected Movie:', movie);
            setTrailerUrl(`https://www.youtube.com/watch?v=${movie.key}`);
        }
    };

    // Add a condition to render an error message
    if (error) {
        return <div className="error-message">{error}</div>;
    }

    // Add a condition to render a loading indicator
    if (loading) {
        return <div className="loading-indicator">Loading...</div>;
    }

    return (
        <div className='Row'>
            <h2>{title}</h2>

            <div className='Row__posters'>
                {movies && movies.map((movie) => (
                    <img
                        className={`Row__poster ${isLargeRow && "Row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
