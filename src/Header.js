import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="App-header">
          <div className="App-div">
            <Link 
            to='/' id="logo">
              LAIBRY
            </Link>
            <Link
              to='/search'>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </Link>
          </div>
        </header>
    )
}

export default Header;