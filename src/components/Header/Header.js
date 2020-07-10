import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/' className='header-brand'>
                        {props.brand}
                    </Link>
                </div>
                <nav className='navbar'>
                  <Link to='/'>
                      Portfolio
                  </Link>
                  <Link to='/about'>
                      About Me
                  </Link>
                  <Link to='/contact'>
                      Contact Me
                  </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
