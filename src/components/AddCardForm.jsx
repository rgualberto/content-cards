import React, {PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import RichTextEditor from 'react-rte';
import Modal from 'react-modal';

const renderInput = (props) => {
  return (
    <div>
      <input {...props.input} className="text-box" />
      {props.touched &&
       props.error &&
       <span className="error">{props.error}</span>}
    </div>
  );
}



class AddCardForm extends React.Component {
  constructor() {
    super(...arguments);

    this.openDialog = this.openDialog.bind(this);

    this.state = {
      dialogIsOpen: false
    };
  }

  openDialog() {
    this.setState({dialogIsOpen: true});
  }

  render() {
    const {
      handleSubmit,
      editorValue,
      editorChange
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
            name="title"
            component={renderInput}
            type="text"
            placeholder="Title"
        />
        <Field
            name="image"
            component={renderInput}
            type="text"
            placeholder="Image"
        />
        <RichTextEditor
            value={editorValue}
            onChange={editorChange}
            className="text-box text-box--editor"
        />
        <div>
          <button type="submit" className="button">Add It!</button>
        </div>

        <Modal
          isOpen={this.state.dialogIsOpen}
          className="dialog"
        >
          <h2>Stuff!</h2>
        </Modal>
      </form>
    );
  }
}

AddCardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editorValue: PropTypes.object.isRequired,
  editorChange: PropTypes.func.isRequired
}

AddCardForm = reduxForm({
  form: 'add-card'
})(AddCardForm);

export default AddCardForm;
