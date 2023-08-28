import './App.css'
// Import Hooks
import { Route, Routes } from 'react-router-dom'

//views
import Landing from './views/Landing'
import HomeGriffyndor from './views/home/HomeGriffyndor'

function App() {
    return (
        <div className='text-white flex flex-col justify-start gap-4 justify-start items-center min-h-[100vh] '>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/homegriffyndor' element={<HomeGriffyndor />} />
            </Routes>
        </div>
    )
}

export default App
