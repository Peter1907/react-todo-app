import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const data = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(data);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const data = JSON.stringify(todos);
      localStorage.setItem('todos', data);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo
        }),
      }
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  };

   render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo
            addTodo={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChange={this.handleChange}
            deleteTodo={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer