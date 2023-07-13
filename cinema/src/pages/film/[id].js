import React, {Fragment, useEffect, useState} from 'react';
import NavBar from "../../components/NavBar";
import Mock from "../../img/Rectangle.jpg"
import StarRatings from "react-star-ratings/build/star-ratings";
import {Button} from "react-bootstrap";
import "../../css/film.css"
import "../../css/custom.scss"
import {useDispatch, useSelector} from "react-redux";
import {getConcertFilm, getFilm} from "../../api/movieApi";
import {useParams} from "react-router-dom";

const Id = () => {
    const [description, setDescription] = useState()
    const film = useSelector(state => state.cinemas.concertFilm)
    const dispatch = useDispatch()
    const {id} =useParams()
    const [isClicked,setIsClicked]=useState(false)

    function limitTextLength() {
        if (film.description.length <= 200) {
            return film.description;
        } else {
            return film.description.substring(0, 200) + "...";
        }
    }
    const setClickedTrue=()=>{
        setIsClicked(true)
    }
    const setClickedFalse=()=>{
        setIsClicked(false)
    }
    const openFullText=()=>{
        setDescription(film.description)
    }
    useEffect(()=>{
        dispatch(getConcertFilm(id))
    },[])
    useEffect(()=>{
        if(film.description!==undefined){
            setDescription(limitTextLength())
        }
    },[dispatch,film])
    return (
        <Fragment>
            <NavBar/>
            {film.ageRating!==undefined &&
            <div className="d-flex film-info justify-content-center">
                <figure className="post-img">
                    <img src={`https://shift-backend.onrender.com${film.img}`} alt="Постер фильма" height="376px" width="256px"/>
                    <figcaption className="poster-description">
                        <span>В прокате</span> <br/>
                        с 1 июня по 14 июня
                    </figcaption>
                </figure>
                <div className="ms-4 info">
                    <h1 className="film-name">{film.name} ({film.ageRating})</h1>
                    <span className="director">режиссер: {film.directors[0].fullName}</span>
                    <span className="genre">{film.genres[0]}</span>
                    <span className="stars">
                        <StarRatings
                            rating={4}
                            starRatedColor="#585858"
                            starDimension="20px"
                            starSpacing="3px"
                            starEmptyColor="#FFF6F0"
                            numberOfStars={10}
                            name='rating'
                        />
                    </span>
                    <span className="raiting">Kinopoisk - {film.userRatings.kinopoisk}</span>
                    {film.description.length <= 200 && <p className=" description">
                        {description}
                    </p>}
                    {film.description.length > 200 && <p className=" description">
                        {!isClicked && <span>{description} <Button className="custom-button-description btn-light" onClick={()=>{openFullText(); setClickedTrue()}}>раскрыть</Button></span>}
                        {isClicked && <span>{description} <Button className="custom-button-description btn-light" onClick={()=>{setDescription(limitTextLength()); setClickedFalse()}}>скрыть</Button></span>}
                    </p>}
                </div>
            </div>}
        </Fragment>
    );
};

    export default Id;