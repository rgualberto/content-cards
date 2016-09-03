import React, {PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import RichTextEditor from 'react-rte';

const renderInput = (props) => {
  return (
    <div>
      <input {...props.input}/>
      {props.touched &&
       props.error &&
       <span className="error">{props.error}</span>}
    </div>
  );
}


class AddCardForm extends React.Component {
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
        <br/>
        <Field
            name="image"
            component={renderInput}
            type="text"
            placeholder="Image"
        />
        <br/>
        <RichTextEditor
            value={editorValue}
            onChange={editorChange}
        />
        <br/>
        <button type="submit">Submit</button>
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
