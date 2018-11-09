import React from 'react';
import hoptimistsLogo from '../assets/images/HoptimistsLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <Link to="/"><img src={hoptimistsLogo}/></Link>
      <Link to="/admin">admin</Link>
    </div>
  );
}

export default Header;
