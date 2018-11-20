import React from 'react';
import KegList from './KegList';
import PropTypes from 'prop-types';


function Admin(props) {
  const adminContainerStyles = {
    marginBottom: '70px'
  };
  return(
    <div style={adminContainerStyles}>
      <KegList currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}
// props.currentRouterPath is working
Admin.propTypes = {
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
