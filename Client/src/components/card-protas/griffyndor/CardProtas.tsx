import style from './card.module.css'
import harry from '../../../assets/png/griffyndor/harry.png'
import harryTitle from '../../../assets/png/griffyndor/harry_title.png'
import harryBg from '../../../assets/jpg/griffyndor/harry_bg.jpg'
import ron from '../../../assets/png/griffyndor/ron.png'
import ronTitle from '../../../assets/png/griffyndor/ron_title.png'
import ronBg from '../../../assets/jpg/griffyndor/ron_bg.jpg'
import hermione from '../../../assets/png/griffyndor/hermione.png'
import hermioneTitle from '../../../assets/png/griffyndor/hermione_title.png'
import hermioneBg from '../../../assets/jpg/griffyndor/hermione_bg.jpg'

const CardProtas = () => {
    const { card, wrapper, coverImage, title, character } = style
    return (
        <div className='flex '>
            <div className={card}>
                <div className={wrapper}>
                    <img src={harryBg} className={coverImage} />
                </div>
                <img src={harryTitle} className={title} />
                <img src={harry} className={character} />
            </div>
            <div className={card}>
                <div className={wrapper}>
                    <img src={ronBg} className={coverImage} />
                </div>
                <img src={ronTitle} className={title} />
                <img src={ron} className={character} />
            </div>
            <div className={card}>
                <div className={wrapper}>
                    <img src={hermioneBg} className={coverImage} />
                </div>
                <img src={hermioneTitle} className={title} />
                <img src={hermione} className={character} />
            </div>
        </div>
    )
}

export default CardProtas
