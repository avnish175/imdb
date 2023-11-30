import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MovieList from "../../components/movieList/movieList";
import Movie from "../movieDetail/movieDetail";
const Home=()=>{
    const [popularMovies,setPopularMovies]=useState([]);
    useEffect(()=>{
      fetchPopular();
    },[]);
  
    const fetchPopular=()=>{
      Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c166edd9517eb2c705665d2d80beb344&language=en-US").then((res)=>{
        console.log(res.data.results);
        setPopularMovies(res.data.results);
      });
    }; 


    return(
        <>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false} 
            >
                {popularMovies.map(movie=>(
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average :""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                ))}

            </Carousel>
            <MovieList/>

        </div>
        </>
    );
};
export default Home;