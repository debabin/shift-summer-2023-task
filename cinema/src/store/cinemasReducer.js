const GET_CINEMAS ="GET_CINEMAS"
const GET_CONCERT_FILM ="GET_CONCERT_FILM"



const defaultState ={
    cinemas:{},
    concertFilm:{}
}
export default function cinemasReducer(state = defaultState, action){
    console.log(action.payload)
    switch (action.type){
        case GET_CINEMAS:
            return {
                ...state,
                cinemas:action.payload.data.films
            }
        case GET_CONCERT_FILM:
            return {
                ...state,
                concertFilm:action.payload.data.film
            }
        default:
            return state
    }
}
export const getCinemas = cinemas =>({type:GET_CINEMAS, payload:cinemas})
export const getFilm = film =>({type:GET_CONCERT_FILM, payload:film})

