import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonTable from '../components/PokemonTable';

const PokemonContainer = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/pokemon.json'); 
        setPokemonData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  return (
    <div>
      <h1 className='flex items-center justify-center font-bold text-4xl m-4'>Pokemon</h1>
      <PokemonTable data={pokemonData} />
    </div>
  );
};

export default PokemonContainer;
