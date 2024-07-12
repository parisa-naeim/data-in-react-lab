const StarshipCard = ({ starship }) => {
    return (
        <li className="card">
            <h5>{starship.name}</h5>
            <p>Class: {starship.starship_class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Model: {starship.model}</p>
        </li>
    );
};

export default StarshipCard;
