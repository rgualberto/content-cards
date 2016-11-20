import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';
import ContentList from '../components/ContentList.jsx';
import ConfirmModal from '../components/ConfirmModal.jsx';
import * as actions from '../actions/ContentActions';

export class ContentPage extends React.Component {
  constructor() {
    super();
    this.closeDialog = this.closeDialog.bind(this);

    this.state = {
      dialogIsOpen: false,
      dialogMessage: '',
      dialogCallback: _.noop
    };
  }

  componentWillMount() {
    if (!this.props.isLoaded) {
      this.props.actions.loadContent();
    }
  }

  handleClearCards() {
    this.setState({
      dialogIsOpen: true,
      dialogMessage: 'Are you sure you want to clear all cards?',
      dialogCallback: _.partial(this.closeDialog, this.props.actions.clearContent)
    });
  }

  handleReset() {
    this.setState({
      dialogIsOpen: true,
      dialogMessage: 'Are you sure you want to reset to default?',
      dialogCallback: _.partial(this.closeDialog, this.props.actions.resetContent)
    });
  }

  closeDialog(callback, executeCallback) {
    if (executeCallback) {
      callback();
    }

    this.setState({
      dialogIsOpen: false,
      dialogMessage: '',
      dialogCallback: _.noop
    });
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
        <ConfirmModal
          dialogIsOpen={this.state.dialogIsOpen}
          confirmMessage={this.state.dialogMessage}
          closeDialog={this.state.dialogCallback}
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
