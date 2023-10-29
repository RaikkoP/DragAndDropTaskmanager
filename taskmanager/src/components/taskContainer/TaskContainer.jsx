import { useEffect, useState } from "react";

export default function TaskContainer(props) {

    useEffect(() => {
        console.log(props.tasks);
    })

    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-0 overflow-y-auto h-[20em] w-[1200px] text-center">
            {props.tasks.length > 0 &&
                props.tasks
                .filter((task) => task.location === 'waiting')
                .map((task, index) => (
                    <div key={index} draggable onDragStart={(e) => props.onDragStart(e, task.title, task.priority, task.description, task.location)} className=' my-5 border-2 rounded-lg w-[314px] h-[96px]'>
                        <h3 className='text-2xl'>{task.title}</h3>
                        <p>Priority: <b>{task.priority}</b></p>
                        <p>{task.description}</p>
                    </div>
                ))}
        </div>
    )
}

