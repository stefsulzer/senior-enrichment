import React from 'react';
import {Link} from 'react-router';

// Would like props to be... ? None for now.
function Navbar(props) {

  return (
          <div>
            <Link path='/campuses'>Campuses</Link>
            <Link path='/students'>Students</Link>

          </div>
          )
}
