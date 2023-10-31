import {
	GET_MOVIE_LIST,
	GET_MOVIE_LIST_SUCCESS,
	GET_MOVIE_LIST_FAILURE,
} from "../actions/movieList/actionTypes";

const initialState = {
	getMovieListLoading: false,
	movieListData: null,
	movieListError: null,
};

const getMovieList = (state, action) => ({
	...state,
	getMovieListLoading: true,
});

const getMovieListSuccess = (state, action) => {
	return {
		...state,
		getMovieListLoading: false,
		movieListData: action.payload,
		movieListError: null,
	};
};

const getMovieListFailed = (state, action) => ({
	...state,
	getMovieListLoading: false,
	movieListData: {},
	movieListError: action.payload,
});

const movieListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIE_LIST:
			return getMovieList(state, action);
		case GET_MOVIE_LIST_SUCCESS:
			return getMovieListSuccess(state, action);
		case GET_MOVIE_LIST_FAILURE:
			return getMovieListFailed(state, action);
		default:
			return state;
	}
};

export default movieListReducer;
