//hooks
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

//assets
import intro from '../assets/audios/harry-potter.mp3'

//components
import LandingButton from '../components/landing-button/LandingButton'
import AnimatedLogo from '../components/AnimatedLogo'

//redux
import { getStarted } from '../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux/es/exports'

const Landing = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const start = useSelector(state => state.start)

    const [loader, setLoader] = useState(false)
    const [audioPlayed, setAudioPlayed] = useState(false)

    useEffect(() => {
        if (location.key === 'mqkakc22') {
            dispatch({ type: 'CLEAR_CACHE' })
        }
    }, [])
    const playAudio = () => {
        if (!audioPlayed) {
            const audioElement = new Audio(intro)
            audioElement.play()
            audioElement.volume = 0.2
            setAudioPlayed(true)

            dispatch(getStarted())
        }
    }

    const landingVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    }

    const handlerClick = () => {
        setLoader(true)
        playAudio()
    }
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={landingVariants}
            className='bg-[#a6332e]  min-w-full min-h-screen flex flex-col items-center pt-4'
        >
            {loader && (
                <div>
                    <AnimatedLogo />
                </div>
            )}
            <LandingButton handlerClick={handlerClick} />
        </motion.div>
    )
}

export default Landing
