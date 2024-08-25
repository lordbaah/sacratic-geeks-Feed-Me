import { useEffect, useState } from 'react';
import foodData from '../../data/meals.json';

const RandomFood = () => {
    const [foods, setFoods] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [random, setRandom] = useState(null);

    useEffect(() => {
        // Simulate data fetching with a timeout
        const fetchData = async () => {
            try {
                setLoading(true);
                setTimeout(() => {
                    setFoods(foodData);
                    setLoading(false);
                }, 1000); // Simulated network delay
            } catch (error) {
                setError("Failed to load food data");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (foods.length > 0) {
            const initialFood = Math.floor(Math.random() * foods.length);
            setRandom(foods[initialFood]);
        }
    }, [foods]);

    const generateRandomFood = () => {
        const randomIndex = Math.floor(Math.random() * foods.length);
        setRandom(foods[randomIndex]);
    };

    return (
        <div className='flex flex-col gap-8'>
            {loading && <div className="text-xl font-medium">Loading Food...</div>}
            {error && <div className="text-red-700">{error}</div>}

            {!loading && !error && random && (
                <>
                    <p className='text-xl'>Don't know what to cook for <em className='text-rose-500'>{random.type}</em>? Try this recipe 👇</p>
                    <div className='bg-custom-white p-8 shadow-md rounded'>
                        <h2 className='font-bold text-3xl'>{random.name}</h2>
                        <h3 className='font-bold text-2xl'>Ingredients:</h3>
                        <ul className='list-disc pl-4 mt-4'>
                            {random.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}

            <button
                onClick={generateRandomFood}
                className='bg-btn-bg py-2 px-4 rounded text-custom-white self-center'
                disabled={loading || error}
            >
                Generate Recipe
            </button>
        </div>
    );
};

export default RandomFood;
