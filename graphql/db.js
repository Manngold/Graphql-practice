import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_detail.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}movie_suggestion.json`;

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies;
};

export const getMovies = async id => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movies;
}

export const getSuggestions = async id => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_SUGGESTION_URL, {
        params: {
            movie_id: id
        }
    });
    return movies;
}