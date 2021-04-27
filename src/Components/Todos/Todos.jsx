import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Input } from "antd"
import { NotificationContainer, NotificationManager } from "react-notifications"
import { addValueToList } from "../../redux/reduser/todos"
import "react-notifications/lib/notifications.css"
import styles from "./todos.module.scss"

export const Todos = () => {
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
			<h1 className={styles.titleCreate}>Create Todo:</h1>
			<form className={styles.inputForm}>
				<Input
					className={styles.addTodo}
					value={value}
					onChange={(event) => handleChange(event.target.value)}
					placeholder="Basic usage"
				/>
				<input
					className={styles.createTodosButtn}
					onClick={addvalueList}
					type="button"
					value="Create"
				/>
			</form>
			<NotificationContainer />
		</>
	)
}
