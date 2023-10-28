import { useEffect, useState } from "react";

export default function TaskContainer(props) {

    useEffect(() => {
        console.log(props.tasks);
    })

    function onDragStart(e, title, priority, description) {
        console.log('dragstarts', title);
        const data = JSON.stringify({ title, priority, description });
        e.dataTransfer.setData('data', data);
    }

    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-0 overflow-y-auto h-[20em] w-[1200px] text-center">
            {props.tasks.length > 0 &&
                props.tasks.map((task, index) => (
                    <div key={index} draggable onDragStart={(e) => onDragStart(e, task.title, task.priority, task.description)} className=' my-4 mx-6 border-2 rounded-lg w-[314px] h-[96px]'>
                        <h3>{task.title}</h3>
                        <p>Priority: <b>{task.priority}</b></p>
                        <p>{task.description}</p>
                    </div>
                ))}
        </div>
    )
}