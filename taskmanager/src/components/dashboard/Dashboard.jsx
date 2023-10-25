import './Dashboard.css'

export default function Dashboard() {

    return (
        <>
            <div className='flex flex-col justify-between'>
                <h1 className="text-6xl flex pt-8 justify-center">Taskmanager</h1>
                <div className='grid grid-cols-7 mt-16 mx-6 content-center border-2'>
                    <div className='border-x-2'>
                        <h2 className='text-4xl text-center'>Monday</h2>
                        <div>
                            <div>
                                <h3>Task 1</h3>
                                <p>Get the water so we make make some cake lole</p>
                            </div>
                            <div>
                                <h3>Task 2</h3>
                                <p>Get the water so we make make some cake lole</p>
                            </div>
                            <div>
                                <h3>Task 3</h3>
                                <p>Get the water so we make make some cake lole</p>
                            </div>
                            <div>
                                <h3>Task 4</h3>
                                <p>Get the water so we make make some cake lole</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-x-2'>
                        <h2 className='text-4xl text-center'>Tuesday</h2>
                        <div>
                            <div>
                                <h3>Task 4</h3>
                                <p>Get the water so we make make some cake lole</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-x-2'>
                        <h2 className='text-4xl text-center'>Wednesday</h2>
                    </div>
                    <div className='border-x-2'>
                        <h2 className='text-4xl text-center'>Thursday</h2>
                    </div>
                    <div className='border-x-2'>
                        <h2 className='text-4xl text-center'>Friday</h2>
                    </div>
                    <div className='border-x-2'>
                        <h2 className='text-4xl text-center'>Saturday</h2>
                    </div>
                    <div className='border-x-2'>
                        <h2 className='text-4xl text-center'>Sunday</h2>
                    </div>
                </div>
                <div className=''>
                    <h2>James</h2>
                </div>
            </div>
        </>
    )
};