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
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
            />
            <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                disabled={!editMode}
            />
            <span className="timestamp">{formatDate(updateDate)}</span>
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
