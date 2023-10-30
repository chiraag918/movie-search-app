import { all } from "redux-saga/effects";
import genreListSagas from "./genreListSagas";
import movieListSagas from "./movieListSagas";

export default function* rootSaga() {
	yield all([genreListSagas(), movieListSagas()]);
}
