import React, { useState } from 'react';
import Home from '../Home/Home';
import { useDispatch } from 'react-redux';
import { addValueToList } from '../redux/action/action';
import { Input } from 'antd';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './todos.scss';

function Todos(){

    const [value, handleChange] = useState('');
    
    const dispatch = useDispatch();

    const addToList = (id, text, isComplited) =>{
        dispatch(addValueToList(id, text, isComplited))
    }
    

    const addvalueList = () =>{
        if(value === ''){
            return NotificationManager.warning('Error, add task')
        }
        else{
            return(
                addToList((new Date()).getTime(),value,false),
                NotificationManager.success('Todos create'),
                handleChange('')
            )
        }
    }
    return(
        <>
        <Home/>
        <form>
        <Input 
            className='addTodo'
            value={value}
            onChange={(event) => handleChange(event.target.value)}
            placeholder="Basic usage" />
            <input
            className='butpush'
            onClick={addvalueList}
            type="button"
            value='Create'/> 
        </form>
        <NotificationContainer/>
        </>
    )
}


export default Todos;








