import { useState } from 'react'

import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const changeCount = () => {
        setCount('2')
    }

    return (
        <div className='bg-gray-800 text-white  flex flex-col gap-4 justify-center items-center w-screen h-screen'>
            <h1 className='text-3xl'>HP API</h1>
            <button className='text-xl bg-blue-500 p-2 rounded-md' onClick={changeCount}>
                Click Me
            </button>
            <span>{count}</span>
        </div>
    )
}

export default App
