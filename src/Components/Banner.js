import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Request';
import axios from 'axios';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try{
            const request = await axios.get(requests.fetchNetflixOriginals);
            const results = request.data.results;

            if (results && results.length > 0) {
                const randomIndex = Math.floor(Math.random() * results.length);
                setMovie(results[randomIndex]);
            }
            return request;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }
        fetchData();
    }, []);

    console.log(movie);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return <header 
    className='Banner' 
    style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}
    >

        <div className='Banner_contents'>
            <h1 className='Banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className='Banner_buttons'>
                <button className='Banner_button'>Play</button>
                <button className='Banner_button'>My List</button>
            </div>

            <h1 className="Banner_description">
                {truncate(movie?.overview, 150 )}
            </h1>

        </div>

        <div className='Banner_fadeBottom'/>

    </header>
}

export default Banner;