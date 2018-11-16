import React from 'react';
import hoptimistsLogo from '../assets/images/HoptimistsLogo.png';
import { Link } from 'react-router-dom';
import Subtitle from './Subtitle';

function Header() {
  const headerStyles = {
    width: '97%',
    position: 'relative',
    backgroundColor: '#FFFFFF',
    height: '20%',
    margin: '1.3em auto',
    filter: 'drop-shadow(0 0 0.5rem black)'
  };
  const logoStyles = {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '90%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  };
  const adminLinkStyles = {
    position: 'absolute',
    right: '10px',
    top: '6px',
    color: '#D8D8D8',
    textDecoration: 'none'
  };
  const logoImgStyles = {
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  };

  return(
    <div style={headerStyles}>
      <Link style={adminLinkStyles} to="/admin">admin</Link>
      <div style={logoStyles}>
        <Link to="/"><img style={logoImgStyles} src={hoptimistsLogo}/></Link>
        <Subtitle/>
      </div>
    </div>
  );
}

export default Header;
