import { useEffect, useState } from 'react';
// import foodData from '../../data/meals.json'

const RandomFood = () => {
    const [foods, setFoods] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [random, setRandom] = useState(null);

    // useEffect(() => {
    //     setFoods(foodData);
    // }, [])

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch(`https://feedme-api.onrender.com/`);
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const foodData = await response.json();
                setFoods(foodData);
                setError(null);
            } catch (error) {
                setError(error.message);
                setFoods([]);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
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

            {random && (
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
