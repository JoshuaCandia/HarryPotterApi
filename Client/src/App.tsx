import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const executor = async () => {
            const { data } = await axios('http://localhost:3001/characters/all')
            setCharacters(data)
        }
        executor()
    }, [])
    console.log(characters)
    return (
        <>
            <div>
                <h1>Harry Potter API</h1>
            </div>
        </>
    )
}

export default App
