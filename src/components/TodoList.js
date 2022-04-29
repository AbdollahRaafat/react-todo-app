import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = { todos: PropTypes.instanceOf(Array).isRequired };
TodosList.propTypes = { setUpdate: PropTypes.instanceOf(Function).isRequired };
TodosList.propTypes = { handleChangeProps: PropTypes.instanceOf(Function).isRequired };
TodosList.propTypes = { deleteTodoProps: PropTypes.instanceOf(Function).isRequired };

export default TodosList;
