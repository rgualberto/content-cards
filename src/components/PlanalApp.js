import React, { PropTypes } from 'react';
// import { Link, IndexLink } from 'react-router';

const PlanalApp = (props) => {
  return (
    <div>
      {/*
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
      */}
      {props.children}
    </div>
  );
};

PlanalApp.propTypes = {
  children: PropTypes.element
};

export default PlanalApp;
