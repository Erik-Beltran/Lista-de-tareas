import React from 'react'
import TaskRow from './TaskRow'

const VisibilityContol = ({ isChecked, showClompeted, taskDone, toggleTask }) => {
    return (
        <div>
            <div class="form-check">
                <input class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    onChange={isChecked}
                    checked={showClompeted}
                />
                <label
                    class="form-check-label"
                    for="defaultCheck1">
                    Mostrar tareas realizadas
                </label>
            </div>
            {
                showClompeted && (
                    <TaskRow
                        arrayOfTask={taskDone}
                        toggleTask={toggleTask}
                    />)
            }

        </div>
    )

}

export default VisibilityContol;