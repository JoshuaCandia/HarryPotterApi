import './App.css'
import CardsContainer from './components/CardsContainer'

//components
import Home from './views/Home'

function App() {
    return (
        <div className='bg-black text-white  flex flex-col justify-center pt-4 gap-4 justify-start items-center h-[100vh] '>
            <Home />

            <CardsContainer />
        </div>
    )
}

export default App
