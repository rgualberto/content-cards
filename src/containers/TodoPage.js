import React from 'react';
// import {Link} from 'react-router';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  return (
    <div className="page-main">
      <h1>Todo Stuff Listed!</h1>
      <TodoList />
    </div>
  );
};

export default TodoPage;
