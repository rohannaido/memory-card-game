import '../Styles/Card.css'

const Card = (props) => {
    const data = props.data;

    return (
        <div className="card-div" onClick={() => props.onClick(props.data.text)}>
            <div className="image-div">
                <img src={data.img} alt={data.text} />
            </div>
            <p className="card-text">
                {data.text}
            </p>
        </div>
    )
}

export default Card;