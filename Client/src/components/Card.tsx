type Character = {
    id: `${string}-${string}-${string}-${string}-${string}`
    name: string
    image: string
}

const Card = ({ data }) => {
    console.log(data)
    return (
        <div>
            {data.map((char: Character) => {
                return <div>{char.name}</div>
            })}
        </div>
    )
}

export default Card
