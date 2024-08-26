import '../App.css'

function CardItem({ title, body }){
    return (
        <div className='card'>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    )
}

export default CardItem