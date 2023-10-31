import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_GENRE_LIST } from "../actions/genreList/actionTypes";
import { getGenreListFailure, getGenreListSuccess } from "../actions/genreList";
import { getMovieGenres } from "../utitlities";

function* getGenreList(action) {
	try {
		const response = yield call(getMovieGenres);
		yield put(getGenreListSuccess(response));
	} catch (error) {
		yield put(getGenreListFailure(error));
	}
}

function* watchGetRequest() {
	yield takeLatest(GET_GENRE_LIST, getGenreList);
}

export default function* sagas() {
	yield all([watchGetRequest()]);
}
