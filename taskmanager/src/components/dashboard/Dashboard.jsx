import { useState, useEffect } from 'react'
import Form from '../Form/Form'
import TaskContainer from '../TaskContainer/TaskContainer'
import { Task } from '../../class/Task';


export default function Dashboard() {

    const [taskList, setTaskList] = useState([]);
    const [error, setError] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);
    const categories = ['backlog', 'toDo', 'inProgress', 'done'];

    useEffect(() => {
        if (firstLoad) {
          if (localStorage.getItem('taskList')) {
            const savedTaskList = JSON.parse(localStorage.getItem('taskList'));
            setTaskList(savedTaskList);
          }
          setFirstLoad(false);
        } else {
          localStorage.setItem('taskList', JSON.stringify(taskList));
        }
      }, [taskList, setTaskList, firstLoad, setFirstLoad]);
    function onFormSubmit(title, priority, description, setTask, setPriority, setDescription) {
        const newTask = new Task(title, priority, description);
        if (title === ''){
            return setError('Task cant be empty');
        }
        if (description === '') {
            return setError('Description cant be empty');
        }
        if (taskList.find((element) => element.title === title || element.title === title && element.description === description)) {
            return setError('Duplicate task');
        }
        setError('');
        setTaskList([...taskList, newTask]);
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
        const { title, priority, description } = JSON.parse(data);
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
    return (
        <>
        {error && 
            <div>
                <h2 className='text-center text-red-500 text-2xl'>{error}</h2>
            </div>
        }
        {!error && 
            <div>
                
            </div>
        }
            <div className='flex m-12 justify-center text-center h-[60vh]'>
                {categories.map((category) => (
                    <div key={category} onDragOver={onDragOver} onDrop={(e) => onDrop(e, category)} className='flex-1 overflow-y-auto '>
                        <div>
                            <h2 className='text-4xl'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        </div>
                        <div className='h-auto mt-3 flex flex-col items-center'>
                            {taskList.length > 0 &&
                                taskList
                                    .filter((task) => task.location === category)
                                    .map((task, index) => (
                                        <div key={index} draggable onDragStart={(e) => startDragging(e, task.title, task.priority, task.description, task.location)} className='my-5 border-2 rounded-lg w-[314px] h-[96px]'>
                                            <h3 className='text-2xl'>{task.title}</h3>
                                            <p>Priority: <b>{task.priority}</b></p>
                                            <p>{task.description}</p>
                                        </div>
                                    ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex'>
                <Form onSubmit={onFormSubmit} tasks={setTaskList} />
                <TaskContainer onDragStart={startDragging} tasks={taskList} />
            </div>
        </>
    );
}