import React from 'react';
import {Link} from 'react-router';

// Would like props to be... ? None for now.
function Navbar(props) {

  return (
          <div>
            <span> Hamilton Acadamy Profiles:  </span>
            <Link to='/campuses'> Campuses </Link>
            <span/>
            <Link to='/students'> Students </Link>

          </div>
          )
}

export default Navbar;
