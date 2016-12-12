import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';
import ContentList from '../components/ContentList.jsx';
import ConfirmModal from '../components/ConfirmModal.jsx';
import * as actions from '../actions/ContentActions';
import {push} from 'react-router-redux';

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

  handleRemoveCard(cardId) {
    this.setState({
      dialogIsOpen: true,
      dialogMessage: 'Are you sure you want to delete this card?',
      dialogCallback: _.partial(this.closeDialog, this.props.actions.removeCard.bind(this, cardId))
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
          removeCard={this.handleRemoveCard.bind(this)}
          contentCards={this.props.contentCards}
          push={this.props.push}
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
  isLoaded: PropTypes.bool.isRequired,
  push: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    contentCards: state.allContent.contentCards,
    isLoaded: state.allContent.isLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    push: bindActionCreators(push, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPage);
