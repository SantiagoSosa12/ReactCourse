import React from 'react';
import { useParams } from 'react-router-dom'

const TaskDetailPage = ({task}) => {

    const { taskID } = useParams();


    return (
        <div>
            <h1> Task Detail -- {taskID} </h1>
        </div>
    );
}

export default TaskDetailPage;
