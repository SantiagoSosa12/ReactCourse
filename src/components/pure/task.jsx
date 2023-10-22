import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/leves.enum';


const taskCompleted = {
    color : 'gay',
    textDecoration: 'line-through'
}

const taskPending = {
    color : 'tomato',
    textDecoration: 'bold'
}

const TaskComponent = ({ task , complete, remove}) => {

    useEffect(() => {
        console.log('Task created');
        return () => {
            console.log(`Task ${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * Return a badge
     * Depending on the level task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                <h6 className='mb-0'>
                    <span className='badge bg-primary'> { task.level } </span>
                </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'> { task.level } </span>
                    </h6>
                    );
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'> { task.level } </span>
                    </h6>
                    );
            default:
                break;
        }
    }

    /**
     * 
     * @returns toogle on if completed off in contract case
     */
    const taskIncompleted = () => {
        if (task.completed) {
            return (<i onClick= {() => complete(task)} className='bi-toggle-on task-action' style={{color : 'green' }}></i>);
        }else {
            return (<i onClick= {() => complete(task)} className='bi-toggle-off task-action' style={{color : 'gray' }}></i>);
        }
    }



    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span> { task.name }  </span> 
            </th>
            <td className='aling-middle'>
                <span> { task.description } </span>
            </td>
            <td className='aling-middle'>
                {/* Execute function return badge Element */}
                { taskLevelBadge() }
            </td>
                {/* Sustitue for icons */}
            <td className='aling-middle'>
                { taskIncompleted() }
            </td>
            <td>
                <i className='bi-trash task-action' style={{color : 'tomato'}} onClick={() => remove(task)}></i>
            </td>
        </tr>
        // <div>
        //     <h2 className='task-name'>
        //         Nombre : { task.name}
        //     </h2>
        //     <h3>
        //         Description : { task.description}
        //     </h3>
        //     <h4>
        //         Level : { task.level}
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'Completed' : 'Pending'}
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
