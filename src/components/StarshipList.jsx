import StarshipCard from './StarshipCard';

const StarshipList = (props) => {

    return (
        <section>
            <h2>Starships</h2>
            <h5>Number of results: {props.starships.length}</h5>
            <ul>
                {props.starships.map((starship, index)=> <StarshipCard key={index} starship={starship} />)}
            </ul>
        </section>
    );
};

export default StarshipList;
