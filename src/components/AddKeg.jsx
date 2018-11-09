import React from 'react';

function AddKeg() {
  const addNewKegFormStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '20px auto',
    height: '70%',
    justifyContent: 'space-between'
  }
  const inputStyles = {
    height: '25px',
    margin: '10px 0'
  }

  return(
    <div>
      <form style={addNewKegFormStyles}>
        <h1>Add Keg</h1>
        <label>Enter Keg name:</label>
        <input style={inputStyles}/>
        <label>Enter Brewery name:</label>
        <input style={inputStyles}/>
        <label>Enter Style:</label>
        <input style={inputStyles}/>
        <label>Enter ABV:</label>
        <input style={inputStyles}/>
        <label>Enter IBU:</label>
        <input style={inputStyles}/>
        <label>Enter Price:</label>
        <input style={inputStyles}/>
        <label>Enter Pint Count:</label>
        <input style={inputStyles}/>
        <label>Region:</label>
        <select style={inputStyles}>
          <option> Local Region </option>
          <option> National Region </option>
          <option> International Region </option>
        </select>
        <button style={inputStyles}>Add Keg</button>
      </form>
    </div>
  );
}

export default AddKeg;
