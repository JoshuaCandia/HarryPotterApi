import { useEffect, useState } from 'react'

import axios from 'axios'

const CardsContainer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('http://localhost:3001/characters')
            setData(data)
        }
        console.log(data)
        getData()
    }, [])
    return <div></div>
}

export default CardsContainer
