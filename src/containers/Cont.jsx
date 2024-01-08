import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonTable from '../components/PokemonTable';
import Name from '../components/Name';
import Threshold from '../components/Threshold';
import loadingGif from '../assets/load.gif';
const Cont = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [minPower, setMinPower] = useState(0);
    const [maxPower, setMaxPower] = useState(0);
    const [searchName, setSearchName] = useState('');
    const [searchThreshold, setSearchThreshold] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));

                const response = await axios.get('/pokemon.json');
                setPokemonData(response.data);
                setIsLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false); 
            }
        };

        fetchData();
    }, []);

    const handleSearchByName = (name) => {
        setSearchName(name);
    };

    const handleSearchByThreshold = (threshold) => {
        setSearchThreshold(threshold);
    };

    const filteredByName = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchName.toLowerCase())
    );

    const filteredByThreshold = filteredByName.filter((pokemon) => {
        const power =
            pokemon.hp +
            pokemon.attack +
            pokemon.defense +
            pokemon.special_attack +
            pokemon.special_defense +
            pokemon.speed;
           
        return power >= parseInt(searchThreshold);
    });

    useEffect(() => {
        const powers = pokemonData.map((pokemon) =>
            pokemon.hp +
            pokemon.attack +
            pokemon.defense +
            pokemon.special_attack +
            pokemon.special_defense +
            pokemon.speed
        );
    
        const newMinPower = Math.min(...powers);
        const newMaxPower = Math.max(...powers);
    
        if (filteredByThreshold.length > 0) {
            const filteredPowers = filteredByThreshold.map((pokemon) =>
                pokemon.hp +
                pokemon.attack +
                pokemon.defense +
                pokemon.special_attack +
                pokemon.special_defense +
                pokemon.speed
            );
    
            setMinPower(Math.min(...filteredPowers));
            setMaxPower(Math.max(...filteredPowers));
        } else {
            setMinPower(newMinPower);
            setMaxPower(newMaxPower);
        }
    }, [filteredByThreshold, pokemonData]);
    

    const filteredData =
        searchThreshold !== ''
            ? filteredByThreshold
            : filteredByName;

    return (
        <div>
             {isLoading ? ( 
                <div className="flex justify-center items-center h-screen">
                    <img src={loadingGif} alt="Loading..." />
                </div>
            ) : (
                <div>
            <div className='flex flex-col  shadow-lg mt-10 border border-gray-100 rounded-lg'>
            <div className='md:flex gap-5 justify-center items-center m-5'>
            <div className="flex-1 w-1/2 m-1">
                <Name onSearch={handleSearchByName} />
            </div>
            <div className="flex-1 w-1/2 m-1">
                <Threshold onThresholdSearch={handleSearchByThreshold} />
            </div>
        </div>
                <div className=' mx-6 mb-5 '> 
                Min Power: {minPower} <br/>
                Max Power: {maxPower}
                </div>
            </div>
            <h1 className="flex items-center justify-center font-bold text-4xl m-4">
                Pokemon
            </h1>
            <PokemonTable data={filteredData} />
        </div>
            )}
        </div>
    );
};

export default Cont;
