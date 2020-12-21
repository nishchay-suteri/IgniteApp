// BASE URL
const BASE_URL = `https://api.rawg.io/api/`;

//TODO: make functions to return current date
const currentDate = `2020-12-21`;
const previousYear = `2019-12-21`;

const popularGames = `games?dates=${previousYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => {
    return `${BASE_URL}${popularGames}`;
};
