import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoProps }) => {
  const [inputText, setInputText] = useState({ title: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    }
  };

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        name="title"
        placeholder="Add Todo..."
        value={inputText.title}
        onChange={onChange}
      />
      <button type="button" aria-label="submit" className="input-submit"><FaPlusCircle /></button>
    </form>
  );
};

InputTodo.propTypes = { addTodoProps: PropTypes.instanceOf(Function).isRequired };

export default InputTodo;
