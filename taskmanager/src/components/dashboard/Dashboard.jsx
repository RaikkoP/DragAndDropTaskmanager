import { useState, useEffect } from 'react'
import Form from '../form/Form'
import TaskContainer from '../taskContainer/TaskContainer'
import './Dashboard.css'
import { Task } from '../../class/Task';


export default function Dashboard() {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        console.log(taskList);
    })

    function onFormSubmit(task, priority, description, setTask, setPriority, setDescription) {
        const newTask = new Task(task, priority, description);
        setTaskList([...taskList, newTask]);
        console.log(task, priority, description);
        console.log(taskList);
        setTask('');
        setPriority('Low');
        setDescription('');
    }

    function onDragOver(e) {
        e.preventDefault();
    }

    function startDragging(e, title, priority, description, location) {
        console.log('dragstarts', title);
        const data = JSON.stringify({ title, priority, description, location });
        e.dataTransfer.setData('data', data);
    }


    function onDrop(e, newLocation) {
        e.preventDefault();
        const data = e.dataTransfer.getData('data');
        const { title, priority, description, location } = JSON.parse(data);
        setTaskList((prevTaskList) => {
            const updatedTaskList = prevTaskList.map((task) => {
                if (task.title === title && task.priority === priority && task.description === description) {
                    return { ...task, location: newLocation };
                }
                return task;
            });
            return updatedTaskList;
        });
    }
    console.log(taskList);


return (
    <>
        <div className='flex m-12 justify-center text-center h-[60vh]'>
            <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'backlog')} className='flex-1 overflow-y-auto'>
                <div>
                    <h2 className='text-4xl'>Backlog</h2>
                </div>
                <div className='h-auto mt-3'>
                    {taskList.length > 0 &&
                    taskList
                        .filter((task) => task.location === 'backlog')
                        .map((task, index) => (
                            <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description, task.location)} className=' my-5 border-2 rounded-lg w-[320px]'>
                                <h3 className='text-2xl'>{task.title}</h3>
                                <p>Priority: <b>{task.priority}</b></p>
                                <p>{task.description}</p>
                            </div>
                        ))}
                </div>
            </div>
            <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e,'toDo')} className='flex-1 overflow-y-auto'>
                <div>
                    <h2 className='text-4xl'>To-DO</h2>
                </div>
                <div className='h-auto mt-3'>
                {taskList.length > 0 &&
                    taskList
                        .filter((task) => task.location === 'toDo')
                        .map((task, index) => (
                            <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description, task.location)} className=' my-5 border-2 rounded-lg w-[320px]'>
                                <h3 className='text-2xl'>{task.title}</h3>
                                <p>Priority: <b>{task.priority}</b></p>
                                <p>{task.description}</p>
                            </div>
                        ))}
                </div>
            </div>
            <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'inProgress')} className='flex-1 overflow-y-auto'>
                <div>
                    <h2 className='text-4xl'>In Progress</h2>
                </div>
                <div className='h-auto mt-3'>
                {taskList.length > 0 &&
                    taskList
                        .filter((task) => task.location === 'inProgress')
                        .map((task, index) => (
                            <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description, task.location)} className=' my-5 border-2 rounded-lg w-[320px]'>
                                <h3 className='text-2xl'>{task.title}</h3>
                                <p>Priority: <b>{task.priority}</b></p>
                                <p>{task.description}</p>
                            </div>
                        ))}
                </div>
            </div>
            <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'done')} className='flex-1 overflow-y-auto'>
                <div>
                    <h2 className='text-4xl'>Done</h2>
                </div>
                <div className='h-auto mt-3'>
                    {taskList.length > 0 &&
                    taskList
                        .filter((task) => task.location === 'done')
                        .map((task, index) => (
                            <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description, task.location)} className=' my-5 border-2 rounded-lg w-[320px]'>
                                <h3 className='text-2xl'>{task.title}</h3>
                                <p>Priority: <b>{task.priority}</b></p>
                                <p>{task.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        <div className='flex'>
            <Form onSubmit={onFormSubmit} tasks={setTaskList}></Form>
            <TaskContainer onDragStart={startDragging} tasks={taskList}></TaskContainer>
        </div>
    </>
)
};