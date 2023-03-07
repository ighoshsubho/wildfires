import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const MapHeader = () => {
    return (
        <header className="flex justify-center items-center p-10 bg-red-800 text-white fixed z-100 right-0 left-0 text-xl">
            <h1 className='text-[25px]'><Icon icon={locationIcon} /> Wildfire Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default MapHeader
