import { useState } from 'react';
import PropTypes from 'prop-types';

export default function TaskForm({ addTask }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="task-input-container">
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
};
