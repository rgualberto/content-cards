import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as actions from '../actions/TodoActions';
import AddCardForm from '../components/AddCardForm';

export const AddCardPage = (props) => {
  const submitNewCard = (cardData) => {
    props.actions.saveNewCard(cardData);
    browserHistory.push('/');
  };

  return (
    <div className="page-main">
      <h1>Add a Card</h1>
      <AddCardForm
        onSubmit={submitNewCard}
      />
    </div>
  );
};

AddCardPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardPage);
