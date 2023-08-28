import { useState, useEffect } from 'react'
import AnimatedLogo from '../components/AnimatedLogo'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import intro from '../assets/audios/harry-potter.mp3'
const Landing = () => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [audioPlayed, setAudioPlayed] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const playAudio = () => {
        if (!audioPlayed) {
            const audioElement = new Audio(intro)
            audioElement.play()
            audioElement.volume = 0.2
            setAudioPlayed(true)
            setTimeout(() => {
                setRedirect(true)
            }, 8750)
        }
    }
    useEffect(() => {
        if (redirect) navigate('/home')
    }, [redirect])
    const landingVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    }
    const handlerClick = () => {
        setLoader(true), playAudio()
    }
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={landingVariants}
            className='bg-[#a6332e]  w-full h-screen flex flex-col items-center'
        >
            {loader ? (
                <div>
                    <AnimatedLogo />
                </div>
            ) : (
                <div className='flex flex-col h-full justify-center items-center'>
                    <button
                        style={{ cursor: 'unset' }}
                        onClick={() => handlerClick()}
                        className='btn bg-black cursor-auto'
                    >
                        Cargar
                    </button>
                </div>
            )}
        </motion.div>
    )
}

export default Landing
