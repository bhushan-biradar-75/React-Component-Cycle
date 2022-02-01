import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return( 
  
  
  <div className='headerbar'>
      <h1 className='text-center'>Component Life Cycle</h1>
      <ul className='nav'>
          <li>
              <Link to='/'>Mount</Link>
          </li>
          <li>
              <Link to='/about'>Updating</Link>
          </li>
          <li>
              <Link to='/contact'>Unmounting</Link>
          </li>
      </ul>
  </div>
)};

export default Header;
