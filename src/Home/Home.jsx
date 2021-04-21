import React from 'react';
import Header from './Header/Header';
import { Link } from 'react-router-dom';
import './home.scss';



function Home(){
    return(
        <div>
        <Header/>
        <Link to='/' className='linkhome'><h1>TodoList</h1></Link>
        </div>
    )
}


export default Home;