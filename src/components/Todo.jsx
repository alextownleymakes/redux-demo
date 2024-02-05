import React, { useState } from 'react';
import { formatDate } from './utils/FormatDate';

const Todo = ({ todo, todoFunctions }) => {
    const { id, title, completed, updateDate } = todo;
    const [editedTitle, setEditedTitle] = useState(title);
    const [editMode, setEditMode] = useState(false);

    const handleCheckboxChange = () => {
        todoFunctions.completeTodo(id);
    };

    const handleSaveClick = () => {
        todoFunctions.updateTodo(id, editedTitle);
        setEditMode(false);
    };

    const handleDeleteClick = () => {
        todoFunctions.deleteTodo(id);
    };

    return (
        <div className="todo-item">
            <div className="timestamp">{formatDate(updateDate)}</div>
            <textarea
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                disabled={!editMode}
                className={`todo-content ${editMode ? 'tc-em' : ''}`}
            />
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
            />
            {editMode ?
            <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleDeleteClick}>Delete</button>
            </>
            :
            <button onClick={() => setEditMode(true)}>Edit</button>
            }
            
        </div>
    );
};

export default Todo;
