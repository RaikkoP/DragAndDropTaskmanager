import { useState, useEffect } from 'react'
import Form from '../form/Form'
import TaskContainer from '../taskContainer/TaskContainer'
import './Dashboard.css'

export default function Dashboard() {

    const [taskList, setTaskList] = useState([]);
    const [backlogList, setBacklogList] = useState([]);
    const [toDoList, setToDoList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    useEffect(() => {
        console.log(taskList);
    })
    
    function onDragOver(e) {
        e.preventDefault();
    }

    function onDrop(e, status) {
        e.preventDefault();
        const data = e.dataTransfer.getData('data');
        const { title, priority, description } = JSON.parse(data);
        let tasks = taskList.filter((task) => {
            if (task.title == title && task.priority == priority && task.description == description) {
                task.status = status;
                console.log(task);
                return task;
            }
        });
        return tasks;
    }

    return (
        <>
            <div className='flex m-12 justify-center text-center h-[60vh]'>
                <div onDragOver={(e)=>onDragOver(e)} onDrop={(e) => onDrop(e, 'backlog')} className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>Backlog</h2>
                    </div>
                    <div className='h-auto mt-3'>
                        
                        
                    </div>
                </div>
                <div className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>To-DO</h2>
                    </div>
                    <div className='h-auto  mt-3'>
                    <div className='my-4 mx-2 border-2 rounded-lg'>
                            <h3>Clean Toilet</h3>
                            <p>Priority: <b>Medium</b></p>
                            <p>It smells really bad and My Mom is going to beat me if I dont</p>
                        </div>
                    </div>
                </div>
                <div onDragOver={(e)=>onDragOver(e)} className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>In Progress</h2>
                    </div>
                    <div className='h-auto  mt-3'>

                    </div>
                </div>
                <div className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>Done</h2>
                    </div>
                    <div className='h-auto mt-3'>

                    </div>
                </div>
            </div>
            <div className='flex'>
                <Form tasks={setTaskList}></Form>
                <TaskContainer  tasks={taskList}></TaskContainer>
            </div>
        </>
    )
};