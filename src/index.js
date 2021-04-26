import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { Provider } from "react-redux"
import { App } from "./exports"
import combineReducers from "./redux/combineReduser"

const store = createStore(combineReducers, applyMiddleware(logger))

ReactDOM.render(
	// eslint-disable-next-line react/jsx-filename-extension
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
