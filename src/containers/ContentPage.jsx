import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ContentList from '../components/ContentList.jsx';
import * as actions from '../actions/ContentActions';

export class ContentPage extends React.Component {
  componentWillMount() {
    if (!this.props.isLoaded) {
      this.props.actions.loadContent();
    }
  }

  handleClearCards() {
    if (confirm('Are you sure you want to clear all cards?')) {
      this.props.actions.clearContent();
    }
  }

  handleReset() {
    if (confirm('Are you sure you want to reset to default?')) {
      this.props.actions.resetContent();
    }
  }

  render() {
    return (
      <div className="page-main">
        <h1>Content Cards!</h1>
        <ul className="inline-list">
          <li><button type="button" className="text-button" onClick={this.handleClearCards.bind(this)}>Clear All Cards</button></li>
          <li><button type="button" className="text-button" onClick={this.handleReset.bind(this)}>Reset to Default</button></li>
        </ul>
        <ContentList
          removeCard={this.props.actions.removeCard}
          contentCards={this.props.contentCards}
        />
      </div>
    );
  }
}

ContentPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contentCards: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    contentCards: state.allContent.contentCards,
    isLoaded: state.allContent.isLoaded
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
