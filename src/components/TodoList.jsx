import React, {PropTypes} from 'react';
import TodoCard from './TodoCard';

class TodoList extends React.Component {
  buildCardItems() {
    return this.props.contentCards.map(function(card, i) {
          return <TodoCard cardData={card} key={i}/>;
        });
  }

  render() {
    let cardItems = this.buildCardItems();

    return (
      <div className="card-list">
        {cardItems}
        <TodoCard cardData={{addCard: true}} />
      </div>
    );
  }
}

TodoList.propTypes = {
  contentCards: PropTypes.array.isRequired
};

export default TodoList;
