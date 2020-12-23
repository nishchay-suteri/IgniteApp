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
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
    // Fetch
    const popularGames = await axios.get(popularGamesURL());
    const upcomingGames = await axios.get(upcomingGamesURL());
    const newGames = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGames.data.results,
            newGames: newGames.data.results,
            upcomingGames: upcomingGames.data.results,
        },
    });
};
