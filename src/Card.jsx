import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className="cards">
            <h1 className="card_heading">{props.title}</h1>
            <p>{props.body}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
}

export default Card