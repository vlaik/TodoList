export const ADD_VALUE = 'ADD_VALUE';
export const ADD_VALUE_TO_LIST = 'ADD_VALUE_TO_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_TASK = 'ADD_TASK';

export const addValue = (value) => {
    return {
        type: ADD_VALUE,
        payload: value
    }
}


export const addValueToList = (id, text, isComplited) => {
    return {
        type: ADD_VALUE_TO_LIST,
        payload: {
            id,
            text,
            isComplited
        }
    }
}



export const deletArrList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}


