import { useState } from "react";

export default function Form() {
    const [task, setTask] = useState();
    const [priority, setPriority] = useState('low');
    const [description, setDescription] = useState('');

    function onFormSubmit(e) {
        console.log(e.target.value);
    }
    function changeTask(e) {
        setTask(e.target.value);     
    }
    function changePriority(e) {
        setPriority(e.target.value);
    }
    function changeDescription(e) {
        setDescription(e.target.value);
    }

    //Peab parandama ara button submiti, et ta console.logiks seda, informatsiooni, mis on formis

    return (
        <form className="flex flex-col w-[25vw] my-2">
            <label className="text-2xl my-2">
                Task: 
                <input className="mx-2" value={task} onChange={changeTask} type="text" name="name" placeholder="Do the task!"></input>
            </label>
            <label className="text-2xl my-2">
                Priority:
                <select value={priority} onChange={changePriority} className="mx-2">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label className="text-2xl my-2"> 
                Description:
                <input onChange={changeDescription} value={description} className="mx-2" type="text" name="description" placeholder="Describe the task!"></input>
            </label>
            <button onClick={onFormSubmit} className="p-5 border-2 text-2xl" type="button">Submit</button>
        </form>
    )
}