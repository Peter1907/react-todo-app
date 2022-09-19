import React from "react"

class InputTodo extends React.PureComponent {
  state = {
    title: ""
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodo(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          className="input-text"
          type="text" placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo