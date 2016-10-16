import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ContentList from '../components/ContentList.jsx';

export const ContentPage = (props) => {
  return (
    <div className="page-main">
      <h1>Content Cards!</h1>
      <ContentList contentCards={props.contentCards} />
    </div>
  );
};

ContentPage.propTypes = {
  contentCards: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    contentCards: state.allContent.contentCards
  };
}

export default connect(mapStateToProps)(ContentPage);
