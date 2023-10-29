import { useState, useEffect } from 'react'
import Form from '../form/Form'
import TaskContainer from '../taskContainer/TaskContainer'
import './Dashboard.css'
import { Task } from '../../class/Task';


export default function Dashboard() {

    const [taskList, setTaskList] = useState([]);
    const [backlogList, setBacklogList] = useState([]);
    const [toDoList, setToDoList] = useState([]);
    const [inProgressList, setInProgressList] = useState([]);
    const [doneList, setDoneList] = useState([]);

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

    function startDragging(e, title, priority, description, location, setLocation) {
        console.log('dragstarts', title);
        const data = JSON.stringify({ title, priority, description, location, setLocation });
        e.dataTransfer.setData('data', data);
    }


    function onDrop(e, statusSetList, statusList) {
        e.preventDefault();
        const data = e.dataTransfer.getData('data');
        const { title, priority, description, location, setLocation } = JSON.parse(data);
        const findTask = location.find((task) => (
            task.title === title && task.priority === priority && task.description === description));
        if (findTask) {
            statusSetList((statusList) => [...statusList, findTask]);
            setLocation((location) => location.filter((task) => task !== findTask));
            console.log(location);
        }
    }

    return (
        <>
            <div className='flex m-12 justify-center text-center h-[60vh]'>
                <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, setBacklogList, backlogList)} className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>Backlog</h2>
                    </div>
                    <div className='h-auto mt-3'>
                        {backlogList.length > 0 &&
                            backlogList.map((task, index) => (
                                <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description, backlogList, setBacklogList)} className=' my-5 border-2 rounded-lg w-[320px]'>
                                    <h3 className='text-2xl'>{task.title}</h3>
                                    <p>Priority: <b>{task.priority}</b></p>
                                    <p>{task.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, setToDoList, toDoList)} className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>To-DO</h2>
                    </div>
                    <div className='h-auto mt-3'>
                        {toDoList.length > 0 &&
                            toDoList.map((task, index) => (
                                <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description, toDoList, setToDoList)} className=' my-5 border-2 rounded-lg w-[320px]'>
                                    <h3 className='text-2xl'>{task.title}</h3>
                                    <p>Priority: <b>{task.priority}</b></p>
                                    <p>{task.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, setInProgressList, inProgressList)} className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>In Progress</h2>
                    </div>
                    <div className='h-auto mt-3'>
                        {inProgressList.length > 0 &&
                            inProgressList.map((task, index) => (
                                <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description)} className=' my-5 border-2 rounded-lg w-[320px]'>
                                    <h3 className='text-2xl'>{task.title}</h3>
                                    <p>Priority: <b>{task.priority}</b></p>
                                    <p>{task.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, setDoneList, doneList)} className='flex-1 overflow-y-auto'>
                    <div>
                        <h2 className='text-4xl'>Done</h2>
                    </div>
                    <div className='h-auto mt-3'>
                        {doneList.length > 0 &&
                            doneList.map((task, index) => (
                                <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description)} className=' my-5 border-2 rounded-lg w-[320px]'>
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
                <TaskContainer onDragStart={startDragging} tasks={taskList} setTasks={setTaskList} ></TaskContainer>
            </div>
        </>
    )
};