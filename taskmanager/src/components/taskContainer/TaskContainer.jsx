import { useEffect, useState } from "react"

export default function TaskContainer(props) {

    useEffect(() => {
        console.log(props.tasks);
    })

    function dragEvent() {

    }

    return (
        <div className="grid grid-cols-3 gap-x-8 gap-y-0 overflow-y-auto h-[20em] w-[932px] text-center">
            {props.tasks.length === null &&
                <div></div>
            }
            {props.tasks.length > 0 &&
                props.tasks.map((task, index) => (
                    <div key={index} draggable onDrag={dragEvent} className=' my-4 mx-6 border-2 rounded-lg w-[314px] h-[96px]'>
                        <h3>{task.title}</h3>
                        <p>Priority: <b>{task.priority}</b></p>
                        <p>{task.description}</p>
                    </div>
                ))}
        </div>
    )
}