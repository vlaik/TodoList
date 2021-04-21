import React from 'react';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import { deletArrList } from '../redux/action/action';
import { CloseCircleOutlined } from '@ant-design/icons'
import './list.scss';

function List(props){
    if(props.newArray.length === 0){
        return (
            <>
            <Home/>
            </>
        );
    }
    else{

    
    return(
        <>
        <Home/>
        <h1>TODOS: {props.newArray.length}</h1>
        <div className='todolist'><ul>{props.newArray.map(({id, text}) =>(
            <li  key={id} className='task'> 
                 {text}
                 
                <button onClick={() =>{ props.deleteArr(id)}}><CloseCircleOutlined /></button>
           </li>))}</ul></div>
        </>
    )
}
}



const mapStateToProps = (state) =>{
    return{
        newArray: state.reduser,
        ids: state.reduser.id
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteArr: (id) => dispatch(deletArrList(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(List);