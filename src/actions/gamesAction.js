/*
* DEFAULT ACTION CREATORS:-
const actionCreator = ()=> {
    return {
        type: ...,
    }
}

* ACTION CREATOR WITH THUNK
const actionCreator = () => async (dispatch) => {
    dispatch(
        {
            type: ...,
        }
    )
}
*/

import axios from "axios";
import { popularGamesURL } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
    // Fetch
    const popularGames = await axios.get(popularGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.data.results,
        },
    });
};
