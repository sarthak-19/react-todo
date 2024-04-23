import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faTrash, faEdit, faSave, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function SingleTask({ task, deleteTask, toggleComplete, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <div className="task">
            <div className="taskInfo">
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                ) : (
                    <label
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                    >
                        {task.text}
                    </label>
                )}
            </div>

            <div className="taskButtons">
                {task.completed ? (
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faTimes} onClick={() => toggleComplete(task.id)} />
                    </div>
                ) : (
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faCheck} onClick={() => toggleComplete(task.id)} />
                    </div>
                )}
                <button onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                {isEditing ? (
                    <button onClick={handleEdit}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SingleTask;
SingleTask.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired
};
