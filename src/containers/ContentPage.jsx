import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ContentList from '../components/ContentList.jsx';
import * as actions from '../actions/ContentActions';

export const ContentPage = (props) => {
  return (
    <div className="page-main">
      <h1>Content Cards!</h1>
      <ContentList
        removeCard={props.actions.removeCard}
        contentCards={props.contentCards}
      />
    </div>
  );
};

ContentPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contentCards: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    contentCards: state.allContent.contentCards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPage);
