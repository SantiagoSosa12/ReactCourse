import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/leves.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example' , 'Default description' , false , LEVELS.NORMAL);

    const changeState = (id) => {
        console.log("Cambiar estado de una Tarea");
    }    

    return (
        <div>
            <div>
                <h1> Your Tasks: </h1>
            </div>
            {/* TODO: Aplicar un For para renderizar la lista de tareas  */}
            <TaskComponent task={ defaultTask }>

            </TaskComponent>
        </div>
    );
};




export default TaskListComponent;
