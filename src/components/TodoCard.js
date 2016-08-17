import React, {PropTypes} from 'react';

class TodoCard extends React.Component {
  render() {
    const {cardData} = this.props;
    const imageClass = "card__image card__image--" + cardData.image;

    return (
      <div className="card">
        <div className="card__container">
          <div className={imageClass}></div>
          <h2 className="card__title">{cardData.title}</h2>
          <div className="card__content">
            <ul>
              {cardData.todos.map(function(todo, i) {
                return <li key={i}>{todo}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TodoCard.propTypes = {
  cardData: PropTypes.object.isRequired
};

export default TodoCard;
