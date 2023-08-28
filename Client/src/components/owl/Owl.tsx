import style from './owl.module.css'
import { motion } from 'framer-motion'
const Owl = () => {
    const owlVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    }
    const {
        footleft,
        frame,
        tailtop,
        tailbot,
        wingright,
        armpitright,
        shinright,
        shinleft,
        thighright,
        thighleft,
        stick,
        footright,
        bod,
        headback,
        wingleft,
        armpitleft,
        beak,
        nose,
        eyeleft,
        eyeright,
        irisleft,
        irisright,
        spot0,
        spot1,
        spot2,
        spot3,
        spot4,
        spot5,
        spot6,
        spot7,
        spot8,
        spot9,
        chest,
        head,
    } = style

    return (
        <motion.div initial='hidden' animate='visible' variants={owlVariants} className={frame}>
            <div className={tailbot}></div>
            <div className={tailtop}></div>

            <div className={wingright}></div>
            <div className={armpitright}></div>

            <div className={shinright}></div>
            <div className={shinleft}></div>

            <div className={thighright}></div>
            <div className={thighleft}></div>

            <div className={stick}></div>

            <div className={footright}></div>
            <div className={footleft}></div>

            <div className={bod}></div>
            <div className={headback}></div>

            {/* spots */}
            <div className={spot0}></div>
            <div className={spot1}></div>
            <div className={spot2}></div>
            <div className={spot3}></div>
            <div className={spot4}></div>
            <div className={spot5}></div>
            <div className={spot6}></div>
            <div className={spot7}></div>
            <div className={spot8}></div>
            <div className={spot9}></div>

            <div className={chest}></div>
            <div className={head}></div>

            <div className={wingleft}></div>
            <div className={armpitleft}></div>

            <div className={beak}></div>
            <div className={nose}></div>
            <div className={eyeleft}></div>
            <div className={eyeright}></div>
            <div className={irisleft}></div>
            <div className={irisright}></div>
        </motion.div>
    )
}

export default Owl
