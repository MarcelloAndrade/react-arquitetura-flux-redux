import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const TodoList = props => {
  TodoList.prototype = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string
      })
    ).isRequired
  };
  console.log(props);
  return (
    <ul>
      {props.todos.map(t => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
