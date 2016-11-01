import React, {PropTypes} from 'react';
import ContentCard from './ContentCard.jsx';

class ContentList extends React.Component {
  buildCardItems() {
    const removeCard = this.props.removeCard;

    return this.props.contentCards.map(function(card, i) {
          return (
            <ContentCard
              cardData={card}
              key={i}
              removeCard={removeCard}
            />
          );
        });
  }

  render() {
    let cardItems = this.buildCardItems();

    return (
      <div className="card-list">
        {cardItems}
        <ContentCard cardData={{addCard: true}} />
      </div>
    );
  }
}

ContentList.propTypes = {
  removeCard: PropTypes.func.isRequired,
  contentCards: PropTypes.array.isRequired
};

export default ContentList;
