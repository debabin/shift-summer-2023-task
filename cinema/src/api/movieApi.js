import axios from "axios";
import {getCinemas, getFilm} from "../store/cinemasReducer";
import {BASE_URL} from "../utils/const";

export const getCards = ()=>{
    return async dispatch =>{
        try {
            const response = await axios.get(BASE_URL + `cinema/today`)
           dispatch(getCinemas(response))
        }
        catch (e){
            alert("Ошибка загрузки фильмов")
        }
    }
}

export const getConcertFilm = (id)=>{
    return async dispatch =>{
        try {
            const response = await axios.get(BASE_URL + `cinema/film/${id}`)
            dispatch(getFilm(response))
        }
        catch (e){
            alert("Ошибка загрузки фильмов")
        }
    }
}