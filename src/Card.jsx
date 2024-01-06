function Card({title, body}) {
    return (
        <div className="cards">
            <h1 className="card_heading">{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default Card