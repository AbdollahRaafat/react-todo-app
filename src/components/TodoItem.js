import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({
  todo, handleChangeProps, deleteTodoProps, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const { completed, id, title } = todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />

        <button type="button" aria-label="delete" onClick={() => deleteTodoProps(id)}><FaTrash className="delete-icon" /></button>

        <span className={completed ? styles.completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => { setUpdate(e.target.value, id); }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = { setUpdate: PropTypes.instanceOf(Function).isRequired };
TodoItem.propTypes = { handleChangeProps: PropTypes.instanceOf(Function).isRequired };
TodoItem.propTypes = { todo: PropTypes.instanceOf(Object).isRequired };
TodoItem.propTypes = { deleteTodoProps: PropTypes.instanceOf(Function).isRequired };

export default TodoItem;
