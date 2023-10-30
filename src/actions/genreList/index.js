import {
	GET_GENRE_LIST,
	GET_GENRE_LIST_SUCCESS,
	GET_GENRE_LIST_FAILURE,
} from "./actionTypes";

export const getGenreList = (data) => {
	return {
		type: GET_GENRE_LIST,
		payload: data,
	};
};

export const getGenreListSuccess = (data) => ({
	type: GET_GENRE_LIST_SUCCESS,
	payload: data,
});

export const getGenreListFailure = (data) => ({
	type: GET_GENRE_LIST_FAILURE,
	payload: data,
});
