import React from 'react';
import './HomeScreen.css';
import NavBar from './NavBar';
import Banner from './Banner';
import Row from './Row';
import requests from './Request';


function HomeScreen() {
    return (
        <div className='homeScreen'>

            <NavBar/>

            <Banner/>

            <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow ={true}
            />

            <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            />

            <Row
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
            />

            <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionM}
            />

            <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            />

            <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            />

            <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            />

            <Row
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default HomeScreen;
