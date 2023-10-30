import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/rootReducer";
import rootSagas from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
// below code used for redux dev tool check usege on below link
//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			trace: true,
			traceLimit: 100,
		})) ||
	compose;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
export default store;
