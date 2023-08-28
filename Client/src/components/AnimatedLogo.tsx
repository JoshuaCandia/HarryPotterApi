import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logoBlack from '../assets/png/logo-black.png'

const AnimatedLogo = () => {
    const [animationVariant, setAnimationVariant] = useState('visible')

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.1 },
        visible: { opacity: 1, scale: 1, transition: { duration: 3.5 } },
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationVariant('hidden')
        }, 8300)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <motion.div initial='hidden' animate={animationVariant} variants={imageVariants}>
            <motion.img src={logoBlack} alt='Logo' width='300' height='200' />
        </motion.div>
    )
}

export default AnimatedLogo
