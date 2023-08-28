import './App.css'
// Import Hooks
import { Route, Routes } from 'react-router-dom'

//views
import Landing from './views/Landing'
import Home from './views/Home'

function App() {
    return (
        <div className='text-white flex flex-col justify-start gap-4 justify-start items-center min-h-[100vh] '>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
