import React, {PropTypes} from 'react';
import TodoCard from './TodoCard';

class TodoList extends React.Component {
  buildTodoItems() {
    return this.props.todoCards.map(function(card) {
          return <TodoCard cardData={card}/>;
        });
  }

  save() {
    // this.props.saveFuelSavings(this.props.fuelSavings);
  }

  render() {
    let todoItems = this.buildTodoItems();

    return (
      <div className="card-list">{todoItems}</div>
    );
  }
}

TodoList.propTypes = {
  todoCards: PropTypes.array.isRequired
};

export default TodoList;
