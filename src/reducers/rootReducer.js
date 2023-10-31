import { combineReducers } from "redux";
import genreListReducer from "./genreListReducer";
import movieListReducer from "./movieListReducer";

const appReducer = combineReducers({
	genreList: genreListReducer,
	movieList: movieListReducer,
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
