import { useEffect, useState } from 'react'
import foodData from '../../data/meals.json'

const RandomFood = () => {
    const [foods, setFoods] = useState([]);
    const [random, setRandom] = useState(null);

    useEffect(() => {
        setFoods(foodData);
    }, [])


    useEffect(() => {
        if (foods.length > 0) {
            const initialFood= Math.floor(Math.random() * foods.length);
            setRandom(foods[initialFood]);
        }
    }, [foods])

    const generateRandomFood = () => {
        const randomIndex = Math.floor(Math.random() * foods.length);
        setRandom(foods[randomIndex]);
    }
    // console.log();
    

  return (
    <div className='flex flex-col gap-8'>
      {
        random && (
        <>
            <p className='text-xl'>Don't know what to cook for <em className='text-red-500'>{random.type}</em> ? try this recipce 👇</p>
            <div className='bg-custom-white p-8 shadow-md rounded'>
                <h2 className='font-bold text-3xl'>{random.name}</h2>
                <h3 className='font-bold text-2xl'>Ingredients:</h3>
                <ul className='list-disc pl-4 mt-4'>
                    {
                        random.ingredients.map((ingredient, index)=> (
                            <li key={index}
                            className=''
                            >{ingredient}</li>
                        ))
                    }
                </ul>
            </div>
        </>
        )}

        <button onClick={generateRandomFood}
            className='bg-btn-bg py-2 px-4 rounded text-custom-white self-center'
        >Generate Recipe</button>
    </div>
  )
}

export default RandomFood
