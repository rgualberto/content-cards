import _ from 'lodash';
import React, {PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import RichTextEditor from 'react-rte';
import ImageModal from './ImageModal.jsx';
import RenderInput from './RenderInput.jsx';

class AddCardFormComp extends React.Component {
  constructor() {
    super(...arguments);

    this.openDialog = this.openDialog.bind(this);
    this.triggerCloseDialog = this.triggerCloseDialog.bind(this);
    this.cancelImageSelection = this.cancelImageSelection.bind(this);
    this.onDialogOpen = this.onDialogOpen.bind(this);
    this.handleImageSelection = this.handleImageSelection.bind(this);
    this.saveImageSelection = this.saveImageSelection.bind(this);

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

  submitForm(event) {
    if (this.validate(`#${event.currentTarget.id}`)) {
      this.props.handleSubmit(event);
    } else {
      event.preventDefault();
    }
  }

  validate(formSelector) {
    const requiredFields = ['image', 'title'],
          errors = _.compact(_.map(requiredFields, fieldName => {
            let field = document.querySelector(`${formSelector} [name="${fieldName}"]`);

            if (_.isEmpty(field.value)) {
              field.classList.add('error');

              return true;
            }

            return false;
          }));

    return _.isEmpty(errors);
  }

  render() {
    const {
      editorValue,
      editorChange,
      contentImages
    } = this.props;

    return (
      <form onSubmit={this.submitForm.bind(this)} id="add-card-form">
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
            placeholder="Title*"
        />
        <RichTextEditor
            value={editorValue}
            onChange={editorChange}
            className="text-box text-box--editor"
        />
        <div>
          <button type="submit" className="button">Add It!</button>
        </div>

        <ImageModal
          contentImages={contentImages}
          selectedImage={this.state.selectedImage}
          dialogIsOpen={this.state.dialogIsOpen}
          onDialogOpen={this.onDialogOpen}
          cancelImageSelection={this.cancelImageSelection}
          handleImageSelection={this.handleImageSelection}
          saveImageSelection={this.saveImageSelection}
        />
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
