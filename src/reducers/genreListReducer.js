import {
	GET_GENRE_LIST,
	GET_GENRE_LIST_SUCCESS,
	GET_GENRE_LIST_FAILURE,
} from "../actions/genreList/actionTypes";

const initialState = {
	getGenreListLoading: false,
	genreListData: null,
	genreListError: null,
};

const getGenreList = (state, action) => ({
	...state,
	getGenreListLoading: true,
});

const getGenreListSuccess = (state, action) => {
	return {
		...state,
		getGenreListLoading: false,
		genreListData: action.payload,
		genreListError: null,
	};
};

const getGenreListFailed = (state, action) => ({
	...state,
	getGenreListLoading: false,
	genreListData: {},
	genreListError: action.payload,
});

const genreListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_GENRE_LIST:
			return getGenreList(state, action);
		case GET_GENRE_LIST_SUCCESS:
			return getGenreListSuccess(state, action);
		case GET_GENRE_LIST_FAILURE:
			return getGenreListFailed(state, action);
		default:
			return state;
	}
};

export default genreListReducer;
