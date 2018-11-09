import React from 'react';
import hoptimistsLogo from '../assets/images/HoptimistsLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyles = {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    marginBottom: '1px lightgrey solid',
    height: '150px'
  }
  const logoStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
  const logoImgStyles = {
    height: '85%'
  }
  const adminLinkStyles = {
    float: 'right',
    color: 'red'
  }

  return(
    <div style={headerStyles}>
      <Link style={adminLinkStyles} to="/admin">admin</Link>
      <div style={logoStyles}>
        <Link to="/"><img style={logoImgStyles} src={hoptimistsLogo}/></Link>
      </div>
    </div>
  );
}

export default Header;
