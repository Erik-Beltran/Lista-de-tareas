import React from 'react'

const TaskBanner = ({ handleSubmitFN, handleChangeFN, task }) => {

    return (
        <div>
            <h1 >Lista de Tareas</h1>
            <form class="form-inline" onSubmit={handleSubmitFN}>
                <input class="form-control mr-sm-2"
                    type="text"
                    placeholder="Tarea"
                    onChange={handleChangeFN}
                    value={task}
                />
                <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit">
                    Agregar
                    </button>
            </form>
        </div>
    )


}

export default TaskBanner;