/* eslint-disable import/no-default-export */
const ADD_VALUE_TO_LIST = "ADD_VALUE_TO_LIST"
const DELETE_LIST = "DELETE_LIST"

export const initialState = []

export default function todos(state = initialState, { type, payload }) {
	switch (type) {
		case ADD_VALUE_TO_LIST:
			return [
				...state,
				payload
			]
		case DELETE_LIST:
			return [...state].filter(item => item.id !== payload)

		default: return [
			...state
		]
	}
}

export const addValueToList = (id, text, isComplited) => ({
	type: ADD_VALUE_TO_LIST,
	payload: {
		id,
		text,
		isComplited
	}
})

export const deletArrList = (id) => ({
	type: DELETE_LIST,
	payload: id
})
