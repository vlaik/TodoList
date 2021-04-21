import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <Link to='/todos' className='links'>Create</Link>
            <Link to='/list' className='links'>List</Link>
        </div>
    )
}

export default Header;