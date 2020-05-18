import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="App-header">
          <div className="App-div">
            <Link 
            to='/' id="logo">
              My-books
            </Link>
            <Link
              to='/search'>
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </header>
    )
}

export default Header;