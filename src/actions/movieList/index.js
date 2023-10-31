import {
	GET_MOVIE_LIST,
	GET_MOVIE_LIST_SUCCESS,
	GET_MOVIE_LIST_FAILURE,
} from "./actionTypes";

export const getMovieList = (data) => {
	return {
		type: GET_MOVIE_LIST,
		payload: data,
	};
};

export const getMovieListSuccess = (data) => ({
	type: GET_MOVIE_LIST_SUCCESS,
	payload: data,
});

export const getMovieListFailure = (data) => ({
	type: GET_MOVIE_LIST_FAILURE,
	payload: data,
});
