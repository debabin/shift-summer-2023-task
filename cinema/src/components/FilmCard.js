import React, {Fragment} from 'react';
import {Button, Card} from "react-bootstrap";
import Mack from "../img/Rectangle.jpg";
import StarRatings from "react-star-ratings/build/star-ratings";
import {useNavigate} from "react-router-dom";

const FilmCard = (props) => {
    const navigate =useNavigate()
    return (
        <Fragment>
            <div className="d-grid">
                <div className="cinema-title"><strong>{props.props.genres[0]}</strong></div>
                <Card className="film-card" style={{ width: "18rem"}}>
                    <Card.Img variant="top" src={`https://shift-backend.onrender.com${props.props.img}`} width="auto" height="400" />
                    <Card.Body>
                        <Card.Title className="film-title">{props.name}</Card.Title>
                        <Card.Text className="eng-film-title ">
                            <div className="d-grid">
                                {props.props.originalName}
                                <div>
                                    <StarRatings
                                        rating={parseInt(props.props.userRatings.kinopoisk)}
                                        starRatedColor="#585858"
                                        starDimension="20px"
                                        starSpacing="3px"
                                        starEmptyColor="#FFF6F0"
                                        numberOfStars={10}
                                        name='rating'
                                    />
                                    <span className="cinema-rainig">Кинопоиск - {props.props.userRatings.kinopoisk}</span>
                                </div>
                            </div>
                        </Card.Text>
                        <Button className="card-button" onClick={()=>{navigate('/film/'+props.props.id)}}>Подробнее</Button>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    );
};

export default FilmCard;