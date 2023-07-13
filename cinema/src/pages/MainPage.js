import React, {Fragment, useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import "../css/main.css"
import "../css/custom.scss"
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../api/movieApi";
import FilmCard from "../components/FilmCard";

const MainPage = () => {
    const dispatch = useDispatch();
    const cinemas =useSelector(state=>state.cinemas.cinemas)
    const [cardArrays,setCardArrays]=useState();
    useEffect(()=>{
        dispatch(getCards())
    },[])
    useEffect(()=>{
        if(cinemas.length!==undefined){
            setCardArrays(cinemas.map((data)=>{
                    return <FilmCard props={data}/>
            }))
        }
    },[cinemas])
    return (
        <Fragment>
            <NavBar/>
            <h1 className="hero-header">Афиша</h1>
            <div  className="afisha">
                <p>сегодня</p>
                <span>в прокате</span>
            </div>
            <div className="d-flex mt-5 cards">
                {cardArrays}
            </div>
        </Fragment>
    );
};

export default MainPage;