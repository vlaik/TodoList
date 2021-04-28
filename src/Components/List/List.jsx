import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { List, Divider } from "antd"
import CloseCircleOutlined from "@ant-design/icons"
import { deletArrList } from "../../redux/reduser/todos"
import "antd/dist/antd.css"
import styles from "./list.module.scss"

export const Lists = () => {
	const arrTodos = useSelector(state => state.todos)
	const dispatch = useDispatch()
	const deleteTodos = (id) => {
		dispatch(deletArrList(id))
	}

	if (arrTodos.length === 0) {
		return null
	}

	return (
		<>
			<Divider orientation="centr"><h1>TodoList</h1></Divider>
			<List
				className={styles.todoList}
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

						<button
							className={styles.createButt}
							onClick={() => { deleteTodos(id) }}
							type="button"
						>
							<CloseCircleOutlined className={styles.closeIcon} />
						</button>
					</List.Item>
				)}
			/>
		</>
	)
}