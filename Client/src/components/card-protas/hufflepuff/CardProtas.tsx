import style from './card.module.css'
import harry from '../../assets/png/harry.png'
import harryTitle from '../../assets/png/harry_title.png'
import harryBg from '../../assets/jpg/harry_bg.jpg'
import ron from '../../assets/png/ron.png'
import ronTitle from '../../assets/png/ron_title.png'
import ronBg from '../../assets/jpg/ron_bg.jpg'
import hermione from '../../assets/png/hermione.png'
import hermioneTitle from '../../assets/png/hermione_title.png'
import hermioneBg from '../../assets/jpg/hermione_bg.jpg'
type Character = {
    id: `${string}-${string}-${string}-${string}-${string}`
    name: string
    image: string
}

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
