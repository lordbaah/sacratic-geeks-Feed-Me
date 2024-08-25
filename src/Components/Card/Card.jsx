// Function to get color based on category
const getCategoryColor = (category) => {
  const colorMap = {
    'Breakfast': 'bg-yellow-300',
    'Lunch': 'bg-green-300',
    'Dinner': 'bg-blue-300',
    'Dessert': 'bg-pink-300',
  };

  // Return the color for the category, or a default color if not found
  return colorMap[category] || 'bg-gray-300';
};

const Card = ({ Foodid, name, category, ingredients, onOpenModal }) => {
  // calling category color function
  const categoryColorClass = getCategoryColor(category);
  // console.log(categoryColorClass);

  return (
    <div className='p-4 border-solid border border-gray-300 rounded flex flex-col justify-between'>
      <h2 className='font-bold'>{name}</h2>
      <div className='mt-4 flex items-center justify-between'>
        <p className={`uppercase text-xs px-2 py-1 rounded-sm ${categoryColorClass}`}>{category}</p>
        <button 
          className='bg-btn-bg text-custom-white text-sm py-2 px-4 rounded'
          onClick={() => onOpenModal(Foodid, name, ingredients)}
        >
          View Ingredients
        </button>
      </div>
    </div>
  )
}

export default Card;