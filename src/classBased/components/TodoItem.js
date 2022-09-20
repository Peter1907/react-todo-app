import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  componentWillUnmount() {
    console.log("Cleaning up...")
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      this.setState({ editing: false })
    }
  };
  
  render() {
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }
    
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;
    const { handleChange, deleteTodo, setUpdate } = this.props;

    return (
    <li className={styles.item} key={id}>
      <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input
          type="checkbox" checked={completed}
          className={styles.checkbox}
          onChange={() => handleChange(id)}
        />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
      <input type="text" style={editMode} className={styles.textInput} value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id)
        }}
        onKeyDown={this.handleUpdatedDone}
      />
    </li>
    )
  }
}

export default TodoItem