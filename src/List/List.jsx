/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable import/order */
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { List, Divider } from "antd"
import { Home } from "../exports"
import { deletArrList } from "../redux/reduser/todos"
import "antd/dist/antd.css"
import { CloseCircleOutlined } from "@ant-design/icons"
import "./list.scss"

function Lists() {
	const arrTodos = useSelector(state => state.todos)
	const dispatch = useDispatch()
	const deleteTodos = (id) => {
		dispatch(deletArrList(id))
	}

	if (arrTodos.length === 0) {
		return (
			<>
				<Home />
			</>
		)
	}

	return (
		<>
			<Divider orientation="centr"><Home /></Divider>
			<List
				className="todoList"
				size="large"
				header={(
					<div>
						Todos:
						{arrTodos.length}
					</div>
				)}
				bordered
				dataSource={arrTodos}
				renderItem={({ id, text }) => (
					<List.Item key={id} className="task">
						{text}

						<button onClick={() => { deleteTodos(id) }}><CloseCircleOutlined className="qww" /></button>
					</List.Item>
				)}
			/>
		</>
	)
}

export { Lists }