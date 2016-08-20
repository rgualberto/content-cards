import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';

export const TodoPage = (props) => {
  return (
    <div className="page-main">
      <h1>Todo Stuff Listed!</h1>
      <TodoList todoCards={props.todoCards} />
    </div>
  );
};

TodoPage.propTypes = {
  todoCards: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    todoCards: state.todos.todoCards
  };
}

export default connect(mapStateToProps)(TodoPage);
