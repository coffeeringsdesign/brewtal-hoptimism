import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegStyles = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    width: '75%',
    height: '300px',
    color: '#797F7F',
    flexDirection: 'row',
    textAlign: 'left',
    border: '2px #D16655 solid',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const kegInformationStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-around',
    marginLeft: '3em',
    marginRight: '1em',
    width: '200px'
  }
  const beerLogoStyles = {
    width: '175px',
  }
  const kegBreakdownStyles = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '200px',
    width: '100px'
  }
  console.log(props.index);
  return(
    <div style={kegStyles}>
      <div>
        <img style={beerLogoStyles} src={props.img}/>
      </div>
      <div>
        <div style={kegInformationStyles}>
          <h1>{props.name}</h1>
          <h2>{props.brewery}</h2>
          <h3>{props.style}</h3>
          <h4>ABV: {props.abv}</h4>
          <h4>IBU: {props.ibu}</h4>
        </div>
      </div>
      <div style={kegBreakdownStyles}>
        <div>
          <h4>Price:</h4>
          <h2>{props.price}</h2>
        </div>
        <div>
          <h4>Pints Left:</h4>
          <h2>{props.pintCount}</h2>
        </div>
        <div>
          <h4>Region:</h4>
          <h2>{props.region}</h2>
        </div>
      </div>
    </div>
  );
}

Keg.propTypes = {
  tapped: PropTypes.bool,
  name: PropTypes.string,
  brewery: PropTypes.string,
  style: PropTypes.string,
  abv: PropTypes.string,
  ibu: PropTypes.string,
  price: PropTypes.string,
  pintCount: PropTypes.number,
  region: PropTypes.string
}

export default Keg;
