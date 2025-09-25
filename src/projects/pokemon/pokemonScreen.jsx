import { useEffect, useRef, useState } from "react";
import { PokemonItem } from "./pokemonItem";

export const PokemonScreen = () => {
    const [pokemonItemData, setPokemonItemData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const hasFetched = useRef(false);

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=1&limit=30';


    const fetchPokemonItem = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPokemonItemData((currArr) => [...currArr, data]);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
        }

    }

    const fetchPokemonData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const promises = data.results.map((pokemonItem) =>
                fetchPokemonItem(pokemonItem.url)
            );
            await Promise.all(promises); // wait for all
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        if (!hasFetched.current) {
            fetchPokemonData();
            hasFetched.current = true;
        }
    }, []);


    if (loading) {
        return (
            <>
                <h1>Loading ....</h1>
            </>
        )
    }



    else {
        return (
            <>
                <h1 className="text-center text-4xl mb-10">POKEMONS</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        pokemonItemData.map((pokemonItem, index) => <PokemonItem key={index} dataItem={pokemonItem} />)
                    }
                </div>

            </>

        )
    }

}