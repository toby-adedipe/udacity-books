import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="App-header">
          <Link 
           to='/'>
            My-books
          </Link>
          <Link
            to='/search'>
            <i className="fas fa-search"></i>
          </Link>
        </header>
    )
}

export default Header;