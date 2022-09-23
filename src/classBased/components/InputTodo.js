import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item'); // eslint-disable-line no-alert
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}

InputTodo.protoTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default InputTodo;
