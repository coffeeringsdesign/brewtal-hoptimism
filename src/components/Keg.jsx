import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegStyles ={
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    width: '80%',
    backgroundColor: 'red'
  }

  return(
    <div>
      <h3 style={kegStyles}>{props.img}</h3>
    </div>
  );
}

Keg.propTypes = {
  tapped: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  pintCount: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired
}

export default Keg;
