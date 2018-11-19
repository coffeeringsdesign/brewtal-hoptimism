import React from 'react';
import PropTypes from 'prop-types';

function AddKeg(props) {
  let _name = null;
  let _brewery = null;
  let _style = null;
  let _abv = null;
  let _ibu = null;
  let _price = null;
  let _pintCount = null;
  let _region = null;
  let _img = null;

  const addNewKegFormStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '20px auto',
    height: '70%',
    justifyContent: 'space-between'
  };

  const inputStyles = {
    height: '25px',
    margin: '10px 0'
  };



  function handleAddingNewKegSubmit(event) {
    event.preventDefault();
    props.onAddingNewKegSubmit({tapped: true, name: _name.value, brewery: _brewery.value, img: _img.value, style: _style.value, abv: _abv.value, ibu: _ibu.value, price: _price.value, pintCount: _pintCount.value, region: _region.value, lowPint: false});
    _name.value = '';
    _brewery.value = '';
    _style.value = '';
    _abv.value = '';
    _ibu.value = '';
    _price.value = '';
    _pintCount.value = '';
    _region.value = '';
  }

  return(
    <div>
      <form onSubmit={handleAddingNewKegSubmit} style={addNewKegFormStyles}>
        <h1>Add Keg</h1>
        <label>Enter Keg name:</label>
        <input
          style={inputStyles}
          type='text'
          id='name'
          ref={(input) => {_name = input;}}/>
        <label>Enter Brewery name:</label>
        <input
          style={inputStyles}
          type='text'
          id='brewery'
          ref={(input) => {_brewery = input;}}/>
        <label>Enter URL of image:</label>
        <input
          style={inputStyles}
          type='text'
          id='img'
          ref={(input) => {_img = input;}}/>
        <label>Enter Style:</label>
        <input
          style={inputStyles}
          type='text'
          id='style'
          ref={(input) => {_style = input;}}/>
        <label>Enter ABV:</label>
        <input
          style={inputStyles}
          type='text'
          id='abv'
          ref={(input) => {_abv = input;}}/>
        <label>Enter IBU:</label>
        <input
          style={inputStyles}
          type='text'
          id='ibu'
          ref={(input) => {_ibu = input;}}/>
        <label>Enter Price:</label>
        <input
          style={inputStyles}
          type='text'
          id='price'
          ref={(input) => {_price = input;}}/>
        <label>Enter Pint Count:</label>
        <input
          style={inputStyles}
          type='number'
          id='pintCount'
          ref={(input) => {_pintCount = input;}}/>
        <label>Region:</label>
        <select
          style={inputStyles}
          ref={(select) => {_region = select;}}>
          <option value='local'> Local Region </option>
          <option value='local'> National Region </option>
          <option value='local'> International Region </option>
        </select>
        <button style='submit' style={inputStyles}>Add Keg</button>
      </form>
    </div>
  );
}

AddKeg.propTypes = {
  onAddingNewKegSubmit: PropTypes.func
};

export default AddKeg;
