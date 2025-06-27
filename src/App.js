
import './App.css';
import Api from './compponetes/Api.js';
import Character from './compponetes/Character.jsx';
import { useEffect, useState } from 'react';
function App() {
    useEffect(() => {
  Api(setResults, setInfo);
}, []);

    const [info, setInfo] = useState(null);
    const [results, setResults] = useState([]);
    return (
        <>
            <header>
                <h1>Rick And Morty</h1>
            </header>
            <section id='app'>
                <ul>
                    {results.map(result =>(<li key ={result.id}>
                        {result.name}{' '}
                        {result.species}{' '}

                        
                    </li>)) }
                </ul>
            </section>

        </>
    );
}
export default App;