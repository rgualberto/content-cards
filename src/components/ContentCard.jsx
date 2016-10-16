import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

class ContentCard extends React.Component {
  displayForm  () {
    browserHistory.push('/add-card');
  }

  renderAddCard () {
    return (
      <div className="card__container card__container--add-card" onClick={this.displayForm} />
    );
  }

  renderContentCard () {
    const {cardData} = this.props;
    const imageClass = "card__image card__image--" + cardData.image;

    return (
      <div className="card__container">
        <div className={imageClass} />
        <h2 className="card__title">{cardData.title}</h2>
        <div className="card__content">
          <div dangerouslySetInnerHTML={{__html: cardData.content}} />
        </div>
      </div>
    );
  }

  getCardContent () {
    if (this.props.cardData.hasOwnProperty('addCard') && this.props.cardData.addCard) {
      return this.renderAddCard();
    }
    else {
      return this.renderContentCard();
    }
  }

  render () {
    const cardRender = this.getCardContent();

    return (
      <div className="card">{cardRender}</div>
    );
  }
}

ContentCard.propTypes = {
  cardData: PropTypes.object.isRequired
};

export default ContentCard;
