import React from 'react'

const TaskRow = ({ arrayOfTask, toggleTask }) => {
    return (
        <div className="taskRow">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Descripción</th>
                        <th scope="col">Realizada</th>
                    </tr>
                </thead>
                <tbody>
                    {arrayOfTask.map(task => {
                        return (
                            <tr>
                                <td>{task.descripcion}</td>
                                <td> 
                                    <input type="checkbox" 
                                    checked={task.done}
                                    onChange={()=>toggleTask(task)}>
                                    </input>
                                </td>
                            </tr>

                        )
                    }
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskRow;