import { GET_GAMES, GET_GAME_ID, GET_GAME_NAME, GET_GENRES } from "./action_type";

const initialState={
    videoGames:[],
    videoGameID:[],
    genres:[],
    nameGame:[]
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_GAMES:
            return {...state, videoGames: action.payload, videoGameID: []}

        case GET_GAME_ID:
            return {...state, videoGameID: action.payload, videoGames: []}

        case GET_GAME_NAME:
            return {...state, videoGames: action.payload}

        case GET_GENRES:
            return {...state, genres: action.payload}
            
        default: 
            return {...state}
    }
}

export default rootReducer;