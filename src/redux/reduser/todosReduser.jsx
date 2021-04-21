import { ADD_VALUE, ADD_VALUE_TO_LIST } from '../action/action'


export const todo = {
    value: ''
}



export default function todos(state = todo,{type, payload}){
    switch (type) {
        case ADD_VALUE:
           return{
               value: payload
           }
        case ADD_VALUE_TO_LIST:
            return{
                value: ''
            }
        default:
            return{
                ...state
            }
                
    }
}