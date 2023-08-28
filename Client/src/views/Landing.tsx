import { useState, useEffect } from 'react'
import AnimatedLogo from '../components/AnimatedLogo'
import intro from '../assets/audios/harry-potter.mp3'
import { useNavigate } from 'react-router-dom'
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
    return (
        <div className='pt-16 w-full h-screen flex flex-col items-center' onClick={playAudio}>
            {loader ? (
                <div>
                    <AnimatedLogo />
                </div>
            ) : (
                <div className='flex flex-col h-full justify-center items-center'>
                    <button
                        style={{ cursor: 'unset' }}
                        onClick={() => setLoader(true)}
                        className='btn bg-black cursor-auto'
                    >
                        Cargar
                    </button>
                </div>
            )}
        </div>
    )
}

export default Landing
