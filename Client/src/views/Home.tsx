import CardProtas from '../components/card-protas/CardProtas'
import logo from '../assets/png/logo-png.png'
const Home = () => {
    return (
        <div className=' flex flex-col justify-center items-center relative'>
            <img src={logo} alt='logo' />
            <CardProtas />
        </div>
    )
}

export default Home
