import { Container } from "postcss";
import { useEffect, useState } from "react"

const Test = () => {
    const [foods, setFoods] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch (`https://feedme-api.onrender.com/`);
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let foodData = await response.json();
                setFoods(foodData);
                setError(null);
            } catch (error) {
                setError(err.message);
                setFoods(null);
            } finally {
                setLoading(false);
            }
        }

        fetchFoods();
    },[]);

    
  return (
    <div>
        {loading && (
          <div className="text-xl font-medium">Loading Food...</div>
        )}
        {error && <div className="text-red-700">{error}</div>}

      {
        foods && foods.map((food) => (
            <p key={food.id}>{food.name}</p>
        ))
      }
    </div>
  )
}

export default Test
