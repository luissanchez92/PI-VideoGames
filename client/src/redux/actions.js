import axios from 'axios';
import { GET_GAMES, GET_GAME_ID, GET_GAME_NAME, GET_GENRES, GET_ORIGIN, GET_GENREFILTER, GET_ORDER } from './action_type';

export const getVideoGames = (page) => {
    return async function(dispatch){
        const response= await axios.get(`http://localhost:3001/videoGames?page=${page}`);
        return dispatch({
            type: GET_GAMES, 
            payload: response.data
        })
    }
}

export const getVideoGameId=(id)=>{
    return async function(dispatch){
        const response= await axios.get(`http://localhost:3001/videoGames/${id}`);
        return dispatch({
            type: GET_GAME_ID,
            payload: response.data
        })
    }
}

export const getNameVideoGame=(name)=>{
    return async function(dispatch){
        const response= await axios.get(`http://localhost:3001/videoGames/name?name=${name}`);
        return dispatch({
            type: GET_GAME_NAME,
            payload: response.data
        })
    }
}

export const getGenres=()=>{
    return async function(dispatch){
        const response= await axios.get('http://localhost:3001/genres');
        return dispatch({
            type: GET_GENRES,
            payload: response.data
        })
    }
}

export const getGenreFilter=(genre)=>{
    return({
        type: GET_GENREFILTER,
        payload: genre
    })
}

export const getOrder=(order)=>{
    return({
        type: GET_ORDER,
        payload: order
    })
}

export const getOrigin=(origin)=>{
    return({
        type: GET_ORIGIN,
        payload: origin
    })
}