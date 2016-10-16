import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as actions from '../actions/ContentActions';
import AddCardForm from '../components/AddCardForm.jsx';

export const AddCardPage = (props) => {
  const submitNewCard = (cardData) => {
    // add editor value to cardData
    cardData.content = props.editorValue.toString('html');

    // save cardData
    props.actions.saveNewCard(cardData);
    browserHistory.push('/');
  };

  return (
    <div className="page-main page-main--center">
      <h1>Add a Card</h1>
      <AddCardForm
        editorValue={props.editorValue}
        editorChange={props.actions.updateEditor}
        contentImages={props.contentImages}
        onSubmit={submitNewCard}
      />
    </div>
  );
};

AddCardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  editorValue: PropTypes.object.isRequired,
  contentImages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    editorValue: state.allContent.editorValue,
    contentImages: state.allContent.contentImages
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
)(AddCardPage);
