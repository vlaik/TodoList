import React from 'react';
import Home from '../Home/Home';
import { connect } from 'react-redux';
import { addValue, addValueToList } from '../redux/action/action';
import { Input } from 'antd';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './todos.scss';

function Todos(props){
    const handleChanche = (event) =>{
        props.targetValue(event.target.value)
    }
    const addvalueList = () =>{
        if(props.inputValue === ''){
            return NotificationManager.warning('Warning message');;
        }
        else{
            return(
                props.addToList((new Date()).getTime(),props.inputValue,false),
                NotificationManager.success('Success message', 'Title here')
            )
        }
    }
    return(
        <>
        <Home/>
        <form>
        <Input 
            value={props.inputValue}
            onChange={handleChanche}
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


const mapStateToProps = (state) =>{
    return{
        inputValue: state.todos.value
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        targetValue: (value) => dispatch(addValue(value)),
        addToList: (id, text, isComplited) => dispatch(addValueToList(id, text, isComplited))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Todos);








