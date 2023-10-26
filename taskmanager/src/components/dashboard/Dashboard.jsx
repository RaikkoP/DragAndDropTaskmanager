import Form from '../form/Form'
import './Dashboard.css'

export default function Dashboard() {

    return (
        <>
            <div className='flex m-12 justify-center text-center'>
                <div className='flex-1'>
                    <div>
                        <h2 className='text-4xl'>Backlog</h2>
                    </div>
                    <div className='h-auto mt-3'>
                        <div className='my-4 mx-2 border-2 rounded-lg'>
                            <h3>Clean Toilet</h3>
                            <p>Priority: <b>Medium</b></p>
                            <p>It smells really bad and My Mom is going to beat me if I dont</p>
                        </div>

                        <div className='my-4 mx-2 border-2 rounded-lg'>
                            <h3>Clean Toilet</h3>
                            <p>Priority: <b>Medium</b></p>
                            <p>It smells really bad and My Mom is going to beat me if I dont</p>
                        </div>
                        
                    </div>
                </div>
                <div className='flex-1'>
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
                <div className='flex-1'>
                    <div>
                        <h2 className='text-4xl'>In Progress</h2>
                    </div>
                    <div className='h-auto  mt-3'>

                    </div>
                </div>
                <div className='flex-1'>
                    <div>
                        <h2 className='text-4xl'>Done</h2>
                    </div>
                    <div className='h-auto mt-3'>

                    </div>
                </div>
            </div>
            <Form></Form>
        </>
    )
};