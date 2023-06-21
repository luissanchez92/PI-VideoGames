import { GET_GAMES, GET_GAME_ID, GET_GAME_NAME, GET_GENRES, GET_ORIGIN, GET_GENREFILTER, GET_ORDER } from "./action_type";

const initialState={
    videoGames:[],
    videoGameID:[],
    genres:[],
    nameGame:[],
    filter:[]
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

        case GET_GENREFILTER:
            const response=state.videoGames.filter(element=>element.genres.includes(action.payload))
            return {
                ...state, videoGames: [...response]
            }
        case GET_ORDER:
                if(action.payload==='upward'){
                    const responseUpward=state.videoGames.slice().sort((a,b)=>a.name.localeCompare(b.name))
                    return {...state, videoGames: [...responseUpward]}
                }
                if (action.payload==='falling'){
                    const responseFalling=state.videoGames.slice().sort((a,b)=>b.name.localeCompare(a.name))
                    return {...setTimeout, videoGames:[...responseFalling]}
                }
                if(action.payload==='hight-rating'){
                    const responseHightRating=state.videoGames.sort((a,b)=>b.rating-a.rating)
                    return {...state, videoGames:[...responseHightRating]}
                }
                if(action.payload==='low-rating'){
                    const responseLowRating=state.videoGames.sort((a,b)=>a.rating-b.rating)
                    return {...state, videoGames:[...responseLowRating]}
                }
                break;
        case GET_ORIGIN:
            if (action.payload==='database'){
                const responseOrigin=state.videoGames.filter(element=>element.create===true)
                return {...state, videoGames:[...responseOrigin]}
            }
            if (action.payload==='api'){
                const responseOriginApi=state.videoGames.filter(element=>element.create===false)
                return {...state, videoGames:[...responseOriginApi]}
            }
            break
            
        default: 
            return {...state}
    }
}

export default rootReducer;

