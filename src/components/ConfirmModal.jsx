import React, {PropTypes} from 'react';
import Modal from 'react-modal';
import {TimelineLite} from 'gsap';
import _ from 'lodash';

class ConfirmModal extends React.Component {
  handleDialogOpen() {
    const timeLine = new TimelineLite,
          {modalOverlay, modal, app, body} = this.getDOMSelections(),
          bodyStyles = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#000000'
          };

    timeLine.set(body, bodyStyles);
    timeLine.set(app, {height: '100%', overflow: 'hidden'});
    timeLine.to(app, 0.15, {scale: 0.9});
    timeLine.from(modalOverlay, 0.15, {opacity: 0}, 0);
    timeLine.from(modal, 0.15, {top: '100%'});
  }

  handleCloseAnimation(executeCallback) {
    const timeLine = new TimelineLite,
          {modalOverlay, modal, app, body} = this.getDOMSelections();

    timeLine.set(modalOverlay, {opacity: 1});
    timeLine.set(modal, {top: '100%'});
    timeLine.to(app, 0.15, {scale: 1, onComplete: _.partial(this.props.closeDialog, executeCallback)});
    timeLine.set(body, {clearProps: 'all'});
    timeLine.set(app, {clearProps: 'height,overflow'});
  }

  getDOMSelections() {
    return {
      modalOverlay: document.querySelector('.dialog-overlay'),
      modal: document.querySelector('.dialog'),
      app: document.querySelector('#app'),
      body: document.querySelector('body')
    };
  }

  render() {
    const {
      dialogIsOpen,
      confirmMessage
    } = this.props;


    return (
      <Modal
        isOpen={dialogIsOpen}
        onAfterOpen={this.handleDialogOpen.bind(this)}
        className="dialog dialog--modal"
        overlayClassName="dialog-overlay dialog-overlay--modal"
        style={{overlay: {overflow: 'scroll'}}}
      >
        <div className="dialog__content">
          <h2>{confirmMessage}</h2>
          <ul className="inline-list inline-list--no-separator">
            <li><button type="button" onClick={this.handleCloseAnimation.bind(this, true)} className="button button--small button--green">Yea!</button></li>
            <li><button type="button" onClick={this.handleCloseAnimation.bind(this, false)} className="button button--small button--red">Nope.</button></li>
          </ul>
        </div>
      </Modal>
    );
  }
}

ConfirmModal.propTypes = {
  dialogIsOpen: PropTypes.bool.isRequired,
  confirmMessage: PropTypes.string.isRequired,
  closeDialog: PropTypes.func.isRequired
};

export default ConfirmModal;
