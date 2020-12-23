// BASE URL
const BASE_URL = `https://api.rawg.io/api/`;

//TODO: make functions to return current date
const currentDate = `2020-12-23`;
const previousYear = `2019-12-23`;
const nextYear = `2021-12-23`;
const popularGames = `games?dates=${previousYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${previousYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
    return `${BASE_URL}${popularGames}`;
};

export const upcomingGamesURL = () => {
    return `${BASE_URL}${upcomingGames}`;
};

export const newGamesURL = () => {
    return `${BASE_URL}${newGames}`;
};
