import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "../../store/actions/todos";

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      {todos.map(t => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
    <button onClick={() => addTodo("Estudar React")}>Adicionar</button>
  </Fragment>
);

TodoList.prototype = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);
//addTodo: text => dispatch({ type: "ADD_TODO", payload: { text } })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
