import React, {PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import RichTextEditor from 'react-rte';
import Modal from 'react-modal';
import RenderInput from './RenderInput.jsx';

class AddCardFormComp extends React.Component {
  constructor() {
    super(...arguments);

    this.openDialog = this.openDialog.bind(this);
    this.triggerCloseDialog = this.triggerCloseDialog.bind(this);

    this.state = {
      dialogIsOpen: false,
      selectedImage: this.props.contentImages[0].value,
      initialImage: this.props.contentImages[0].value
    };

    // set initial values
    this.changeInputValue('image', this.state.selectedImage);
  }

  changeInputValue(field, value) {
    const dispatchAction = this.props.change(field, value);

    this.props.dispatch(dispatchAction);
  }

  openDialog() {
    this.setState({dialogIsOpen: true});

    window.addEventListener('keydown', this.triggerCloseDialog);
  }

  closeDialog() {
    this.setState({dialogIsOpen: false});
  }

  triggerCloseDialog(event) {
    if (event.key === 'Escape') {
      this.closeDialog();

      window.removeEventListener('keydown', this.triggerCloseDialog);
    }
  }

  onDialogOpen() {
    this.refs.dialogClose.focus();
    this.setState({
      ...this.state,
      initialImage: this.state.selectedImage
    });
  }

  saveImageSelection() {
    this.changeInputValue('image', this.state.selectedImage);
    this.closeDialog();
  }

  cancelImageSelection() {
    this.setState({
      ...this.state,
      selectedImage: this.state.initialImage
    });
    this.closeDialog();
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
            name="image"
            component={RenderInput}
            type="hidden"
        />
        <p>Click image to change</p>
        <div
          className={"image-box image-box--" + this.state.selectedImage}
          onClick={this.openDialog.bind(this)}
        />
        <Field
            name="title"
            component={RenderInput}
            type="text"
            placeholder="Title"
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
          onAfterOpen={this.onDialogOpen.bind(this)}
          className="dialog"
          style={{overlay: {overflow: 'scroll'}}}
        >
          <button ref="dialogClose" className="dialog__close" onClick={this.cancelImageSelection.bind(this)}>X</button>
          <h2 className="dialog__title">Select an Image</h2>
          <ul className="image-list">
            {
              contentImages.map((contentImage, index) => {
                return (
                  <li key={index} className="image-list__item">
                    <input
                      name="contentImages"
                      className="image-list__item-input"
                      type="radio"
                      id={'content' + index}
                      value={contentImage.value}
                      onChange={this.handleImageSelection.bind(this)}
                      checked={this.state.selectedImage === contentImage.value}
                    />
                    <label htmlFor={'content' + index} className="image-list__item-label">
                      <div
                        className={"image-box image-box--" + contentImage.value}
                      />
                    <p>{contentImage.displayName}</p>
                    </label>
                  </li>
                );
              })
            }
          </ul>
          <button onClick={this.saveImageSelection.bind(this)} className="button">submit</button>
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
