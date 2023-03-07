import spinner from '../spinner.gif';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh]">
            <img src={spinner} alt="Loading" className='w-[400px]'/>
            <h1 className='mt-[-200px]'>Fetching Data</h1>
        </div>
    )
}

export default Loader
