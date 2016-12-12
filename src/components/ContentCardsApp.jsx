import React, { PropTypes } from 'react';

const ContentCardsApp = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

ContentCardsApp.propTypes = {
  children: PropTypes.element
};

export default ContentCardsApp;
