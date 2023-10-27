export default function TaskContainer(props) {
    return (
        <div className=" flex justify-center text-center">
            <div className='my-4 mx-2 border-2 rounded-lg w-[314px] h-[96px]'>
                <h3>{props.title}</h3>
                <p>Priority: <b>{props.priority}</b></p>
                <p>{props.description}</p>
            </div>
        </div> 
    )
}