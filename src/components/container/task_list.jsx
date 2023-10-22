import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/leves.enum';
import TaskComponent from '../pure/task';
//Import Styles
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask = new Task('Example 1', 'Default description 1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Default description 2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Default description 3', false, LEVELS.BLOCKING);

    const [loading, setLoading] = useState(true);

    //State of component
    const [tasks, setTask] = useState([defaultTask, defaultTask2, defaultTask3]);

    useEffect(() => {
        console.log('Task state has been modified');
        setTimeout(() => {
            setLoading(false);
        } , 2000);
        return () => {
            console.log('TaskList Component is going to unmount');
        };
    }, [tasks]);

    const completeTast = (task) => {
        console.log('Complete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];//Previous state of these task
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of component 
        // Setting a new list Task
        setTask(tempTasks);
    }

    const removeTask = (task) => {
        console.log('Remove this task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];//Previous state of these task
        tempTasks.splice(index, 1);
        setTask(tempTasks);
    }

    const agregateTask = (task) => {
        console.log('Add this task: ', task);
        const tempTasks = [...tasks];//Previous state of these task
        tempTasks.push(task);
        setTask(tempTasks);
    }

    const OwnTable = () => {
        return (<table>
            <thead>
                <tr>
                    <th scope='col'> Title </th>
                    <th scope='col'> Description </th>
                    <th scope='col'> Prority </th>
                    <th scope='col'> Actions </th>
                </tr>
            </thead>
            <tbody>
        {console.log("Smooth Criminal: " + tasks.length)}
                {tasks.map((task, index) => {
                    return (<TaskComponent key={index}
                        task={task}
                        complete={completeTast}
                        remove={removeTask}>
                    </TaskComponent>);
                })}
            </tbody>
        </table>);
    }

    
    let taskTable = (<div>
        <h3>No Tasks</h3>
        <h4>Create your first Task!!</h4>
    </div>)

    if(tasks.length > 0 ) {
        taskTable = <OwnTable></OwnTable>;
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card Bodu */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        {/* TODO: Add Loading Spinner */}
                        { loading ? <p style={loadingStyle}>Loading Tasks..</p>: taskTable}
                    </div>
                </div>
            </div>
            <TaskForm addTask={agregateTask} lengthTasks={tasks.length}> </TaskForm>
        </div>
    );
};




export default TaskListComponent;
