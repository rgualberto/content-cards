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
      dialogIsOpen: false,
      selectedImage: ''
    };
  }

  changeInputValue(field, value) {
    const dispatchAction = this.props.change(field, value);

    this.props.dispatch(dispatchAction);
  }

  openDialog(event) {
    event.target.blur();
    this.setState({dialogIsOpen: true});
  }

  closeDialog() {
    this.setState({dialogIsOpen: false});
    this.changeInputValue('image', this.state.selectedImage);
  }

  handleImageSelection(event) {
    this.setState({
      ...this.state,
      selectedImage: event.target.value
    });
  }

  render() {
    const {
      handleSubmit,
      editorValue,
      editorChange,
      contentImages
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
            onFocus={this.openDialog.bind(this)}
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
          <h2>Select an Image</h2>
          <ul>
            {
              contentImages.map((contentImage, index) => {
                return (
                  <li key={index}>
                    <input
                      name="contentImages"
                      type="radio"
                      id={'content' + index}
                      value={contentImage.value}
                      onChange={this.handleImageSelection.bind(this)}
                      checked={this.state.selectedImage === contentImage.value}
                    />
                  <label htmlFor={'content' + index}>{contentImage.displayName}</label>
                  </li>
                );
              })
            }
          </ul>
          <button onClick={this.closeDialog.bind(this)}>submit</button>
        </Modal>
      </form>
    );
  }
}

AddCardFormComp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editorValue: PropTypes.object.isRequired,
  editorChange: PropTypes.func.isRequired,
  contentImages: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

const AddCardForm = reduxForm({
  form: 'add-card'
})(AddCardFormComp);

export default AddCardForm;
