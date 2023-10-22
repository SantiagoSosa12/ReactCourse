import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/leves.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({addTask, lengthTasks}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    const agregateTask = (e) => {
        e.preventDefault();
        const newTask = new Task (
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        addTask(newTask);
    }

    return (
        <form onSubmit={agregateTask} className='d-flex justify-content-center aling-items-center mb4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' 
                className='form-control from-control-lg' required autoFocus placeholder='Task Name'/>
                <br/>
                <input ref={descriptionRef} id='inputDescription' type='text' 
                className='form-control from-control-lg' required placeholder='Task Description'/>
                <br/>
                <label htmlFor='selectLevel' className='form-control from-control-lg'>Priority</label>
                <br/> <br/>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL} > Normal </option>
                    <option value={LEVELS.URGENT} > Urgent </option>
                    <option value={LEVELS.BLOCKING} > Blocking </option>
                </select> 
                <br/> <br/>
                <button type='submit' className='btn btn-success btn-lg ms-2'> {lengthTasks > 0 ? 'Add New Task' : 'Create your First Taks'} </button>
            </div>
        </form>
    );
}

TaskForm.Prototypes = {
    addTask: PropTypes.func.isRequired,
    lengthTasks: PropTypes.number.isRequired
}

export default TaskForm;
