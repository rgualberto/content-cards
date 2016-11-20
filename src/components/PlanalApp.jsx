import React, { PropTypes } from 'react';

const PlanalApp = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

PlanalApp.propTypes = {
  children: PropTypes.element
};

export default PlanalApp;
