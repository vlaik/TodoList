import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {
	Header, Lists, Todos
} from "./exports"

export const App = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/todos" component={Todos} />
			<Route path="/list" component={Lists} />
		</Switch>
	</Router>
)
