/* eslint-disable react/jsx-filename-extension */
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {
	Header, Home, Lists, Todos
} from "./exports"

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/todos" component={Todos} />
				<Route path="/list" component={Lists} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	)
}

export { App }
