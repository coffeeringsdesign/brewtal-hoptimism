import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  function abvColorChange(props, abvColorClass) {
    if (props.abv >= 9){
      let abvColorClass = '#C65543';
    } else if ((props.abv <=4) && (props.abv <=8)) {
      let abvColorClass = '#D16655';
    } else {
      let abvColorClass = '#F99E90';
    }
    return abvColorClass;
    console.log(abvColorClass);
  }

  const kegStyles = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    width: '65%',
    height: '300px',
    color: '#797F7F',
    flexDirection: 'row',
    textAlign: 'left',
    border: '3px #87A06B solid',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    filter: 'drop-shadow(0 0 0.5rem #797F7F)'
  };
  const kegInformationStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-around',
    marginLeft: '3em',
    marginRight: '1em',
    width: '200px'
  };
  const beerLogoStyles = {
    width: '175px',
  };
  const kegBreakdownStyles = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '200px',
    width: '100px'
  };
  // const abvColorStyle = {
  //   color: abvColorClass,
  // };





  return(
    <div style={kegStyles} abvColorChange={this.abvColorChange}>
      <div>
        <img style={beerLogoStyles} src={props.img}/>
      </div>
      <div>
        <div style={kegInformationStyles}>
          <h1>{props.name}</h1>
          <h2>{props.brewery}</h2>
          <h3>Style: {props.style}</h3>
          <h4 abvColorChange={this.abvColorChange}>ABV: {props.abv}%
            <style jsx>{`
                .abvColorStyle {
                  {abvColorClass};
                }`}</style>
          </h4>)
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
  img: PropTypes.object,
  style: PropTypes.string,
  abv: PropTypes.number,
  ibu: PropTypes.string,
  price: PropTypes.string,
  pintCount: PropTypes.number,
  region: PropTypes.string,
  lowPint: PropTypes.bool
};

export default Keg;
