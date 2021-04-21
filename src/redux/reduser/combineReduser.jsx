import { combineReducers } from 'redux';
import reduser from './reduser';
import todos from './todosReduser';


export default combineReducers({
    reduser,
    todos
})