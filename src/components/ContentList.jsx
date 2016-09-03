import React, {PropTypes} from 'react';
import ContentCard from './ContentCard';

class ContentList extends React.Component {
  buildCardItems() {
    return this.props.contentCards.map(function(card, i) {
          return <ContentCard cardData={card} key={i}/>;
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
  contentCards: PropTypes.array.isRequired
};

export default ContentList;
