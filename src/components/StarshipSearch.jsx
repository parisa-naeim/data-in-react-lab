import { useState } from 'react';

const StarshipSearch = (props) => {
    const [name, setName] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(name);
        // setName('');
    };

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={ _handleSubmit }>
                <label>
                    Enter a name:
                    <input
                        type="search"
                        placeholder="Starship name"
                        // required
                        autoFocus
                        onChange={ (event) => setName(event.target.value) }
                        value={ name }
                    />
                </label>
                <button>Search</button>
            </form>
        </section>
    )
};

export default StarshipSearch;
