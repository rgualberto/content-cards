import React, {PropTypes} from 'react';

const RenderInput = (props) => {
  return (
    <div>
      <input {...props.input} className="text-box" />
      {props.touched &&
       props.error &&
       <span className="error">{props.error}</span>}
    </div>
  );
};

RenderInput.propTypes = {
  input: PropTypes.object.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default RenderInput;
