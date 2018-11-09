import React from 'react';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';

function Admin() {
  const adminContainerStyles = {
    marginBottom: '70px'
  };
  return(
    <div style={adminContainerStyles}>
      <KegList/>
      <EditKeg/>
      <AddKeg/>
    </div>
  );
}

export default Admin;
