import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';

export const TodoPage = (props) => {
  return (
    <div className="page-main">
      <h1>Todo Stuff Listed!</h1>
      <TodoList contentCards={props.contentCards} />
    </div>
  );
};

TodoPage.propTypes = {
  contentCards: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    contentCards: state.allContent.contentCards
  };
}

export default connect(mapStateToProps)(TodoPage);
