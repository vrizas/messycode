import React from 'react';
import PropTypes from 'prop-types';

function Navigation({ authUser }) {
  if (authUser) {
    return <button className="bg-danger text-white py-2 px-5 rounded-md font-medium">Logout</button>
  }

  return <button className="bg-primary text-white py-2 px-5 rounded-md font-medium">Login</button> ;
}

Navigation.propTypes = {
  authUser: PropTypes.object
};

export default Navigation;
