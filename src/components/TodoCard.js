import React, {PropTypes} from 'react';

class TodoCard extends React.Component {
  render() {
    const {cardData} = this.props;

    return (
      <div className="card">
        <div className="card__container">
          <h2 className="card__title">{cardData.title}</h2>
          <div className="card__content">
            <ul>
              {cardData.todos.map(function(todo) {
                return <li>{todo}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TodoCard.propTypes = {
  todos: PropTypes.object.isRequired
};

export default TodoCard;
