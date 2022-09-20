import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.PureComponent {
  render() {
    const { todos, handleChange, deleteTodo, setUpdate } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem 
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          setUpdate={setUpdate} />
        ))}
      </ul>
    )
  }
}

export default TodosList
