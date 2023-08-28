import style from './landingButton.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import Owl from '../owl/Owl'

const LandingButton = ({ handlerClick }) => {
    const [menu, setMenu] = useState(false)
    const start = useSelector(state => state.start)

    useEffect(() => {
        if (start) {
            setTimeout(() => {
                setMenu(true)
            }, [8250])
        }
    })
    const { wrap, span, a } = style

    const landingButtonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    }

    return (
        <div className=''>
            {!start && (
                <div className='flex justify-center align-center pt-8'>
                    <motion.button onClick={() => handlerClick()} className='btn  rounded-md p-2'>
                        <Owl />
                        Abrir Carta
                    </motion.button>
                </div>
            )}

            {menu && (
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={landingButtonVariants}
                    className='absolute top-0 left-[30%]'
                >
                    <span className={span}></span>
                    <div className={wrap}>
                        <Link className={a} to='/homegriffyndor'>
                            <div></div>
                        </Link>
                        <Link className={a} to='/homehufflepuff'>
                            <div></div>
                        </Link>
                        <Link className={a} to='/homeravenclaw'>
                            <div></div>
                        </Link>
                        <Link className={a} to='/homeslytherin'>
                            <div></div>
                        </Link>
                        <Link className={a} to='#'>
                            <div></div>
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default LandingButton
