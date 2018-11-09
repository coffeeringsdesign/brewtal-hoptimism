import React from 'react';

function EditKeg() {
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
        <h1>Edit Keg</h1>
        <input style={inputStyles} placeholder='name'/>
        <input style={inputStyles} placeholder='brewery'/>
        <input style={inputStyles} placeholder='style'/>
        <input style={inputStyles} placeholder='abv'/>
        <input style={inputStyles} placeholder='ibu'/>
        <input style={inputStyles} placeholder='price'/>
        <input style={inputStyles} placeholder='pint count'/>
        <label>Region:</label>
        <select style={inputStyles}>
          <option> Local Region </option>
          <option> National Region </option>
          <option> International Region </option>
        </select>
        <button style={inputStyles}>Submit Edits</button>
      </form>
    </div>
  );
}

export default EditKeg;
