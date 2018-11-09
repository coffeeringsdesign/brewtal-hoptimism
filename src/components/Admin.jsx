import React from 'react';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';

function Admin() {
  return(
    <div>
      <KegList/>
      <EditKeg/>
      <AddKeg/>
    </div>
  );
}

export default Admin;
