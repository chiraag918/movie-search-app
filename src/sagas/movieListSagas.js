import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_MOVIE_LIST } from "../actions/movieList/actionTypes";
import { getMovieListFailure, getMovieListSuccess } from "../actions/movieList";
import { getMoviesByActorAndGenre } from "../utitlities";

function* getMovieList(action) {
	try {
		const { actorName, genreId } = action.payload;

		const response = yield call(getMoviesByActorAndGenre, actorName, genreId);

		yield put(getMovieListSuccess(response));
	} catch (error) {
		yield put(getMovieListFailure(error));
	}
}

function* watchGetRequest() {
	yield takeLatest(GET_MOVIE_LIST, getMovieList);
}

export default function* sagas() {
	yield all([watchGetRequest()]);
}
