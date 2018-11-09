import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegStyles = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    width: '60%',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'left'
  }
  const kegInformationStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-around'
  }

  return(
    <div style={kegStyles}>
      <div>
        <img src={props.img}/>
      </div>
      <div>
        <div style={kegInformationStyles}>
          <h1>{props.name}</h1>
          <h2>{props.brewery}</h2>
          <h3>{props.style}</h3>
          <h4>ABV: {props.abv}</h4>
          <h4>IBU: {props.ibu}</h4>
          <h4>Price: {props.price}</h4>
          <h4>Pints Left in Keg: {props.pintCount}</h4>
          <h4>Region: {props.region}</h4>
        </div>
      </div>
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
