import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Input } from "antd"
import { NotificationContainer, NotificationManager } from "react-notifications"
import { addValueToList } from "../redux/reduser/todos"
import { Home } from "../exports"
import "react-notifications/lib/notifications.css"
import "./todos.scss"

function Todos() {
	const [value, handleChange] = useState("")

	const dispatch = useDispatch()

	const addToList = (id, text, isComplited) => {
		dispatch(addValueToList(id, text, isComplited))
	}

	const addvalueList = () => {
		if (value === "") {
			return NotificationManager.warning("Error, add task")
		}

		return (
			addToList((new Date()).getTime(), value, false),
			NotificationManager.success("Todos create"),
			handleChange("")
		)
	}
	return (
		<>
			<Home />
			<form>
				<Input
					className="addTodo"
					value={value}
					onChange={(event) => handleChange(event.target.value)}
					placeholder="Basic usage"
				/>
				<input
					className="butpush"
					onClick={addvalueList}
					type="button"
					value="Create"
				/>
			</form>
			<NotificationContainer />
		</>
	)
}

export { Todos }
