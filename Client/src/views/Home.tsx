import CardProtas from '../components/card-protas/CardProtas'
import { motion } from 'framer-motion'

const Home = () => {
    const homeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    }
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={homeVariants}
            className='bg-slytherin w-full h-screen flex flex-col justify-center items-center relative'
        >
            <CardProtas />
        </motion.div>
    )
}

export default Home
