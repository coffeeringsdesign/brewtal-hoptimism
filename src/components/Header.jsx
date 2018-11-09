import React from 'react';
import hoptimistsLogo from '../assets/images/HoptimistsLogo.png';
import { Link } from 'react-router-dom';
import Subtitle from './Subtitle';

function Header() {
  const headerStyles = {
    width: '100%',
    position: 'relative',
    backgroundColor: '#FFFFFF',
    height: '20%'
  }
  const logoStyles = {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '90%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottom: '2px #D16655 solid',
    textAlign: 'center'
  }
  const adminLinkStyles = {
    position: 'absolute',
    right: '10',
    top: '6',
    color: '#D8D8D8',
    textDecoration: 'none'
  }
  const logoImgStyles = {
    marginTop: '20px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',

  }

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
