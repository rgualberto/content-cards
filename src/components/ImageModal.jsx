import React, {PropTypes} from 'react';
import Modal from 'react-modal';
import {TimelineLite} from 'gsap';

class ImageModal extends React.Component {
  handleDialogOpen() {
    this.refs.dialogClose.focus();
    this.props.onDialogOpen();

    const timeLine = new TimelineLite,
          {modalOverlay, modal, modalContent} = this.getDOMSelections(),
          modalStyles = window.getComputedStyle(modal),
          modalTo = {
            height: `${modal.clientHeight}px`,
            padding: modalStyles.getPropertyValue('padding'),
            borderWidth: modalStyles.getPropertyValue('border-width')
          };

    timeLine.from(modalOverlay, 0.3, {left:"50%", right:"50%"});
    timeLine.to(modalOverlay, 0.4, {top: 0, height: "100%"});
    timeLine.fromTo(modal, 0.5, {height: 0, padding: 0, borderWidth: 0}, modalTo);
    timeLine.from(modalContent, 0.2, {opacity: 0});
  }

  handleCloseAnimation(callback) {
    const timeLine = new TimelineLite,
          {modalOverlay, modal} = this.getDOMSelections();

    timeLine.to(modal, 0.2, {opacity: 0});
    timeLine.to(modalOverlay, 0.4, {top: "50%", height: 0, onComplete: callback});
  }

  getDOMSelections() {
    return {
      modalOverlay: document.querySelector('.dialog-overlay'),
      modal: document.querySelector('.dialog'),
      modalContent: document.querySelector('.dialog__content')
    };
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
        overlayClassName="dialog-overlay"
        style={{overlay: {overflow: 'scroll'}}}
      >
        <div className="dialog__content">
          <button ref="dialogClose" className="dialog__close" onClick={this.handleCloseAnimation.bind(this, cancelImageSelection)}>X</button>
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
          <button onClick={this.handleCloseAnimation.bind(this, saveImageSelection)} className="button">submit</button>
        </div>
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
