import { ADD_VALUE_TO_LIST, DELETE_LIST } from '../action/action'


export const initialState = []


export default function todos(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_VALUE_TO_LIST:
            return [
                ...state,
                payload
            ]
        case DELETE_LIST:
            return [...state].filter(item => item.id !== payload);

        default: return [
            ...state
        ]
    }
}

