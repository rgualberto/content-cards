import React, {PropTypes} from 'react';
import Modal from 'react-modal';

class ImageModal extends React.Component {
  handleDialogOpen() {
    this.refs.dialogClose.focus();
    this.props.onDialogOpen();
  }

  render() {
    const {
      contentImages,
      selectedImage,
      dialogIsOpen,
      cancelImageSelection,
      handleImageSelection,
      saveImageSelection
    } = this.props;

    return (
      <Modal
        isOpen={dialogIsOpen}
        onAfterOpen={this.handleDialogOpen.bind(this)}
        className="dialog"
        style={{overlay: {overflow: 'scroll'}}}
      >
        <button ref="dialogClose" className="dialog__close" onClick={cancelImageSelection}>X</button>
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
                    onChange={handleImageSelection}
                    checked={selectedImage === contentImage.value}
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
        <button onClick={saveImageSelection} className="button">submit</button>
      </Modal>
    );
  }
}

ImageModal.propTypes = {
  contentImages: PropTypes.array,
  selectedImage: PropTypes.string,
  dialogIsOpen: PropTypes.bool,
  onDialogOpen: PropTypes.func,
  cancelImageSelection: PropTypes.func,
  handleImageSelection: PropTypes.func,
  saveImageSelection: PropTypes.func
};

export default ImageModal;
