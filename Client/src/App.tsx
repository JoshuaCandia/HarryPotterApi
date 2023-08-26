import './App.css'
import logo from './assets/png/logo-png.png'

//components
import Home from './views/Home'
import CardsContainer from './components/CardsContainer'
function App() {
    return (
        <div className='bg-black text-white  flex flex-col pt-4 gap-4 justify-start items-center h-[100%] h-screen'>
            <img className='w-1/2' src={logo} alt='' />
            <CardsContainer />
        </div>
    )
}

export default App
