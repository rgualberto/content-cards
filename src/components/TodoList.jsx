import React, {PropTypes} from 'react';
import TodoCard from './TodoCard';

class TodoList extends React.Component {
  buildTodoItems() {
    return this.props.todoCards.map(function(card, i) {
          return <TodoCard cardData={card} key={i}/>;
        });
  }

  render() {
    let todoItems = this.buildTodoItems();

    return (
      <div className="card-list">
        {todoItems}
        <TodoCard cardData={{addCard: true}} />
      </div>
    );
  }
}

TodoList.propTypes = {
  todoCards: PropTypes.array.isRequired
};

export default TodoList;
