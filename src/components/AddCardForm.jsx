import React, {PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import RichTextEditor from 'react-rte';
import Modal from 'react-modal';
import RenderInput from './RenderInput.jsx';

class AddCardFormComp extends React.Component {
  constructor() {
    super(...arguments);

    this.openDialog = this.openDialog.bind(this);

    this.state = {
      dialogIsOpen: false
    };
  }

  openDialog(event) {
    event.target.blur();
    this.setState({dialogIsOpen: true});
  }

  closeDialog() {
    this.setState({dialogIsOpen: false});
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
            component={RenderInput}
            type="text"
            placeholder="Title"
        />
        <Field
            name="image"
            component={RenderInput}
            type="text"
            placeholder="Image"
            onClick={this.openDialog.bind(this)}
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
          <button onClick={this.closeDialog.bind(this)}>close</button>
        </Modal>
      </form>
    );
  }
}

AddCardFormComp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editorValue: PropTypes.object.isRequired,
  editorChange: PropTypes.func.isRequired
};

const AddCardForm = reduxForm({
  form: 'add-card'
})(AddCardFormComp);

export default AddCardForm;
