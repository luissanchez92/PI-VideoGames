import { GET_GAMES, GET_GAME_ID, GET_GAME_NAME, GET_GENRES, GET_ORIGIN, GET_GENREFILTER, GET_ORDER } from "./action_type";

const initialState={
    videoGames:[],
    videoGameID:[],
    genres:[],
    filter:[]
}

const rootReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return { ...state, videoGames: action.payload, videoGameID: [] };
    
        case GET_GAME_ID:
            return { ...state, videoGameID: action.payload, videoGames: [] };
    
        case GET_GAME_NAME:
            return { ...state, videoGames: action.payload };
    
        case GET_GENRES:
            return { ...state, genres: action.payload };
    
        case GET_GENREFILTER:
            const filteredGames = state.videoGames.filter(element =>element.genres.includes(action.payload));

                return { ...state, videoGames: filteredGames, filter: action.payload };
    
        case GET_ORDER:
            let orderGames=[];

            if (action.payload === "upward") {
                orderGames = state.videoGames.slice().sort((a, b) => a.name.localeCompare(b.name));

            } else if (action.payload === "falling") {
                orderGames = state.videoGames.slice().sort((a, b) =>
                b.name.localeCompare(a.name));

            } else if (action.payload === "hight-rating"){
                orderGames = state.videoGames.slice().sort((a, b) => b.rating - a.rating);

            } else if (action.payload === "low-rating") {
                orderGames = state.videoGames.slice().sort((a, b) => a.rating - b.rating);}
    
            if (orderGames){
                return { ...state, videoGames: orderGames, filter: action.payload };
            } else {
                return { ...state };
            }
    
        case GET_ORIGIN:
            let filteredOriginGames=[];
            if (action.payload === "database"){
               filteredOriginGames = state.videoGames.filter(element => element.create === true);
            } else if (action.payload === "api") {
               filteredOriginGames = state.videoGames.filter(element => element.create === false);
            }

            return { ...state, videoGames: filteredOriginGames, filter: action.payload };

        default:
            return { ...state };
    }
};
  
export default rootReducer;
