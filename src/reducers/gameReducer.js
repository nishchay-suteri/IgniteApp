/*
const reducerFunction = (state,action) => {

}
*/
const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searched: [],
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state, popularGames: action.payload.popular };
        default:
            return { ...state };
    }
};

// ACTION
/*
    Just An Object describing what's gonna haapen
    {
        type: FETCH_GAMES,
        payload: ....,
        ...
    }
*/

// DISPATCH
/*
Used to send the action to reducers
*/

// ACTION CREATOR
/*
A Function that returns an Action(Object)

const fetchGames = () => {
    return {
        type: "FETCH_GAMES",
    };
};
*/
/*
 * NOTE: THERE IS NO WAY IN ACTION CREATOR TO USE ASYNCHRONOUS JS CODE. THEREFORE, REDUX_THUNK Comes into picture
 */

export default gameReducer;
