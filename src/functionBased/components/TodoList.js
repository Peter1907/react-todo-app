import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos,
    handleChange,
    deleteTodo,
    setUpdate
  } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  )
}

TodosList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
