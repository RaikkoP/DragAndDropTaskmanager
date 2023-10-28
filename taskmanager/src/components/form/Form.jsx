import { useEffect, useState } from "react";
import { Task } from "../../class/Task";

export default function Form(props) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Low');
    const [description, setDescription] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        props.tasks(taskList);
    }, [taskList])

    function onFormSubmit() {
        setTaskList([...taskList, new Task(task, priority, description)]);
        props.tasks(taskList);
        console.log(task, priority, description);
        console.log(taskList);
        setTask('');
        setPriority('low');
        setDescription(''); 
    }
    function changeTask(e) {
        setTask(e.target.value);
        e.preventDefault()   
    }
    function changePriority(e) {
        setPriority(e.target.value);
        e.preventDefault()   
    }
    function changeDescription(e) {
        setDescription(e.target.value);
        e.preventDefault()   
    }

    return (
        <form className="flex flex-col w-[25vw] my-2">
            <label className="text-2xl my-2">
                Task: 
                <input className="mx-2" value={task} onChange={changeTask} type="text" name="name" placeholder="Do the task!"></input>
            </label>
            <label className="text-2xl my-2">
                Priority:
                <select value={priority} onChange={changePriority} className="mx-2">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </label>
            <label className="text-2xl my-2"> 
                Description:
                <input onChange={changeDescription} value={description} className="mx-2" type="text" name="description" placeholder="Describe the task!"></input>
            </label>
            <button className="p-5 border-2 text-2xl" onClick={onFormSubmit} type="button">Submit</button>
        </form>
    )
}