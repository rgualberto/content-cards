import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
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
  // actions: PropTypes.object.isRequired,
  todoCards: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    todoCards: state.todos
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FuelSavingsPage);

export default connect(mapStateToProps)(TodoPage);